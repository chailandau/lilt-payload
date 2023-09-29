import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const IconTileGrids: CollectionConfig = {
    slug: 'icon-tile-grids',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'cta', 'updatedAt']
    },
    fields: [
        ...requiredField(heading()),
        ...richText(),
        {
            name: 'iconTiles',
            type: 'relationship',
            relationTo: 'icon-tiles',
            hasMany: true,
            maxRows: 8,
            required: true
        },
        ...reference({ name: 'callToAction', relationTo: 'call-to-actions', required: true }),
    ]
};

export default IconTileGrids;
