import { FiFileText } from "react-icons/fi";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: FiFileText,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'number',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Some frontend will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "isFeatured",
      title: "Featured",
      description: "Will be featured across the site",
      type: "boolean",
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule post where you show them",
      type: "datetime",
    },
    {
      name: 'mainImages',
      title: 'Main images',
      description: 'Main image of the document (thumbnail)',
      type: 'array',
      of: [{ type: 'figure' }]
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: 'categories',
      title: 'Categories',
      description: 'Helps filter and categorize projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }
  ],
  orderings: [
    {
      title: "Publishing date new–>old",
      name: "publishingDateAsc",
      by: [
        { field: "publishedAt", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      title: "Publishing date old->new",
      name: "publishingDateDesc",
      by: [
        { field: "publishedAt", direction: "desc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "mainImages",
    },
    prepare({ title = "No title", publishedAt, image }) {
      return {
        title,
        media: Array.isArray(image) && image[0]
      };
    },
  },
};
