import { CollectionConfig } from 'payload/types';

import { requiredField } from '../../utils/functions';
import { heading, headingAsTitle } from '../../fields/heading';


const ConversionPanels: CollectionConfig = {
    slug: 'conversion-panels',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['label', 'icon']
    },
    fields: [
        ...requiredField(heading()),

    ],

}

export default ConversionPanels;