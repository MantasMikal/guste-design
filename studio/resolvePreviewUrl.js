const env = process.env.NODE_ENV || "development";
import config from "../config";
const { siteUrl } = config.site;

export default function resolvePreviewUrl(document) {
  const baseUrl = env === "development" ? "http://localhost:8000" : siteUrl;
  switch (document._type) {
    case "route":
      if (!document.slug || !document.slug.current) {
        return baseUrl;
      }
      return `${baseUrl}/${document.slug.current}`;
    case "post":
      return `${baseUrl}/blog/${document.slug.current}`;
    case "siteSettings":
      return baseUrl;
    case "page":
      if (document._id === "homePage" || document._id === "drafts.homePage") {
        return baseUrl;
      }
      return null;
    default:
      return null;
  }
}
