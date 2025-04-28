import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {i18n} from '../i18n.config'
export default defineConfig({
  name: 'default',
  title: 'mf-website',

  projectId: 'g93nb9b4',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: ['events', 'members'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
