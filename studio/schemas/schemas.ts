import category from "./documents/category";
import page from "./pages/page";
import project from "./documents/project";
import siteSettings from "./documents/siteSettings";
import companyInfo from "./documents/companyInfo";
import galleryPost from "./documents/galleryPost";
import post from "./documents/post";
import product from "./documents/product";
import productVariant from "./documents/productVariant";

const documents = [
  category,
  page,
  project,
  siteSettings,
  companyInfo,
  galleryPost,
  post,
  product,
  productVariant
];

import blockContent from "./objects/blockContent";
import blockText from "./objects/blockText";
import contentBlock from "./objects/contentBlock";
import section from "./objects/section";
import openGraph from "./objects/openGraph";
import banner from "./objects/banner";
import container from "./objects/container";
import hero from "./objects/hero";
import customGrid from "./objects/customGrid";
import card from "./objects/card";
import placeholderString from "./objects/placeholderString";
import productHotspots from "./objects/productHotspots";
import productOption from "./objects/productOption";
import productWithVariant from "./objects/productWithVariant";
import proxyString from "./objects/proxyString";
import shopifyProduct from "./objects/shopifyProduct";
import shopifyProductVariant from "./objects/shopifyProductVariant";
import imageWithProductHotspots from "./objects/imageWithProductHotspots";
import linkExternal from "./annotations/linkExternal";
import linkInternal from "./annotations/linkInternal";

const objects = [
  blockContent,
  blockText,
  contentBlock,
  section,
  openGraph,
  banner,
  container,
  hero,
  customGrid,
  card,
  imageWithProductHotspots,
  linkExternal,
  linkInternal,
  placeholderString,
  productHotspots,
  productOption,
  productWithVariant,
  proxyString,
  shopifyProduct,
  shopifyProductVariant
];

import contact from "./pages/contact";
import home from "./pages/home";
import store from "./pages/store";
import aboutPage from "./pages/aboutPage";
import productPage from "./pages/productPage";


const pages = [
  contact,
  home,
  store,
  aboutPage,
  productPage,
  returns,
  servicesPage
];

import figure from "./plugs/figure";
import mainImage from "./plugs/mainImage";
import slideshow from "./plugs/slideshow";
import video from "./plugs/video";
import grid from "./plugs/grid";
import location from "./plugs/location";
import line from "./plugs/line";
import returns from "./pages/returns";
import servicesPage from "./pages/servicesPage";
import projectSlideshow from "./plugs/projectSlideshow";
import newsletter from "./plugs/newsletter";

const plugs = [
  figure,
  mainImage,
  slideshow,
  video,
  grid,
  location,
  line,
  projectSlideshow,
  newsletter
];

export default [
  ...documents,
  ...objects,
  ...pages,
  ...plugs
];
