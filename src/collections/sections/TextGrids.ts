import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const TextGrids: CollectionConfig = {
    slug: 'text-grids',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'cta', 'updatedAt']
    },
    fields: [
        ...requiredField(heading()),
        ...richText,
        {
            name: 'textTiles',
            type: 'array',
            maxRows: 12,
            admin : {
                components: {
                    RowLabel: ({ data }) => {
                        const fallbackTitle = 'Text Tile';

                        return data?.text || fallbackTitle;
                    }
                }
            },
            fields: [
                {
                    name: 'text',
                    type: 'text'
                }
            ]
        },
        ...reference({ name: 'callToAction', relationTo: 'buttons' }),
    ]
};

export default TextGrids;
