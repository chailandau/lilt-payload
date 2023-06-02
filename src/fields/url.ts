import { Field } from "payload/types";
import { internalName } from "./internalName";

export const url = [
    {
        name: 'url',
        label: 'URL',
        type: 'text',
        admin: {
            description: 'Input a valid URL. Example: "https://google.com/".',
        }
    }
] as Field[]