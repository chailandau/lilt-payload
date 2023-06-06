import { Field } from 'payload/types';

import { ThumbnailCell } from '../custom/ThumbnailCell';

export const image = [
    {
        name: 'image',
        type: 'upload',
        relationTo: 'images',
        admin: {
            components: {
                Cell: ThumbnailCell
            }
        }
    }
] as Field[];
