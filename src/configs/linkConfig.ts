import { Field } from "payload/types";

export const linkConfig = [
    {
        name: 'label',
        type: 'text',
    },
    {
        name: 'linkType',
        type: 'radio',
        options: [
            {
                label: 'Internal',
                value: 'internal',
            },
            {
                label: 'External',
                value: 'external',
            },
        ],
        defaultValue: 'internal',
    },
    {
        name: 'internalLink',
        type: 'relationship',
        relationTo: "pages",
        hasMany: false,
        admin: {
            allowCreate: false,
            description: 'Choose a page to link to.',
            condition: (data) => data.linkType === 'internal' ? true : false
        }
    },
    {
        name: 'externalLink',
        type: 'text',
        admin: {
            description: 'Input a valid URL. Example: "https://google.com/".',
            condition: (data) => data.linkType === 'external' ? true : false
        }
    }
] as Field[]