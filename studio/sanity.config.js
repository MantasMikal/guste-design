import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { colorInput } from "@sanity/color-input";
import deskStructure, { defaultDocumentNodeResolver } from "./deskStructure";
import schemaTypes from "./schemas/schemas";

export default defineConfig({
  name: "gustedesign",
  title: "GUSTÉ",
  projectId: "uq1ipftd",
  dataset: "production",
  basePath: "/",
  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode: defaultDocumentNodeResolver
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "My Netlify deploys",
          sites: [
            {
              title: "Guste Design",
              apiId: "9e513f12-786c-4fe0-b714-41a3370cbfc3",
              buildHookId: "5f12e6a59030312b07c87c72",
              name: "guste-design",
            },
          ]
        })
      ]
    }),
    colorInput()
  ],
  schema: {
    types: schemaTypes
  }
});
