import { CollectionConfig } from 'payload/types';

import { setMaxFileSize } from '../../utils/setMaxFileSize';

const Icons: CollectionConfig = {
    slug: 'icons',
    admin: {
        defaultColumns: ['filename', 'alt', 'width', 'height', 'filesize', 'updatedAt'],
    },
    upload: {
        staticURL: '/icons',
        staticDir: 'icons',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        ...setMaxFileSize(512000)
    ],

};

export default Icons;
