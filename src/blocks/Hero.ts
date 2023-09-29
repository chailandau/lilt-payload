import type { Block } from 'payload/types';

export const Hero: Block = {
    slug: 'heroBlock',
    imageURL: '/assets/thumbnails/hero.jpg',
    fields: [
        {
            name: 'hero',
            type: 'relationship',
            relationTo: 'heroes',
        }
    ]
};
