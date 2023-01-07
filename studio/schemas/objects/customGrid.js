export default {
  name: "customGrid",
  title: "Custom Grid",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [{ title: "Five Item (1:2:1)", value: "fiveItem" }]
      }
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "card"
        }
      ]
    },
    {
      name: "title",
      title: "Title (For convenience)",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "title",
      type: "type.title",
      items: "items"
    },
    prepare({ title = "", type = "Five Item (1:2:1)", items }) {
      return {
        title: `${title && title + " - "}${type}`,
        media: items[0].image
      };
    }
  }
};
