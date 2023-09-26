import { CollectionConfig } from 'payload/dist/collections/config/types';
import { Field } from 'payload/types';

import { ThumbnailCell } from '../custom/ThumbnailCell';

interface ReferenceProps {
    /** Acts as the field name for the reference field */
    name: string;
    /** Slug of collection you want to reference */
    relationTo: CollectionConfig['slug'] | CollectionConfig['slug'][];
    /** Optionally require the reference field; defaults to false */
    required?: boolean;
}

export const reference = ({ name, relationTo, required = false }: ReferenceProps): Field[] => ([
    {
        name,
        type: 'relationship',
        relationTo,
        hasMany: false,
        required
    },
]) as Field[];

export const imageReference = ({ name, relationTo, required = false }: ReferenceProps): Field[] => ([
    {
        name,
        type: 'upload',
        relationTo,
        required,
        admin: {
            components: {
                Cell: ThumbnailCell
            }
        }
    },
]) as Field[];

