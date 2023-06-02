import { CollectionConfig } from 'payload/types';

import { setMaxFileSize } from '../../utils/setMaxFileSize';

const Images: CollectionConfig = {
    slug: 'images',
    admin: {
        defaultColumns: ['filename', 'alt', 'width', 'height', 'filesize', 'updatedAt'],
    },
    upload: {
        staticURL: '/images',
        staticDir: 'images',
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

export default Images;