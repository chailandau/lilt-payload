import { CollectionConfig } from 'payload/types';

import { setMaxFileSize } from '../utils/setMaxFileSize';

const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        defaultColumns: ['filename', 'alt', 'width', 'height', 'filesize', 'updatedAt'],
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        ...setMaxFileSize(2621440)
    ],

};

export default Media;