import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';

import { capitalizeWord } from './functions';

export const getMenuItemLabel = (defaultTitle: string) => ({
        RowLabel: ({ data, index }) => {
            const [title, setTitle] = useState(null);

            const fallbackTitle = `${defaultTitle} ${String(index).padStart(2, '0')}`;

            const titleWithType = (itemTitle: string) => (
                <>
                    <strong>{itemTitle}</strong>
                    &nbsp;|&nbsp;
                    {capitalizeWord(data?.linkType)}
                </>
            );

            const { serverURL } = useConfig();

            useEffect(() => {
                if (data?.linkType === 'internal') {
                    if(data?.internalLink) {
                        data?.overridePageName
                          ?  setTitle(titleWithType(data?.internalCustomLabel || fallbackTitle))
                        : axios.get(`${serverURL}/api/pages/${data.internalLink}`)
                            .then((res) => {setTitle(titleWithType(res?.data?.title));
                            });
                    } else {
                        setTitle(titleWithType(fallbackTitle));
                    }
                } else {
                    return setTitle(titleWithType(data?.label || fallbackTitle));
                }
            }, [
                data?.internalLink, 
                data?.label, 
                data?.linkType, 
                data?.overridePageName, 
                data?.internalCustomLabel
            ]);

            return title;
        },
    }
);
