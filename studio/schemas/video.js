import { FaVideo } from "react-icons/fa";

/**
 * Vimeo or Youtube video
 */
export default {
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    {
      name: "videoType",
      type: "string",
      options: {
        list: [
          {
            title: "Youtube",
            value: "youtube",
          },
          {
            title: "Vimeo",
            value: "vimeo",
          },
        ],
        layout: "radio",
      },
    },
    {
      name: "videoId",
      title: "Video ID",
      type: "string",
      description: "E.g. https://vimeo.com/391416680. Enter only 391416680",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    prepare({ title = "Video" }) {
      return {
        title,
        media: FaVideo,
      };
    },
  },
};
