import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { imageReference, reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';
import { toggleFields } from '../../utils/toggleFields';

const FeaturedMedia: CollectionConfig = {
    slug: 'featured-media',
    labels: {
        singular: 'Featured Media',
        plural: 'Featured Media'
    },
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'assetType', 'cta', 'updatedAt']
    },
    fields: [
        ...requiredField(heading),
        ...richText(),
        ...toggleFields({
            radioGroupName: 'assetType',
            fieldChoices: [
                {
                    label: 'Image',
                    field: imageReference({ name: 'image', relationTo: 'images' })
                },
                {
                    label: 'Video',
                    field: reference({ name: 'video', relationTo: 'videos' })
                },
            ],
            defaultValue: 'image'
        }),
        ...reference({ name: 'callToAction', relationTo: 'call-to-actions' }),
    ],

};

export default FeaturedMedia;
