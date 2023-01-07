import { ListItemBuilder } from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import { MdHome, MdInfoOutline } from "react-icons/md";
import { FaBriefcase, FaPhone, FaStore } from "react-icons/fa";

export default defineStructure<ListItemBuilder>((S) =>
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
        ]))
)

