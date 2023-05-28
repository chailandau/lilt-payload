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
                relationTo: "images",
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
                collection: 'images',
                referenceTitle: 'alt',
                defaultTitle: 'Social link'
            }),
        },
    },
] as Field[];