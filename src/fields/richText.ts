import { Field } from 'payload/types';

export const richText = (name = 'content') => [
    {
        name,
        type: 'richText',
        admin: {
            elements: [
                'ul',
                'ol',
                'link'
            ],
            leaves: [
                'bold',
                'italic',
                'underline',
                'strikethrough'
            ],
        }
    }
] as Field[];
