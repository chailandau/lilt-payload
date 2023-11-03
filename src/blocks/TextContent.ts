import type { Block } from 'payload/types';

import { heading } from '../fields/heading';
import { richText } from '../fields/richText';

export const TextContent: Block = {
    slug: 'textContentBlock',
    imageURL: '/assets/thumbnails/text-block.jpg',
    fields: [
        {
            name: 'textContent',
            type: 'array',
            minRows: 1,
            required: true,
            admin: {
                    components: {
                        RowLabel: ({ data }) => {
                            const fallbackTitle = 'Text Content';
    
                            return data?.heading || fallbackTitle;
                        }
                }
            },
            fields: [
                ...heading,
                ...richText()
            ]
        }
    ]
};
