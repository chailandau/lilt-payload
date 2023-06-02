import { Field } from "payload/types";

import { getRowLabel } from "../utils/getRowLabel";
import { icon } from "./icon";
import { requiredField } from "../utils/functions";
import { url } from "./url";

export const socialLinks = [
    {
        name: "socialLinks",
        type: "array",
        maxRows: 4,
        fields: [
            ...requiredField(icon),
            ...requiredField(url)
        ],
        admin: {
            components: getRowLabel({
                relationField: 'icon',
                collection: 'icons',
                referenceTitle: 'alt',
                defaultTitle: 'Social link'
            }),
        },
    },
] as Field[];