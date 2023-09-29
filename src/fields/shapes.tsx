import { Field } from 'payload/types';

export const shapes =  [
    {
        name: 'enableShapes',
        type: 'checkbox',
        admin: {
            description: 'Enable background shapes for section'
        }
    },
    {   name: 'shapes',
    type: 'array',
    admin: {
        condition: (data, siblingData) =>
        siblingData?.enableShapes ? true : false
    },
    maxRows: 2,
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'shape',
                    type: 'radio',
                    options: [
                        {
                            label: 'Dots',
                            value: 'dots',
                        },
                        {
                            label: 'Pluses',
                            value: 'pluses',
                        }
                    ]
                },
                {
                    name: 'location',
                    type: 'radio',
                    options: [
                        {
                            label: 'Top Left',
                            value: 'top-left',
                        },
                        {
                            label: 'Center Left',
                            value: 'center-left',
                        },
                        {
                            label: 'Bottom Left',
                            value: 'bottom-left',
                        },
                        {
                            label: 'Top Right',
                            value: 'top-right',
                        },
                        {
                            label: 'Center Right',
                            value: 'center-right',
                        },
                        {
                            label: 'Bottom Right',
                            value: 'bottom-right',
                        }
                    ]
                }
            ]
        }
        
    ]
    
}

] as Field[];
