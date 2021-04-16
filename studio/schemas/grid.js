import { FiGrid } from "react-icons/fi";

export default {
  name: "grid",
  title: "Grid",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "gridMedia",
      title: "Grid Media",
      type: "array",
      of: [{ type: "figure" }, { type: "video" }, { type: "contentBlock" }],
      preview: {
        select: {
          image: "gridMedia",
        },
        prepare({ image }) {
          return {
            media: image[0],
          };
        },
      },
    },
    {
      name: "colTemplate",
      title: "Column Template",
      description:
        'E.g.: "1fr 2fr". Defines size of columns in the grid. Will have only one column on mobile. Available units: px, em, %, fr, rem (you can mix them).  Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns',
      type: "string",
    },
    {
      name: "rowTemplate",
      title: "Row Template",
      description:
        "Same as column template, just for rows - leave empty for automatic rows",
      type: "string",
    },
    {
      name: "colGap",
      title: "Column Gap",
      description:
        'eg.: "10px". Defines size of gap in the grid. Available units: px, em, %, rem',
      type: "string",
    },
    {
      name: "rowGap",
      title: "Row Gap",
      description:
        'eg.: "10px". Defines size of gap in the grid. Available units: px, em, %, rem',
      type: "string",
    },
    {
      name: "centered",
      title: "Centered",
      description: "Centers the items in the grid",
      type: "boolean",
    },
    {
      name: "margin",
      title: "Margin",
      description:
        "Used to create space around elements. More info: https://www.w3schools.com/css/css_margin.asp",
      type: "string",
    },
    {
      title: "Descripion",
      name: "descripion",
      type: "string",
      description:
        "Optional: Add description to easily remember what is inside the grid. This is for your convenience",
    },
  ],
  preview: {
    select: {
      colTemplate: "colTemplate",
      description: "descripion",
    },
    prepare({ description = "", colTemplate = "Untitled" }) {
      return {
        title: description + " " + colTemplate,
        media: FiGrid,
      };
    },
  },
};
