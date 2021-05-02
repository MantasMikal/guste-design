export default {
  name: "banner",
  title: "Banner",
  type: "object",
  fields: [
    {
      name: "desktopImages",
      title: "Desktop Images",
      description: "Images for desktop",
      type: "array",
      of: [{ type: "figure" }],
    },
    {
      name: "mobileImages",
      title: "Mobile Images",
      description: "Images for mobile",
      type: "array",
      of: [{ type: "figure" }],
    },
    {
      name: "description",
      description: "(Optional) Describe what is in there for your convenience",
      title: "Description",
      type: "string",
    },
  ],
  preview: {
    select: {
      description: "description",
      image: "desktopImages",
    },
    prepare({ description = "Banner", images }) {
      return {
        title: description,
        media: images[0],
      };
    },
  },
};
