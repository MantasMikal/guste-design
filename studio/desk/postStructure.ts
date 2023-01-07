import {
  GoArchive as AllIcon
} from "react-icons/go";

import { CgFileDocument as BlogIcon } from "react-icons/cg";

export const icons = {
  BlogIcon,
};

import { ListItemBuilder } from 'sanity/desk'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem().title("Posts")
    .icon(BlogIcon)
    .child(
      S.list()
        .title("Content")
        .items([
          S.listItem()
            .title("Published posts")
            .schemaType("post")
            .icon(BlogIcon)
            .child(
              S.documentList()
                .title("Published posts")
                .menuItems(S.documentTypeList("post").getMenuItems())
                // Only show posts with publish date earlier than now and that is not drafts
                .filter(
                  '_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))'
                )
                .child(documentId =>
                  S.document()
                    .documentId(documentId)
                    .schemaType("post")
                    .views([S.view.form()])
                )
            ),
          S.documentTypeListItem("post")
            .title("All posts")
            .icon(AllIcon),
          S.listItem()
            .title("Post by category")
            .child(
              // List out all categories
              S.documentTypeList("category")
                .title("Post by category")
                .child(catId =>
                  // List out post documents where the _id for the selected
                  // category appear as a _ref in the post’s categories array
                  S.documentList()
                    .schemaType("post")
                    .title("Post")
                    .filter('_type == "post" && $catId in categories[]._ref')
                    .params({ catId })
                )
            ),
          S.divider(),
          S.documentTypeListItem("category").title("Categories")
        ])
    ))

