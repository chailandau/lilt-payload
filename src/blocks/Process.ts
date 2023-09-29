import type { Block } from 'payload/types';

export const Process: Block = {
    slug: 'processBlock',
    imageURL: '/assets/thumbnails/process.jpg',
    fields: [
        {
            name: 'process',
            type: 'relationship',
            relationTo: 'processes'
        }
    ]
};
