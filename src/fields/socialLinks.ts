import { Field } from "payload/types";

import { getRowLabel } from "../utils/getRowLabel";

export const socialLinks = [
    {
        name: "socialLinks",
        type: "array",
        maxRows: 4,
        fields: [
            {
                name: "icon",
                type: "relationship",
                relationTo: "media",
                hasMany: false
            },
            {
                name: "link",
                type: "text"
            }
        ],
        admin: {
            components: getRowLabel({
                relationField: 'icon',
                collection: 'media',
                referenceTitle: 'alt',
                defaultTitle: 'Social link'
            }),
        },
    },
] as Field[];