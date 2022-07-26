export default {
  name: "returnsPage",
  title: "Shipping and Returns page",
  type: "document",

  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Shipping and Returns",
      };
    },
  },
};
