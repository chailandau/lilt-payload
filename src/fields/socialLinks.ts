import { Field } from "payload/types";

import { getRowLabel } from "../utils/getRowLabel";
import { icon } from "./icon";

export const socialLinks = [
    {
        name: "socialLinks",
        type: "array",
        maxRows: 4,
        fields: [
            ...icon,
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