export default {
  type: "object",
  name: "slideshow",
  title: "Slideshow",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "array",
      name: "slides",
      title: "Slides",
      of: [{ type: "image" }, { type: "contentBlock" }, { type: "video" }],
      options: {
        layout: "grid",
      },
    },
  ],
};
