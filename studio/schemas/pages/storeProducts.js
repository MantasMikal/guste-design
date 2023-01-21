export default {
  name: "storeProductPage",
  title: "Store Product page",
  type: "document",
  liveEdit: true,
  fields: [
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Store product page",
      };
    },
  },
};
