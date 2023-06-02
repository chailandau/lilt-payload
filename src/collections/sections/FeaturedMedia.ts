import { CollectionConfig } from 'payload/types';

import { cta } from '../../fields/cta';
import { heading, headingAsTitle } from '../../fields/heading';
import { richText } from '../../fields/richText';

import { requiredField } from '../../utils/functions';
import { asset } from '../../fields/asset';


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
        ...requiredField(asset(['images', 'videos'])),
        ...cta
    ],

}

export default FeaturedMedia;