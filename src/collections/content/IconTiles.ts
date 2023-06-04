import { CollectionConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { label, labelAsTitle } from '../../fields/label';
import { requiredField } from '../../utils/functions';

const IconTiles: CollectionConfig = {
    slug: 'icon-tiles',
    admin: {
        ...labelAsTitle,
        defaultColumns: ['label', 'icon']
    },
    fields: [
        ...requiredField(label),
        ...requiredField(icon),
    ],
};

export default IconTiles;
