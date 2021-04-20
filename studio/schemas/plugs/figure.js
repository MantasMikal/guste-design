export default {
  name: "figure",
  title: "Figure",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
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
    {
      name: "isZoomable",
      title: "Can be zoomed?",
      type: "boolean",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "maxWidth",
      title: "Max width",
      type: "number",
      description:
        "(Optional) Set if you want to force maximum width to an image or make it smaller or larger. Default maximum width is 800px",
      options: {
        isHighlighted: true,
      },
    },
  ],
  initialValue: {
    isZoomable: false,
  },
};
