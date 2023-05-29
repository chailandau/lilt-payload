import { CollectionConfig } from 'payload/types';

import { internalName, internalNameAsTitle } from '../fields/internalName';
import { heading } from '../fields/heading';


const Heroes: CollectionConfig = {
  slug: 'heroes',
  labels: {
    singular: 'Hero',
    plural: 'Heroes'
  },
  admin: {
    ...internalNameAsTitle,
    defaultColumns: ['internalName', 'label', 'linkType', 'updatedAt']
  },
  fields: [
    ...internalName,
    ...heading({ headingTag: 'h1' })
  ],

}

export default Heroes;