import { CollectionConfig } from 'payload/types';

import { cta } from '../../fields/cta';
import { heading, headingAsTitle } from '../../fields/heading';
import { richText } from '../../fields/richText';

import { requiredField } from '../../utils/functions';


const ConversionPanels: CollectionConfig = {
    slug: 'conversion-panels',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'cta', 'updatedAt']
    },
    fields: [
        ...requiredField(heading()),
        ...richText,
        ...requiredField(cta)
    ],

}

export default ConversionPanels;