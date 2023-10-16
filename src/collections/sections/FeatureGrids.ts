import { CollectionConfig } from 'payload/types';

import { heading } from '../../fields/heading';
import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { requiredField } from '../../utils/functions';

const FeatureGrids: CollectionConfig = {
    slug: 'feature-grids',
    admin: {
        ...internalNameAsTitle,
        defaultColumns: ['internalName', 'image', 'imageSide', 'updatedAt'],
    },
    fields: [
        ...requiredField(internalName),
        ...heading,
        {
            name: 'featureTiles',
            type: 'relationship',
            relationTo: 'feature-tiles',
            hasMany: true,
            maxRows: 6,
            required: true
        }
    ],

};

export default FeatureGrids;
