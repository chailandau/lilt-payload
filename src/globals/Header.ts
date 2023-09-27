import { GlobalConfig } from 'payload/types';

import { menuItem } from '../fields/menuItem';
import { reference } from '../fields/reference';

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    ...menuItem,
    ...reference({ name: 'callToAction', relationTo: 'call-to-actions' }),
  ],
};

export default Header;
