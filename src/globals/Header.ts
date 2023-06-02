import { GlobalConfig } from 'payload/types';

import { cta } from '../fields/cta';
import { menuItem } from '../fields/menuItem';

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    ...menuItem,
    ...cta
  ],

};

export default Header;
