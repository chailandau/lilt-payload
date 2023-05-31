import { Field } from "payload/types"

export const capitalizeWord = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export const requiredField = (fieldConfig: Field[]) => {
    return fieldConfig.map((config) => ({
        ...config,
        required: true,
    }));
}