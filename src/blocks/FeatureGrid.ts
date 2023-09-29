import type { Block } from 'payload/types';

export const FeatureGrid: Block = {
    slug: 'featureGridBlock',
    imageURL: '/assets/thumbnails/feature-grid.jpg',
    fields: [
        {
            name: 'featureGrid',
            type: 'relationship',
            relationTo: 'feature-grids'
        }
    ]
};
