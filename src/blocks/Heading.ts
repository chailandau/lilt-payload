import type { Block } from 'payload/types';

import { heading } from '../fields/heading';

export const Heading: Block = {
    slug: 'headingBlock',
    fields: [
       ...heading
    ]
};
