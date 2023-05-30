import { Field } from "payload/types";

export const internalName = [
    {
        name: 'internalName',
        type: 'text',
        required: true
    }
] as Field[]


export const internalNameAsTitle = {
    useAsTitle: 'internalName',
};