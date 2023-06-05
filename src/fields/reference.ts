import { CollectionConfig } from 'payload/dist/collections/config/types';
import { Field } from 'payload/types';

import { getRowLabel } from '../utils/getRowLabel';

interface ReferenceProps {
    /** Acts as the field name for the reference field */
    name: string;
    /** Slug of collection you want to reference */
    relationTo: CollectionConfig['slug'] | CollectionConfig['slug'][];
    /** Optionally require the reference field; defaults to false */
    required?: boolean;
}

interface ReferenceArrayProps extends Omit<ReferenceProps, 'relationTo'> {
    /** maxRows for array field */
    maxRows: number;
    /** Slug of collection you want to reference */
    relationTo: CollectionConfig['slug'];
    /** Reference field name you want to use as row title for `getRowLabel` */
    referenceTitle: string;
    /** Fallback row title if referenceTitle field is empty or cannot be retrieved by `getRowLabel` */
    defaultTitle: string;
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
        required
    },
]) as Field[];

export const referenceArray = ({ name, maxRows, relationTo, referenceTitle, defaultTitle, required = false }: ReferenceArrayProps): Field[] => ([
    {
        name: `${name}s`,
        type: 'array',
        maxRows,
        fields: [
            ...reference({ name, relationTo, required }),
        ],
        admin: {
            components: getRowLabel({
                relationField: name,
                collection: relationTo,
                referenceTitle,
                defaultTitle
            }),
        },
    },
]) as Field[];
