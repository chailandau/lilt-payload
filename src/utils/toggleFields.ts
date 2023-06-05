import { Field } from 'payload/types';

interface FieldChoice {
    /** Label (sentence case) for field */
    label: string;
    /** Field to be rendered if corresponding choice is selected */
    field: Field[];
}

interface ToggleFieldsProps {
    /** Name for radio group containing choices */
    radioGroupName: string;
    /** Array of field data used to generate toggleable fields */
    fieldChoices: FieldChoice[];
    /** Value (lowercase) of default radio button to be selected */
    defaultValue?: string;
}

export const toggleFields = ({
    radioGroupName,
    fieldChoices,
    defaultValue
}: ToggleFieldsProps) => (
    [
        {
            name: radioGroupName,
            type: 'radio',
            options: fieldChoices.map((field) => ({
                label: field.label,
                value: field.label.toLowerCase()
            })),
            defaultValue,
        },
        ...fieldChoices.flatMap((fieldChoice) => (
            fieldChoice.field.flatMap(config => ({
                ...config,
                admin: {
                    condition: (data) => data?.[radioGroupName] === fieldChoice.label.toLowerCase() ? true : false
                }
            }))
        ))
    ]) as Field[];
