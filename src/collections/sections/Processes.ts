import { CollectionConfig } from 'payload/types';

import { heading } from '../../fields/heading';
import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const Processes: CollectionConfig = {
    slug: 'processes',
    admin: {
        ...internalNameAsTitle,
        defaultColumns: ['internalName', 'cta', 'updatedAt']
    },
    fields: [
        ...internalName,
        {
            name: 'steps',
            type: 'array',
            maxRows: 6,
            admin : {
                components: {
                    RowLabel: ({ data }) => {
                        const fallbackTitle = 'Step';

                        return data?.heading || fallbackTitle;
                    }
                }
            },
            fields: [
                ...requiredField(heading('h2')),
                ...richText
            ]
        },
        ...reference({ name: 'callToAction', relationTo: 'buttons', required: true }),
    ]
};

export default Processes;
