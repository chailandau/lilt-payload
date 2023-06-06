import { Field } from 'payload/types';

import { ThumbnailCell } from '../custom/ThumbnailCell';

export const icon = [
    {
        name: 'icon',
        type: 'upload',
        relationTo: 'icons',
        required: true,
        admin: {
            components: {
                Cell: ThumbnailCell
            }
        }
    }
] as Field[];
