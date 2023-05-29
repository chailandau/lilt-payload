import { Field } from "payload/types";

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const heading = (headingTag?: HeadingTags): Field[] => ([
    {
        name: 'heading',
        type: 'text',
    },
    {
        name: 'headingTag',
        type: 'text',
        defaultValue: `${headingTag || 'h2'}`,
        admin: {
            hidden: true
        }

    },
]) as Field[]

