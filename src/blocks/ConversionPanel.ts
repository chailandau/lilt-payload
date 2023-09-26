import type { Block } from 'payload/types';

export const ConversionPanel: Block = {
    slug: 'conversionPanelBlock',
fields: [
        {
            name: 'conversionPanel',
            type: 'relationship',
            relationTo: 'conversion-panels'
        }
    ]
};
