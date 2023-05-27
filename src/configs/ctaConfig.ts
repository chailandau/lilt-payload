import { Field } from "payload/types";

export const ctaConfig = [
    {
        name: 'callToAction',
        type: 'relationship',
        relationTo: 'buttons',
        hasMany: false
    }
] as Field[];

export const multiCtaConfig = [
    {
        name: 'callToAction',
        type: 'relationship',
        relationTo: 'buttons',
        hasMany: true,
        max: 2
    }
] as Field[];