import React from 'react';

import { Field } from "payload/types";

import { link } from "./link";

import { capitalizeWord } from "../utils/functions";

export const menuItem = [
    {
        name: "menuItems",
        type: "array",
        fields: [
            ...link
        ],
        admin: {
            components: {
                RowLabel: ({ data, index }) => {
                    const fallbackTitle = `Menu Item ${String(index).padStart(2, '0')}`
                    return (
                        <>
                            <strong>{data?.label || fallbackTitle}</strong>
                            &nbsp;|&nbsp;
                            {capitalizeWord(data?.linkType)}
                        </>
                    )
                },
            }
        }
    },
] as Field[];