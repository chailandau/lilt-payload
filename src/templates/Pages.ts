import { CollectionConfig } from 'payload/types';

import { slug } from '../fields/slug';
import { title } from '../fields/title';

import { generateSlug } from '../utils/generateSlug';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt']
  },
  hooks: {
    beforeChange: [generateSlug('title')]
  },
  fields: [
    ...title,
    ...slug,
  ],
}

export default Pages;