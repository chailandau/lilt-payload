import { Field, TextField } from 'payload/types';

import { isValidUrl } from '../utils/functions';

import { label } from './label';

interface LinkProps {
    hideInternalLabel?: boolean | null;
}

export const link = ({ hideInternalLabel = false }: LinkProps = {}) => {
    const labelField = hideInternalLabel
        ? label.map((field: TextField) => ({
              ...field,
              admin: {
                  condition: (data, siblingData: { linkType: string }) =>
                      siblingData?.linkType === 'internal' ? false : true,
              },
          }))
        : label;

    return [
        ...labelField,
        {
            name: 'linkType',
            type: 'radio',
            options: [
                {
                    label: 'Internal',
                    value: 'internal',
                },
                {
                    label: 'External',
                    value: 'external',
                },
            ],
            defaultValue: 'internal',
        },
        {
            name: 'internalLink',
            type: 'relationship',
            relationTo: 'pages',
            hasMany: false,
            admin: {
                allowCreate: false,
                description: 'Choose a page to link to.',
                condition: (data, siblingData) =>
                    siblingData?.linkType === 'internal' ? true : false,
            },
        },
        {
            name: 'externalLink',
            type: 'text',

            admin: {
                description: 'Input a valid URL. Example: "https://google.com/".',
                condition: (data, siblingData) =>
                    siblingData?.linkType === 'external' ? true : false,
            },
            validate: (val) => {
                if (!isValidUrl(val)) {
                    return 'Please enter a valid URL.';
                }
            },
        },
    ] as Field[];
};
