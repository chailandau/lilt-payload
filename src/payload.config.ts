import path from 'path';

import { buildConfig } from 'payload/config';

import { CollectionConfig, GlobalConfig } from 'payload/types';

import Users from './collections/admin/Users';
import Images from './collections/media/Images';

import Header from './globals/Header';
import Footer from './globals/Footer';

import Pages from './templates/Pages';

import Buttons from './collections/content/Buttons';

import { createGroup } from './utils/createGroups';
import Heroes from './collections/sections/Heroes';

import { Icon } from './graphics/Icon';
import { Logo } from './graphics/Logo.tsx';
import CtaTiles from './collections/content/CtaTiles';
import IconTiles from './collections/content/IconTiles';
import ConversionPanels from './collections/sections/ConversionPanels';
import Videos from './collections/content/Videos';
import Icons from './collections/media/Icons';
import FeaturedMedia from './collections/sections/FeaturedMedia';

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
    ...createGroup([ConversionPanels, FeaturedMedia, Heroes], 'Sections') as CollectionConfig[],
    ...createGroup([Buttons, CtaTiles, IconTiles], 'Content') as CollectionConfig[],
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
})
