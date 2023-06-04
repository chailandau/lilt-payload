import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference, referenceArray } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const TileGrids: CollectionConfig = {
    slug: 'tile-grids',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'cta', 'updatedAt']
    },
    fields: [
        ...requiredField(heading()),
        ...richText,
        ...referenceArray({
            name: 'iconTile',
            maxRows: 8,
            relationTo: 'icon-tiles',
            referenceTitle: 'label',
            defaultTitle: 'Icon Title',
            required: true
        }),
        ...reference({ name: 'callToAction', relationTo: 'buttons', required: true }),
    ]
};

export default TileGrids;
