import { TiDocumentText } from "react-icons/ti";
export default {
  name: "container",
  title: "Container",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "title",
      title: "Title (For convenience)",
      type: "string"
    },
    {
      name: "contentBlock",
      title: "Content Block",
      type: "blockContent",
    },
    {
      name: "size",
      title: "Size",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Prose", value: 'prose' },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
          {title: 'Wide', value: 'wide'}
        ],
      },
    },
  ],
  select: {
    title: "title",
  },
  preview: {
    prepare({ title = "Container" }) {
      return {
        title,
        media: TiDocumentText,
      };
    },
  },
};
