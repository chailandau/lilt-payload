import { Field } from 'payload/types';
import React from 'react';

import { capitalizeWord } from '../utils/functions';

import { link } from './link';

export const menuItem = [
    {
        name: 'menuItems',
        type: 'array',
        fields: [
            ...link
        ],
        admin: {
            components: {
                RowLabel: ({ data, index }) => {
                    const fallbackTitle = `Menu Item ${String(index).padStart(2, '0')}`;

                    return (
                        <>
                            <strong>{data?.label || fallbackTitle}</strong>
                            &nbsp;|&nbsp;
                            {capitalizeWord(data?.linkType)}
                        </>
                    );
                },
            }
        }
    },
] as Field[];
