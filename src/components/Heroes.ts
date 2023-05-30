import { CollectionConfig } from 'payload/types';

import { internalName, internalNameAsTitle } from '../fields/internalName';
import { heading } from '../fields/heading';
import { richText } from '../fields/richText';
import { cta } from '../fields/cta';
import { subheading } from '../fields/subheading';


const Heroes: CollectionConfig = {
  slug: 'heroes',
  labels: {
    singular: 'Hero',
    plural: 'Heroes'
  },
  admin: {
    ...internalNameAsTitle,
    defaultColumns: ['internalName', 'heading', 'updatedAt']
  },
  fields: [
    ...internalName,
    ...heading('h1'),
    ...subheading,
    ...richText,
    ...cta
  ],

}

export default Heroes;