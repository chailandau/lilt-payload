import { CollectionConfig } from 'payload/types';
import { link } from '../fields/link';

const Buttons: CollectionConfig = {
  slug: 'buttons',
  admin: {
    useAsTitle: 'internalName',
  },
  fields: [
    {
      name: 'internalName',
      type: 'text'
    },
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
      ],
      defaultValue: 'blue'
    },
  ],

}

export default Buttons;