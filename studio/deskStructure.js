import { MdSettings, MdHome, MdInfoOutline } from "react-icons/md";
import { FaBriefcase, FaPhone, FaStore } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import projects from "./structure/projects";
import gallery from "./structure/gallery";
import posts from "./structure/posts";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "person",
  "post",
  "siteSettings",
  "contactPage",
  "homePage",
  "blogPost",
  "project",
  "galleryPost",
  "storePage",
  "aboutPage",
  "productPage",
  "returnsPage",
  "servicesPage",
  "post"
];

export default S =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      // S.listItem()
      //   .title("Company Info")
      //   .child(
      //     S.editor()
      //       .id("companyInfo")
      //       .schemaType("companyInfo")
      //       .documentId("companyInfo")
      //   )
      //   .icon(MdBusiness),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .child(
                  S.editor()
                    .id("homePage")
                    .schemaType("homePage")
                    .documentId("homePage")
                )
                .icon(MdHome),
              S.listItem()
                .title("Contact")
                .child(
                  S.editor()
                    .id("contactPage")
                    .schemaType("contactPage")
                    .documentId("contactPage")
                )
                .icon(FaPhone),
              S.listItem()
                .title("Store")
                .child(
                  S.editor()
                    .id("storePage")
                    .schemaType("storePage")
                    .documentId("storePage")
                )
                .icon(FaStore),
              S.listItem()
                .title("Base product")
                .child(
                  S.editor()
                    .id("productPage")
                    .schemaType("productPage")
                    .documentId("productPage")
                )
                .icon(FaStore),
              S.listItem()
                .title("About")
                .child(
                  S.editor()
                    .id("aboutPage")
                    .schemaType("aboutPage")
                    .documentId("aboutPage")
                )
                .icon(MdInfoOutline),
              S.listItem()
                .title("Services")
                .child(
                  S.editor()
                    .id("servicesPage")
                    .schemaType("servicesPage")
                    .documentId("servicesPage")
                )
                .icon(FaBriefcase),
              S.listItem()
                .title("Shipping and Returns")
                .child(
                  S.editor()
                    .id("returnsPage")
                    .schemaType("returnsPage")
                    .documentId("returnsPage")
                )
                .icon(MdInfoOutline),
              S.listItem()
                .title("Terms And Conditions")
                .child(
                  S.editor()
                    .id("termsAndConditionsPage")
                    .schemaType("page")
                    .documentId("termsAndConditions")
                ),
              S.listItem()
                .title("Privacy Statement")
                .child(
                  S.editor()
                    .id("privacyStatement")
                    .schemaType("page")
                    .documentId("privacyStatement")
                )
            ])
        )
        .icon(GrDocumentText),
      projects(S),
      posts(S),
      gallery(S),
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId())
      )
    ]);

export const defaultDocumentNodeResolver = S =>
  S.document().views([S.view.form()]);
