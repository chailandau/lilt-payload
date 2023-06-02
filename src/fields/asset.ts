import { CollectionConfig } from "payload/dist/collections/config/types";
import { Field } from "payload/types";

export const asset = (relationArray: CollectionConfig['slug'][]): Field[] => ([
    {
        name: 'asset',
        type: 'relationship',
        relationTo: relationArray,
        hasMany: false
    },
]) as Field[];
