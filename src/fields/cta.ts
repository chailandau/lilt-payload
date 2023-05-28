import { Field } from "payload/types";

export const cta = [
    {
        name: 'callToAction',
        type: 'relationship',
        relationTo: 'buttons',
        hasMany: false
    }
] as Field[];

export const multiCta = [
    {
        name: 'callToAction',
        type: 'relationship',
        relationTo: 'buttons',
        hasMany: true,
        max: 2
    }
] as Field[];