import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", 'create', 'delete', "publish"],
  icon: MdSettings,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "logo",
      description: "Will be used in various places across the site",
      title: "Logo Image",
      type: "image",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "These will be the default meta tags on all pages that have not set their own",
      type: "openGraph",
    },
  ],
};
