import type { Block } from 'payload/types';

export const TileGrid: Block = {
    slug: 'tileGridBlock',
    imageURL: '/assets/thumbnails/tile-grid.jpg',
    fields: [
        {
            name: 'tileGrid',
            type: 'relationship',
            relationTo: 'tile-grids'
        }
    ]
};
