import { Field } from 'payload/types';

export const richText = [
    {
        name: 'content',
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
