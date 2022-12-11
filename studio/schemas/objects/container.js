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
    title: "contentBlock",
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
