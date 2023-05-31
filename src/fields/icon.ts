import { Field } from "payload/types";

export const icon = [
    {
        name: "icon",
        type: "relationship",
        relationTo: "images",
        hasMany: false
    }
] as Field[];