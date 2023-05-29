import { Field } from "payload/types";
import { label } from "./label";

export const link = [
    ...label,
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
            condition: (data, siblingData) => siblingData?.linkType === 'internal' ? true : false
        }
    },
    {
        name: 'externalLink',
        type: 'text',
        admin: {
            description: 'Input a valid URL. Example: "https://google.com/".',
            condition: (data, siblingData) => siblingData?.linkType === 'external' ? true : false
        }
    }
] as Field[]