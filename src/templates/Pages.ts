import { CollectionConfig } from 'payload/types';

import { pageSections } from '../fields/section';
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
  access: {
    read: () => true
  },
  fields: [
    ...title,
    ...slug,
    ...pageSections
  ],
};

export default Pages;
