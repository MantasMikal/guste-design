// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import category from "./documents/category";
import page from "./pages/page";
import project from "./documents/project";
import siteSettings from "./documents/siteSettings";
import companyInfo from "./documents/companyInfo";
import galleryPost from "./documents/galleryPost";

import blockContent from "./objects/blockContent";
import blockText from "./objects/blockText";
import contentBlock from "./objects/contentBlock";
import section from "./objects/section";
import openGraph from "./objects/openGraph";
import banner from "./objects/banner";

import contact from "./pages/contact";
import home from "./pages/home";
import store from "./pages/store";
import aboutPage from "./pages/aboutPage";
import productPage from "./pages/productPage";

import figure from "./plugs/figure";
import mainImage from "./plugs/mainImage";
import slideshow from "./plugs/slideshow";
import video from "./plugs/video";
import grid from "./plugs/grid";
import location from "./plugs/location";
import line from './plugs/line'
import returns from "./pages/returns";
import servicesPage from "./pages/servicesPage";
import projectSlideshow from "./plugs/projectSlideshow";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to contactenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    category,
    companyInfo,
    figure,
    mainImage,
    page,
    project,
    siteSettings,
    slideshow,
    video,
    contentBlock,
    grid,
    location,
    contact,
    home,
    section,
    openGraph,
    line,
    galleryPost,
    store,
    banner,
    aboutPage,
    productPage,
    returns,
    servicesPage,
    projectSlideshow
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
