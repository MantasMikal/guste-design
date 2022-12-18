import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { colorInput } from "@sanity/color-input";
import deskStructure, {defaultDocumentNodeResolver} from './deskStructure'
import schemaTypes from './schemas/schemas'

export default defineConfig({
  name: 'gustedesign',
  title: 'GUSTÉ',
  projectId: 'uq1ipftd',
  dataset: 'production',
  basePath: '/',
  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode: defaultDocumentNodeResolver
    }),
    colorInput()
  ],
  schema: {
    types: schemaTypes
  },
  
})