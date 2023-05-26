import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import {  GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  fields: [
    {
      name: "menuItems",
      type: "array",
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'label',
          type: 'text',
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
  ],

};

export default Header;