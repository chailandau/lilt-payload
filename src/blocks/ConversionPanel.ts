import type { Block } from 'payload/types';

export const ConversionPanel: Block = {
    slug: 'conversionPanelBlock',
    imageURL: '/assets/thumbnails/conversion-panel.jpg',
    fields: [
            {
                name: 'conversionPanel',
                type: 'relationship',
                relationTo: 'conversion-panels'
            }
        ]
};
