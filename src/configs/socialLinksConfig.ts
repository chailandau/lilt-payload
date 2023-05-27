import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import { Field } from "payload/types";

export const socialLinksConfig = [
    {
        name: "menuItems",
        type: "array",
        fields: [
            {
                name: 'label',
                type: 'text',
                admin: {
                    description: 'This is used for alt text.'
                }
            },
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
            components: {
                RowLabel: ({ data, index }: RowLabelArgs) => {
                    return data.label || `Menu item ${String(index).padStart(2, '0')}`;
                },
            },
        },
    },
] as Field[];