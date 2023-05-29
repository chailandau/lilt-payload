import { Field } from "payload/types";

interface HeadingTags {
    headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const heading = ({ headingTag = 'h2' }: HeadingTags): Field[] => ([
    {
        name: 'heading',
        type: 'text'
    },
    {
        name: 'headingTag',
        type: 'text',
        hidden: true,
        hooks: {
            beforeChange: [setHeadingTag(headingTag)]
        }
    }
]) as Field[]

export const setHeadingTag = (headingTag: string, headingTagField = 'headingTag') => {
    return ({ data }) => {
        if (!(headingTagField in data)) {
            return data;
        }

        return {
            [headingTagField]: headingTag
        };
    };
}