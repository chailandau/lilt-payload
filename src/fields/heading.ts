import { Field } from 'payload/types';

export const heading: Field[] = [
    {
        name: 'heading',
        type: 'text',
    }
] as Field[];

export const headingAsTitle = {
    useAsTitle: 'heading',
};
