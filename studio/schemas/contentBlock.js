import { TiDocumentText } from "react-icons/ti";
export default {
  name: "contentBlock",
  title: "Content Block",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "contentBlock",
      title: "Content Block",
      type: "blockContent",
    },
    {
      name: "border",
      title: "Border",
      type: "string",
      description:
        "Adds border around the block. Example: 1px solid black. More info: https://www.w3schools.com/css/css_border.asp",
    },
    {
      name: "margin",
      title: "Margin",
      description:
        'Used to create space around elements, outside of any defined borders. Setting this to "auto" will center it. More info: https://www.w3schools.com/css/css_margin.asp',
      type: "string",
    },
    {
      name: "padding",
      title: "Padding",
      description:
        "Used to create space around an elements content. More info: https://www.w3schools.com/css/css_padding.asp",
      type: "string",
    },
  ],
  select: {
    title: "contentBlock",
  },
  preview: {
    prepare({ title = "Content Block" }) {
      return {
        title,
        media: TiDocumentText,
      };
    },
  },
};
