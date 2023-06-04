import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const FeaturedMedia: CollectionConfig = {
    slug: 'featured-media',
    labels: {
        singular: 'Featured Media',
        plural: 'Featured Media'
    },
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'cta', 'updatedAt']
    },
    fields: [
        ...requiredField(heading()),
        ...richText,
        ...reference({ name: 'asset', relationTo: ['images', 'videos'], required: true }),
        ...reference({ name: 'callToAction', relationTo: 'buttons' }),
    ],

};

export default FeaturedMedia;
