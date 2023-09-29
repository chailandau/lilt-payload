import type { Block } from 'payload/types';

export const Special: Block = {
    slug: 'specialBlock',
    imageURL: '/assets/thumbnails/special.jpg',
    fields: [
        {
            name: 'special',
            type: 'relationship',
            relationTo: 'specials'
        }
    ]
};
