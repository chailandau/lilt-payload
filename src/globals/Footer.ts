import { GlobalConfig } from 'payload/types';

import { menuItem } from '../fields/menuItem';
import { socialLinks } from '../fields/socialLinks';

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    ...socialLinks,
    ...menuItem,
    {
      name: 'copyrightText',
      type: 'text',
      admin: {
        description: 'Use variable "%CURRENT_YEAR%" to signify current year.'
      }
    },
  ],

};

export default Footer;
