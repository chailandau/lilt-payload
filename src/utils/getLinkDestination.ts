import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import { Button } from 'payload/generated-types';
import { useEffect, useState } from 'react';

/**
 * Retrieves `link` destination based on provided `rowData`.
 *
 * @param {Object} linkRowData - Data object representing a row.
 * @return {string} Link destination.
 */
export const getLinkDestination = (linkRowData: Partial<Button>): string => {
    const [linkDestination, setLinkDestination] = useState('');

    const { serverURL } = useConfig();

    useEffect(() => {
        linkRowData?.linkType === 'internal'
            ? linkRowData?.internalLink &&
            axios.get(`${serverURL}/api/pages/${linkRowData.internalLink}`).then((res) => {
                setLinkDestination(`${res.data.title} Page`);
            })
            : linkRowData?.externalLink && setLinkDestination(linkRowData.externalLink);
    }, [linkRowData]);

    return linkDestination;
};
