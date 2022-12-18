export default {
  name: "figure",
  title: "Figure",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'imageURL',
      title: 'URL',
      type: 'string',
      
    },
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      
    },

    {
      name: "isZoomable",
      title: "Can be zoomed?",
      type: "boolean",
      
    },
    {
      name: "border",
      title: "Border",
      type: "boolean",
      description:
        "Adds border around the image",
      
    },
    {
      name: "maxWidth",
      title: "Max width",
      type: "number",
      description:
        "(Optional) Set if you want to force maximum width to an image or make it smaller or larger. Default maximum width is 800px",
      
    },
  ],
  initialValue: {
    isZoomable: false,
  },
};
