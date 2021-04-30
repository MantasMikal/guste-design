import { MdBusiness } from "react-icons/md";

export default {
  name: "companyInfo",
  title: "Company Info",
  type: "document",
  icon: MdBusiness,
  fields: [
    {
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
    {
      name: "youtubeUrl",
      title: "Youtube URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
    {
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
    {
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
  ],
  preview: {
    prepare({ title = "Company Info" }) {
      return {
        title,
      };
    },
  },
};
