import { Field } from 'payload/types';

export const grid =  [
    {
        name: 'enableGrid',
        type: 'checkbox',
        admin: {
            description: 'Enable background grid for section'
        }
    },
    {
        name: 'gridColor',
        type: 'radio',
        admin: {
            condition: (data, siblingData) =>
            siblingData?.enableGrid ? true : false,
        },
        options: [
            {
                label: 'Purple',
                value: 'purple',
            },
            {
                label: 'Green',
                value: 'green',
            },
        ],
        defaultValue: 'purple',
    },
    
] as Field[];
