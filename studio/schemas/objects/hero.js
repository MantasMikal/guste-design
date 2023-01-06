export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: "desktopImage",
      title: "Desktop Image",
      description: "Image for desktop",
      type: "image",
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      description: "Image for mobile",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "desktopImage",
    },
    prepare({ title, image }) {
      return {
        title,
        media: image,
      };
    },
  },
};
