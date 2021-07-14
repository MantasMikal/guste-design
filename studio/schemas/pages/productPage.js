export default {
  name: "productPage",
  title: "Product page",
  type: "document",
  liveEdit: true,
  fields: [
    {
      name: "information",
      title: "Information",
      type: "blockContent",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Product page",
      };
    },
  },
};
