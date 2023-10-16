import { CollectionConfig } from 'payload/types';

import { heading } from '../../fields/heading';
import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';

const TextGrids: CollectionConfig = {
    slug: 'text-grids',
    admin: {
        ...internalNameAsTitle,
        defaultColumns: ['internalName', 'heading', 'cta', 'updatedAt']
    },
    fields: [
        ...internalName,
        ...heading,
        ...richText(),
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
        ...reference({ name: 'callToAction', relationTo: 'call-to-actions' }),
    ]
};

export default TextGrids;
