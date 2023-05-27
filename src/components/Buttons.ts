import { CollectionConfig } from 'payload/types';
import { linkConfig } from '../configs/linkConfig';

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
    ...linkConfig,
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