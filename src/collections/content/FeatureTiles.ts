import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { image } from '../../fields/image';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const FeatureTiles: CollectionConfig = {
    slug: 'feature-tiles',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'image', 'updatedAt'],
    },
    fields: [
        ...requiredField(heading),
        ...requiredField(image),
        ...richText()
    ]
};

export default FeatureTiles;
