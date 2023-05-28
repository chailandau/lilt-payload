import path from 'path';

import { buildConfig } from 'payload/config';

import { CollectionConfig, GlobalConfig } from 'payload/types';

import Users from './collections/Users';
import Media from './collections/Media';

import Header from './globals/Header';
import Footer from './globals/Footer';

import Pages from './templates/Pages';

import Buttons from './components/Buttons';

import { createGroup } from './utils/createGroups';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    ...createGroup([Pages], 'Templates') as CollectionConfig[],
    ...createGroup([Media, Buttons], 'Content') as CollectionConfig[],
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
