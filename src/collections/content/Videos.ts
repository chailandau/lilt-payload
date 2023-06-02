import { CollectionConfig } from 'payload/types';
import { link } from '../../fields/link';
import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { url } from '../../fields/url';
import { requiredField } from '../../utils/functions';
import { placeholderImage } from '../../fields/placeholderImage';

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

}

export default Videos;