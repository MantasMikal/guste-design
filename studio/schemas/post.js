import { FiFileText } from "react-icons/fi";

export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: FiFileText,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      title: "Is Featured",
      description: "Will add post to the Featured Posts widget",
      type: "boolean",
    },
    {
      name: "category",
      title: "Categories",
      description:
        "Can be more than one. First you have to create categories (Sidebar -> Categories)",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule post where you show them",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "blockText",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "similarPosts",
      title: "Similar posts",
      description: "Similar posts that will be added to the page",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
    },
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
      image: "mainImage",
    },
    prepare({ title = "No title", publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : "Missing publishing date",
        media: image,
      };
    },
  },
};
