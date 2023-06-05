import React, { useEffect } from 'react';

import { useListRelationships } from '../../../node_modules/payload/dist/admin/components/views/collections/List/RelationshipProvider';

export const ThumbnailCell = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { field, colIndex, collection, cellData, rowData } = props;

    const relationTo = field.relationTo;

    const { getRelationships, documents } = useListRelationships();

    useEffect(() => {
        getRelationships([{
            value: cellData,
            relationTo: field.relationTo,
        }]);
    }, [getRelationships]);

    const thumbnail = documents?.[relationTo]?.[cellData]?.['sizes']?.['thumbnail'];

    return (
        <>
            {thumbnail?.['url'] && (
                <div className="file__thumbnail">
                    <img src={thumbnail?.['url']}></img>
                </div>
            )}
        </>
    );
};

