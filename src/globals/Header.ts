import { GlobalConfig } from "payload/types";
import { menuItemConfig } from "../configs/menuItemConfig";
import { ctaConfig } from "../configs/ctaConfig";

const Header: GlobalConfig = {
  slug: "header",
  fields: [
    ...menuItemConfig,
    ...ctaConfig
  ],

};

export default Header;