import { Field } from 'payload/types';

import { Accordion } from '../blocks/Accordion';
import { ConversionPanel } from '../blocks/ConversionPanel';
import { FeaturedMedia } from '../blocks/FeaturedMedia';
import { FeatureGrid } from '../blocks/FeatureGrid';
import { Hero } from '../blocks/Hero';
import { IconTileGrid } from '../blocks/IconTileGrid';
import { Process } from '../blocks/Process';
import { Special } from '../blocks/Special';
import { Switchback } from '../blocks/Switchback';
import { TextGrid } from '../blocks/TextGrid';
import { TileGrid } from '../blocks/TileGrid';

import { grid } from './grid';
import { internalName } from './internalName';
import { shapes } from './shapes';

export const blocks = [
    {
        name: 'blocks',
        type: 'blocks',
        blocks: [
            Accordion, 
            ConversionPanel,
            FeaturedMedia, 
            FeatureGrid, 
            Hero,
            IconTileGrid,
            Process, 
            Special, 
            Switchback, 
            TextGrid, 
            TileGrid 
        ]
    }
] as Field[];

export const pageSections =  [
    {
        name: 'pageSections',
        type: 'array',
        admin: {
            components: {
                RowLabel: ({ data, index }) => {
                    const fallbackTitle = `Section ${String(index).padStart(2, '0')}`;
                    
                    return data?.internalName || fallbackTitle;
                }
            }
        },
        fields: [
            ...internalName,
            ...blocks,
            ...grid,
            ...shapes
        ]
    }
] as Field[];
