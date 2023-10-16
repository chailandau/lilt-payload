import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const ConversionPanels: CollectionConfig = {
    slug: 'conversion-panels',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'callToAction', 'updatedAt']
    },
    fields: [
        ...requiredField(heading),
        ...richText(),
        ...reference({ name: 'callToAction', relationTo: 'call-to-actions', required: true }),
    ],

};

export default ConversionPanels;
