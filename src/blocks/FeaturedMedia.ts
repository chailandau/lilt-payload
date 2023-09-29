import type { Block } from 'payload/types';

export const FeaturedMedia: Block = {
    slug: 'featuredMediaBlock',
    imageURL: '/assets/thumbnails/featured-media.jpg',
    fields: [
        {
            name: 'featuredMedia',
            type: 'relationship',
            relationTo: 'featured-media'
        }
    ]
};
