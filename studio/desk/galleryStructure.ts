import {
  GoArchive as AllIcon
} from "react-icons/go";

import {
  FaImage as GalleryIcon
} from 'react-icons/fa'

export const icons = {
  GalleryIcon,
};

import { ListItemBuilder } from 'sanity/desk'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Gallery")
    .icon(GalleryIcon)
    .child(
      S.list()
        .title("Content")
        .items([
          S.listItem()
            .title("Published posts")
            .schemaType("galleryPost")
            .icon(GalleryIcon)
            .child(
              S.documentList("galleryPost")
                .title("Published posts")
                .menuItems(S.documentTypeList("galleryPost").getMenuItems())
                // Only show gallery with publish date earlier than now and that is not drafts
                .filter(
                  '_type == "galleryPost" && publishedAt < now() && !(_id in path("drafts.**"))'
                )
                .child((documentId) =>
                  S.document()
                    .documentId(documentId)
                    .schemaType("galleryPost")
                    .views([S.view.form()])
                )
            ),
          S.documentTypeListItem("galleryPost")
            .title("All posts")
            .icon(AllIcon),
          S.listItem()
            .title("Post by category")
            .child(
              // List out all categories
              S.documentTypeList("category")
                .title("Post by category")
                .child((catId) =>
                  // List out galleryPost documents where the _id for the selected
                  // category appear as a _ref in the project’s categories array
                  S.documentList()
                    .schemaType("galleryPost")
                    .title("Post")
                    .filter('_type == "galleryPost" && $catId in categories[]._ref')
                    .params({ catId })
                )
            ),
          S.divider(),
          S.documentTypeListItem("category").title("Categories"),
        ])
    ))

