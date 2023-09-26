import type { Block } from 'payload/types';

export const TileGrid: Block = {
    slug: 'tileGridBlock',
    fields: [
        {
            name: 'tileGrid',
            type: 'relationship',
            relationTo: 'tile-grids'
        }
    ]
};
