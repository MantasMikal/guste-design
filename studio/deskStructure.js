import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings, MdHome, MdInfoOutline } from "react-icons/md";
import { FaFile, FaPhone } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "person",
  "post",
  "siteSettings",
  "contactPage",
  "homePage",
];

export default () =>
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
      S.listItem()
        .title("Company Info")
        .child(
          S.editor()
            .id("companyInfo")
            .schemaType("companyInfo")
            .documentId("companyInfo")
        )
        .icon(MdBusiness),
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
                .title("About")
                .child(
                  S.editor()
                    .id("aboutPage")
                    .schemaType("page")
                    .documentId("about")
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
                ),
            ])
        )
        .icon(FaFile),
      S.listItem()
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts"))
        .icon(FiFileText),
      S.listItem()
        .title("Blog Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Category")),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
