export default {
  type: "object",
  name: "projectSlideshow",
  title: "Project Slideshow",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "array",
      name: "projects",
      title: "Slides",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "project",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};
