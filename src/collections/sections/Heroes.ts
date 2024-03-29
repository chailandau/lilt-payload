import { CollectionConfig } from 'payload/types';

import { heading, headingAsTitle } from '../../fields/heading';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { subheading } from '../../fields/subheading';
import { requiredField } from '../../utils/functions';
import { getRowLabel } from '../../utils/getRowLabel';

const Heroes: CollectionConfig = {
  slug: 'heroes',
  labels: {
    singular: 'Hero',
    plural: 'Heroes'
  },
  admin: {
    ...headingAsTitle,
    defaultColumns: ['heading', 'updatedAt']
  },
  fields: [
    ...requiredField(heading),
    ...subheading,
    ...richText(),
    {
      name: 'cta',
      label: 'CTA',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'radio',
          options: [
            {
              label: 'Button',
              value: 'button',
            },
            {
              label: 'Tile',
              value: 'tile',
            },
          ],
          defaultValue: 'button',
        },
        {
          name: 'ctaButtons',
          label: 'CTA Buttons',
          labels: {
            singular: 'CTA Button',
            plural: 'CTA Buttons'
          },
          type: 'array',
          maxRows: 2,
          fields: [
            ...reference({ name: 'callToAction', relationTo: 'call-to-actions' }),
          ],
          admin: {
            condition: (data) => data?.cta?.type === 'button' ? true : false,
            components: getRowLabel({
              relationField: 'callToAction',
              collection: 'call-to-actions',
              referenceTitle: 'internalName',
              defaultTitle: 'CTA Button'
            }),
          },
        },
        {
          name: 'ctaTiles',
          label: 'CTA Tiles',
          labels: {
            singular: 'CTA Tile',
            plural: 'CTA Tiles'
          },
          type: 'array',
          maxRows: 2,
          admin: {
            condition: (data) => data?.cta?.type === 'tile' ? true : false,
            components: getRowLabel({
              relationField: 'callToActionTile',
              collection: 'cta-tiles',
              referenceTitle: 'internalName',
              defaultTitle: 'CTA Tile'
            }),
          },
          fields: [
            ...reference({ name: 'callToActionTile', relationTo: 'cta-tiles' }),
          ]
        },
        
      ],
    },
  ],
  
};

export default Heroes;
