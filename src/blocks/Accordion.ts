import type { Block } from 'payload/types';

export const Accordion: Block = {
    slug: 'accordionBlock',
fields: [
        {
            name: 'accordion',
            type: 'relationship',
            relationTo: 'accordions'
        }
    ]
};
