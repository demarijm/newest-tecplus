import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/schemas";
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: "cass-york-content",
  title: "CassYork Content",
  projectId: "v4pnyecq",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool(),  visionTool({
    defaultApiVersion: 'v2021-10-21',
    defaultDataset: 'production',
  })],
  schema: { types: schemaTypes },
});