import { CollectionConfig } from 'payload/types';

import { internalName, internalNameAsTitle } from '../fields/internalName';
import { heading } from '../fields/heading';
import { richText } from '../fields/richText';


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
    ...heading('h1'),
    ...richText
  ],

}

export default Heroes;