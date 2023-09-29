import type { Block } from 'payload/types';

export const Accordion: Block = {
    slug: 'accordionBlock',
    imageURL: '/assets/thumbnails/accordion.jpg',
    fields: [
        {
            name: 'accordion',
            type: 'relationship',
            relationTo: 'accordions'
        }
    ]
};
