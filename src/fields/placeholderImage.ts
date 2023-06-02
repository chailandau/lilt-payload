import { Field } from 'payload/types';

export const placeholderImage = [
    {
        name: 'placeholderImage',
        type: 'relationship',
        relationTo: 'images',
        hasMany: false,
        admin: {
            description: 'Image displayed before user clicks play button. Typically a frame from the video.'
        }
    }
] as Field[];
