import { Field, RadioField, TextField } from 'payload/types';

import { getMenuItemLabel } from '../utils/getMenuItemLabel';

import { link } from './link';

const menuLinkFields = [
    {
        name: 'overridePageName',
        type: 'checkbox',
        admin: {
            description: 'Override the page name with a custom label.',
            condition: (data, siblingData: { linkType: string }) => siblingData?.linkType === 'internal' ? true : false
        }
    },
    {
        name: 'internalCustomLabel',
        label: 'Custom Label',
        type: 'text',
        admin: {
            condition: (data, siblingData: { overridePageName: boolean; linkType: string }) => (siblingData?.overridePageName === true && siblingData?.linkType === 'internal') ? true : false
        }
    },
];

export const menuItem = [
    {
        name: 'menuItems',
        type: 'array',
        admin: {
            components: getMenuItemLabel('Menu item'),
        },
        fields: [
            ...link({ hideInternalLabel: true }).map((field: TextField | RadioField) => {
                if (field.name === 'linkType' && 'options' in field) {
                    return {
                        ...field,
                        label: 'Menu item type',
                        options: [
                            ...field.options,
                            {
                                label: 'Submenu',
                                value: 'submenu',
                            },
                        ],
                    };
                }

                return field;
            }),
            ...menuLinkFields,
            {
                name: 'submenuItems',
                type: 'array',

                fields: [
                    ...link({ hideInternalLabel: true }),
                    ...menuLinkFields
                ],
                admin: {
                    description: 'Add submenu items to create a dropdown menu.',
                    components: getMenuItemLabel('Submenu item'),
                    condition: (data, siblingData: { linkType: string }) =>
                        siblingData?.linkType === 'submenu' ? true : false,
                },
            },
        ],
    },
] as Field[];
