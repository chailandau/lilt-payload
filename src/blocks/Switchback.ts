import type { Block } from 'payload/types';

export const Switchback: Block = {
    slug: 'switchbackBlock',
    imageURL: '/assets/thumbnails/switchback.jpg',
    fields: [
        {
            name: 'switchback',
            type: 'relationship',
            relationTo: 'switchbacks'
        }
    ]
};
