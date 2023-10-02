import { CollectionConfig } from 'payload/types';

import { setMaxFileSize } from '../../utils/setMaxFileSize';

const Images: CollectionConfig = {
    slug: 'images',
    admin: {
        defaultColumns: ['filename', 'alt', 'width', 'height', 'filesize', 'updatedAt'],
    },
    access: {
        read: () => true,
    },
    upload: {
        staticURL: '/images',
        staticDir: 'images',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 175,
                height: 175,
                position: 'center',
            },
        ],
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
