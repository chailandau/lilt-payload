import { CollectionConfig } from 'payload/types';

import { heading } from '../../fields/heading';
import { image } from '../../fields/image';
import { internalName, internalNameAsTitle } from '../../fields/internalName';
import { reference } from '../../fields/reference';
import { richText } from '../../fields/richText';
import { requiredField } from '../../utils/functions';

const Switchbacks: CollectionConfig = {
    slug: 'switchbacks',
    admin: {
        ...internalNameAsTitle,
        defaultColumns: ['internalName', 'image', 'imageSide', 'updatedAt'],
    },
    fields: [
        ...requiredField(internalName),
        ...requiredField(image),
        {
            name: 'imageSide',
            type: 'radio',
            required: true,
            options: [
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ],
            defaultValue: 'left'
        },
        ...heading(),
        ...richText(),
        ...reference({ name: 'callToAction', relationTo: 'call-to-actions'}),
    ],

};

export default Switchbacks;
