import { Field } from 'payload/types';

import { ThumbnailCell } from '../custom/ThumbnailCell';

export const placeholderImage = [
    {
        name: 'placeholderImage',
        type: 'upload',
        relationTo: 'images',
        admin: {
            components: {
                Cell: ThumbnailCell
            },
            description: 'Image displayed before user clicks play button. Typically a frame from the video.'
        }
    }
] as Field[];
