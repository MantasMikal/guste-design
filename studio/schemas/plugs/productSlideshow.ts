import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "productSlideshow",
  title: "Product Slideshow",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "array",
      name: "products",
      title: "Slides",
      of: [
        {
          type: "reference",
          weak: true,
          to: [
            {
              type: "product",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
});
