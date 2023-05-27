import path from 'path';

import { buildConfig } from 'payload/config';

import Users from './collections/Users';
import { Media } from './collections/Media';

import Header from './globals/Header';
import Footer from './globals/Footer';

import Pages from './templates/Pages';
import Buttons from './components/Buttons';

import { groupCollections, groupGlobals } from './utils/createGroups';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    ...groupCollections([Pages], 'Templates'),
    ...groupCollections([Media, Buttons], 'Content'),
    ...groupCollections([Users], 'Admin'),
  ],
  globals: [
    ...groupGlobals([Header, Footer], 'Global'),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
