import { CollectionConfig } from 'payload/types';

import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { link } from '../../fields/link';

const Buttons: CollectionConfig = {
  slug: 'buttons',
  admin: {
    ...internalNameAsTitle,
    defaultColumns: ['internalName', 'label', 'linkType', 'updatedAt']
  },
  fields: [
    ...internalName,
    ...link,
    {
      name: 'color',
      type: 'radio',
      options: [
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'White',
          value: 'white',
        },
      ],
      defaultValue: 'blue'
    },
  ],

};

export default Buttons;
