import { CollectionConfig } from 'payload/types';

import { slug } from '../fields/slug';
import { title, titleAsTitle } from '../fields/title';
import { generateSlug } from '../utils/generateSlug';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    ...titleAsTitle,
    defaultColumns: ['title', 'slug', 'updatedAt']
  },
  hooks: {
    beforeChange: [generateSlug('title')]
  },
  fields: [
    ...title,
    ...slug,
  ],
};

export default Pages;
