import { Field } from 'payload/types';

export const cta = [
    {
        name: 'callToAction',
        type: 'relationship',
        relationTo: 'buttons',
        hasMany: false
    }
] as Field[];

export const ctaTile = [
    {
        name: 'callToActionTile',
        type: 'relationship',
        relationTo: 'cta-tiles',
        hasMany: false
    }
] as Field[];
