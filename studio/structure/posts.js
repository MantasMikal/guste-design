import S from "@sanity/desk-tool/structure-builder";
import {
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon
} from "react-icons/go";

import { CgFileDocument as BlogIcon } from "react-icons/cg";
import PreviewIFrame from "../components/previewIFrame";

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon
};

const posts = S.listItem()
  .title("Posts")
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
            S.documentList("post")
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
                  .views([S.view.form(), PreviewIFrame()])
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
  );

export default posts;
