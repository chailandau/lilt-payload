import type { Block } from 'payload/types';

export const Hero: Block = {
    slug: 'heroBlock',
    fields: [
        {
            name: 'hero',
            type: 'relationship',
            relationTo: 'heroes'
        }
    ]
};
