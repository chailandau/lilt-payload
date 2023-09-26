import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const TileGrids: CollectionConfig = {
    slug: 'tile-grids',
    admin: {
        ...headingAsTitle,
        defaultColumns: ['heading', 'cta', 'updatedAt']
    },
    fields: [
        ...requiredField(heading()),
        ...richText,
        {
            name: 'tiles',
            type: 'array',
            maxRows: 6,
            admin : {
                components: {
                    RowLabel: ({ data }) => {
                        const fallbackTitle = 'Tile';

                        return data?.heading || fallbackTitle;
                    }
                }
            },
            fields: [
               ...heading('h3'),
               ...richText
            ]
        },
        ...reference({ name: 'callToAction', relationTo: 'buttons' }),
    ]
};

export default TileGrids;
