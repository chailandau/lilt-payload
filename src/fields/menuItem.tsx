import { Field } from 'payload/types';
import React from 'react';

import { capitalizeWord } from '../utils/functions';

import { link } from './link';

const getLabel = (defaultTitle: string) => ({
    RowLabel: ({ data, index }) => {
        const fallbackTitle = `${defaultTitle} ${String(index).padStart(2, '0')}`;

        return (
            <>
                <strong>{data?.label || fallbackTitle}</strong>
                &nbsp;|&nbsp;
                {capitalizeWord(data?.linkType)}
            </>
        );
    },
});

export const menuItem = [
    {
        name: 'menuItems',
        type: 'array',
        admin: {
            components: getLabel('Menu Item')
        },
        fields: [
            ...link,
            {
                name: 'submenuItems',
                type: 'array',
                fields: [
                    ...link
                ],
                admin: {
                    description: 'Add submenu items here to create a dropdown menu.',
                    components: getLabel('Submenu Item')
                }
            }
        ],

    },
] as Field[];
