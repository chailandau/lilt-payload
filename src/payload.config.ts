import path from 'path';

import { buildConfig } from 'payload/config';
import { CollectionConfig, GlobalConfig } from 'payload/types';

import Users from './collections/admin/Users';
import Buttons from './collections/content/Buttons';
import CtaTiles from './collections/content/CtaTiles';
import FeatureTiles from './collections/content/FeatureTiles';
import IconTiles from './collections/content/IconTiles';
import Videos from './collections/content/Videos';
import Icons from './collections/media/Icons';
import Images from './collections/media/Images';
import Accordions from './collections/sections/Accordions';
import ConversionPanels from './collections/sections/ConversionPanels';
import FeaturedMedia from './collections/sections/FeaturedMedia';
import FeatureGrids from './collections/sections/FeatureGrids';
import Heroes from './collections/sections/Heroes';
import Switchbacks from './collections/sections/Switchbacks';
import TileGrids from './collections/sections/TileGrids';
import { Icon } from './custom/Icon';
import { Logo } from './custom/Logo';
import Footer from './globals/Footer';
import Header from './globals/Header';
import Pages from './templates/Pages';
import { createGroup } from './utils/createGroups';

export default buildConfig({
  admin: {
    css: path.resolve(__dirname, './styles/main.scss'),
    meta: {
      favicon: '/assets/favicon.ico',
      titleSuffix: '- LILT Payload',
      ogImage: '/assets/og-image.png'
    },
    components: {
      graphics: {
        Icon,
        Logo
      }
    }
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    ...createGroup([Pages], 'Templates') as CollectionConfig[],
    ...createGroup([Accordions, ConversionPanels, FeaturedMedia, FeatureGrids, Heroes, Switchbacks, TileGrids], 'Sections') as CollectionConfig[],
    ...createGroup([Buttons, CtaTiles, FeatureTiles, IconTiles], 'Content') as CollectionConfig[],
    ...createGroup([Icons, Images, Videos], 'Media') as CollectionConfig[],
    ...createGroup([Users], 'Admin') as CollectionConfig[],
  ],
  globals: [
    ...createGroup([Header, Footer], 'Global') as GlobalConfig[],
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
