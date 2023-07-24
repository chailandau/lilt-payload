import React from 'react';

import { getLinkDestination } from '../utils/getLinkDestination';

export const LinkDestinationCell = ({ rowData }) => {
    const title = getLinkDestination(rowData);

    return <div>{title}</div>;
};
