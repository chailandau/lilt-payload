import { CollectionConfig } from 'payload/types';

import { accordionItems } from '../../fields/accordionItem';
import { heading, headingAsTitle } from '../../fields/heading';
import { requiredField } from '../../utils/functions';

const Accordions: CollectionConfig = {
    slug: 'accordions',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'updatedAt'],
    },
    fields: [
        ...requiredField(heading),
        ...accordionItems(8)
    ],

};

export default Accordions;
