import payload from 'payload';
import { Button } from 'payload/generated-types';
import { CollectionConfig } from 'payload/types';

import { LinkDestinationCell } from '../../custom/LinkDestinationCell';
import { link } from '../../fields/link';
import { capitalizeWord } from '../../utils/functions';

const getPageTitle = async ({ data }: { data: Partial<Button> }) => {
  if (data?.linkType === 'internal' && data?.internalLink) {
    const findPage = await payload.findByID({
      collection: 'pages',
      id: data?.internalLink as string
    });

    return `${findPage?.title} page` || 'Undefined';
  } else {
    return data?.externalLink || 'Undefined';
  }
};

const Buttons: CollectionConfig = {
  slug: 'buttons',
  admin: {
    useAsTitle: 'fullTitle',
    defaultColumns: ['label', 'linkType', 'linksTo', 'color', 'updatedAt'],
  },
  fields: [
    ...link(),
    {
      name: 'linksTo',
      type: 'ui',
      admin: {
        components: {
          Field: () => null,
          Cell: LinkDestinationCell,
        },
      },
    },
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
    {
      name: 'fullTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData['fullTitle'];
          }
        ],
        afterRead: [
          async ({ data }) => `${data?.label} (${data?.linkType}) ▸ ${await getPageTitle({ data })} ▸ ${capitalizeWord(data?.color)}`
        ],
      },
    }
  ],

};

export default Buttons;
