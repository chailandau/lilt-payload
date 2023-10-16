import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { subheading } from '../../fields/subheading';
import { requiredField } from '../../utils/functions';

const Specials: CollectionConfig = {
    slug: 'specials',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'subheading', 'callToAction', 'updatedAt']
    },
    fields: [
        ...requiredField(heading),
        ...subheading,
        ...richText(),
        ...richText('sideBox'),
        ...reference({ name: 'textGrid', relationTo: 'text-grids', required: true }),
    ],

};

export default Specials;
