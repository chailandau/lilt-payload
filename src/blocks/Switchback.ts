import type { Block } from 'payload/types';

export const Switchback: Block = {
    slug: 'switchbackBlock',
    fields: [
        {
            name: 'switchback',
            type: 'relationship',
            relationTo: 'switchbacks'
        }
    ]
};
