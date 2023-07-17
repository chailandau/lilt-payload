import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import { useEffect, useState } from 'react';

interface GetRowLabelProps {
    /** Name of relation field you are referencing; used to check if field is populated */
    relationField: string;
    /** Name of collection you are relating to */
    collection: string;
    /** Name of field you want the label to use as its title (this is in the nested reference) */
    referenceTitle: string;
    /** Default title you want to fallback on if no data exists */
    defaultTitle?: string;
}

export const getRowLabel = ({
    relationField,
    collection,
    referenceTitle,
    defaultTitle
}: GetRowLabelProps) => ({
    RowLabel: ({ data, index }: RowLabelArgs) => {
        const [title, setTitle] = useState(null);

        const fallbackTitle = `${defaultTitle || 'Item'} ${String(index).padStart(2, '0')}`;

        const { serverURL } = useConfig();

        useEffect(() => {
            data[relationField] && (
                axios.get(`${serverURL}/api/${collection}/${data[relationField]}`)
                    .then((res) => { setTitle(res.data[referenceTitle]); }));
        }, [data[relationField]]);

        return data[relationField]
            ? title || fallbackTitle
            : fallbackTitle;
    }
});
