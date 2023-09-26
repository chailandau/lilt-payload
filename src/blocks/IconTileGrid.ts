import type { Block } from 'payload/types';

export const IconTileGrid: Block = {
    slug: 'iconTileGridBlock',
    fields: [
        {
            name: 'iconTileGrid',
            type: 'relationship',
            relationTo: 'icon-tile-grids'
        }
    ]
};
