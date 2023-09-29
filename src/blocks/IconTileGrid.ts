import type { Block } from 'payload/types';

export const IconTileGrid: Block = {
    slug: 'iconTileGridBlock',
    imageURL: '/assets/thumbnails/icon-tile-grid.jpg',
    fields: [
        {
            name: 'iconTileGrid',
            type: 'relationship',
            relationTo: 'icon-tile-grids'
        }
    ]
};
