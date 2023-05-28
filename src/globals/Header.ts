import { GlobalConfig } from "payload/types";
import { menuItem } from "../fields/menuItem";
import { cta } from "../fields/cta";

const Header: GlobalConfig = {
  slug: "header",
  fields: [
    ...menuItem,
    ...cta
  ],

};

export default Header;