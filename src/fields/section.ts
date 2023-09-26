import { Field } from 'payload/types';

import { Accordion } from '../blocks/Accordion';
import { ConversionPanel } from '../blocks/ConversionPanel';
import { FeatureGrid } from '../blocks/FeatureGrid';
import { Hero } from '../blocks/Hero';
import { IconTileGrid } from '../blocks/IconTileGrid';
import { Process } from '../blocks/Process';
import { Switchback } from '../blocks/Switchback';
import { TextGrid } from '../blocks/TextGrid';
import { TileGrid } from '../blocks/TileGrid';

export const pageSections = [
    {
        name: 'pageSections',
        type: 'blocks',
        blocks: [Accordion, Hero, ConversionPanel, FeatureGrid,  IconTileGrid, Process, Switchback, TextGrid, TileGrid ]
    }
] as Field[];
