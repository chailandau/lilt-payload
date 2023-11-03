import { CollectionConfig } from 'payload/types';

import { legalBlocks } from '../fields/section';
import { slug } from '../fields/slug';
import { title, titleAsTitle } from '../fields/title';
import { generateSlug } from '../utils/generateSlug';

const LegalPage: CollectionConfig = {
  slug: 'legal-page',
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
    ...legalBlocks
  ],
};

export default LegalPage;
