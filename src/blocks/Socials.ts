import type { Block } from 'payload/types';

export const Socials: Block = {
    slug: 'socialsBlock',
    fields: [
        {
            name: 'socials',
            type: 'relationship',
            relationTo: 'socials',
            hasMany: true
        }
    ]
};
