import { CollectionConfig } from 'payload/types';
import { link } from '../fields/link';
import { internalName, internalNameAsTitle } from '../fields/internalName';
import { icon } from '../fields/icon';

const CtaTiles: CollectionConfig = {
  slug: 'cta-tiles',
  labels: {
    singular: 'CTA Tile',
    plural: 'CTA Tiles'
  },
  admin: {
    ...internalNameAsTitle,
    defaultColumns: ['internalName', 'label', 'linkType', 'updatedAt']
  },
  fields: [
    ...internalName,
    ...icon,
    ...link,

  ],

}

export default CtaTiles;