import type { Block } from 'payload/types';

export const Process: Block = {
    slug: 'processBlock',
fields: [
        {
            name: 'process',
            type: 'relationship',
            relationTo: 'processes'
        }
    ]
};
