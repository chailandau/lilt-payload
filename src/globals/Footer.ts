import { GlobalConfig } from "payload/types";
import { menuItemConfig } from "../configs/menuItemConfig";

const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: 'copyrightText',
      type: 'text',
      admin: {
        description: 'Use variable "%CURRENT_YEAR%" to signify current year.'
      }
    },
    ...menuItemConfig,
  ],

};

export default Footer;