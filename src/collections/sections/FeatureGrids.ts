import { CollectionConfig } from 'payload/types';

import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { referenceArray } from '../../fields/reference';
import { requiredField } from '../../utils/functions';

const FeatureGrids: CollectionConfig = {
    slug: 'feature-grids',
    admin: {
        ...internalNameAsTitle,
        defaultColumns: ['internalName', 'image', 'imageSide', 'updatedAt'],
    },
    fields: [
        ...requiredField(internalName),
        ...referenceArray({
            name: 'featureTile',
            maxRows: 4,
            relationTo: 'feature-tiles',
            referenceTitle: 'heading',
            defaultTitle: 'Feature Tile',
            required: true
        }),
    ],

};

export default FeatureGrids;
