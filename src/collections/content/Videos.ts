import { CollectionConfig } from 'payload/types';

import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { placeholderImage } from '../../fields/placeholderImage';
import { url } from '../../fields/url';
import { requiredField } from '../../utils/functions';

const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    ...internalNameAsTitle,
    defaultColumns: ['internalName', 'url', 'placeholderImage']
  },
  fields: [
    ...internalName,
    ...requiredField(url),
    ...requiredField(placeholderImage)
  ],

};

export default Videos;
