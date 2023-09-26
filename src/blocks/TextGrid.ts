import type { Block } from 'payload/types';

export const TextGrid: Block = {
    slug: 'textGridBlock',
    fields: [
        {
            name: 'textGrid',
            type: 'relationship',
            relationTo: 'text-grids'
        }
    ]
};
