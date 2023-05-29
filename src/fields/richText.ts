import { Field } from "payload/types";

export const richText = [
    {
        name: 'content', // required
        type: 'richText', // required
        defaultValue: [{
            children: [{ text: 'Here is some default content for this field' }],
        }],
        admin: {
            elements: [
                'ul',
                'ol'
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