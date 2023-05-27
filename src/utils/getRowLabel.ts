import { useEffect, useState, FC } from 'react';
import axios from 'axios';

import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';

interface getRowLabelProps {
    relationField: string;
    collection: string;
    referenceTitle: string;
    defaultTitle?: string;
}

export const getRowLabel = ({
    relationField,
    collection,
    referenceTitle,
    defaultTitle
}: getRowLabelProps) => ({
    RowLabel: ({ data, index }: RowLabelArgs) => {
        const [title, setTitle] = useState(null);

        const fallbackTitle = `${defaultTitle || 'Item'} ${String(index).padStart(2, '0')}`

        useEffect(() => {
            data[relationField] && (
                axios.get(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/${collection}/${data.link}`)
                    .then((res) => { setTitle(res.data[referenceTitle]) }))
        }, [data[relationField]])

        return data[relationField]
            ? title || fallbackTitle
            : fallbackTitle
    }
});
