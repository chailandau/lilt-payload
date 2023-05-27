import { Field } from "payload/types";
import { getRowLabel } from '../utils/getRowLabel';

export const menuItemConfig = [
    {
        name: "menuItems",
        type: "array",
        fields: [
            {
                name: "link",
                type: "relationship",
                relationTo: "pages",
                hasMany: false,
                admin: {
                    allowCreate: false,
                }
            },
        ],
        admin: {
            components: getRowLabel({
                relationField: 'link',
                collection: 'pages',
                referenceTitle: 'title',
                defaultTitle: 'Menu item'
            }),
        },
    },
] as Field[];