import path from 'path';

import { buildConfig } from 'payload/config';

import { CollectionConfig, GlobalConfig } from 'payload/types';

import Users from './collections/Users';
import Images from './collections/Images';

import Header from './globals/Header';
import Footer from './globals/Footer';

import Pages from './templates/Pages';

import Buttons from './components/Buttons';

import { createGroup } from './utils/createGroups';
import Heroes from './components/Heroes';

import { Icon } from './graphics/Icon';
import { Logo } from './graphics/Logo.tsx';
import CtaTiles from './components/CtaTiles';

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
    ...createGroup([Images, Buttons, CtaTiles, Heroes], 'Content') as CollectionConfig[],
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
