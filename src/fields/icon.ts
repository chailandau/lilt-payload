import { Field } from "payload/types";

export const icon = [
    {
        name: "icon",
        type: "relationship",
        relationTo: "icons",
        hasMany: false
    }
] as Field[];