import type { Block } from 'payload/types';

export const TextGrid: Block = {
    slug: 'textGridBlock',
    imageURL: '/assets/thumbnails/text-grid.jpg',
    fields: [
        {
            name: 'textGrid',
            type: 'relationship',
            relationTo: 'text-grids'
        }
    ]
};
