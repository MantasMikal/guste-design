import { FaHashtag } from "react-icons/fa";

/**
 * Category for posts
 */
export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: FaHashtag,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "color",
      type: "color",
      title: "Choose badge color",
    },
  ],
  liveEdit: true,
};
