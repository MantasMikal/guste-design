export default {
  name: "storePage",
  title: "Store page",
  type: "document",
  liveEdit: true,
  fields: [
    {
      name: "banner",
      title: "Banner",
      type: "banner",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Store page",
      };
    },
  },
};
