import { TiDocumentText } from "react-icons/ti";

export default {
  name: "section",
  title: "Section",
  type: "object",
  icon: TiDocumentText,

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
