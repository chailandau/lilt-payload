import { Field } from 'payload/types';

import { heading } from './heading';
import { richText } from './richText';

export const accordionItems = (maxRows: number) => (
    [
        {
            name: 'accordionItems',
            type: 'array',
            maxRows,
            fields: [
                ...heading('h3'),
                ...richText
            ],
            admin: {
                components: {
                    RowLabel: ({ data, index }) => {
                        const fallbackTitle = `Accordion Item ${String(index).padStart(2, '0')}`;

                        return data?.heading || fallbackTitle;
                    }
                },
            }
        }

    ] as Field[]
);
