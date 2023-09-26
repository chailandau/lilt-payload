import type { Block } from 'payload/types';

export const FeatureGrid: Block = {
    slug: 'featureGridBlock',
    fields: [
        {
            name: 'featureGrid',
            type: 'relationship',
            relationTo: 'feature-grids'
        }
    ]
};
