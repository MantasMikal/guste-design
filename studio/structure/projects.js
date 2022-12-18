import {
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
} from "react-icons/go";

import {
  GiMoebiusTriangle as BlogIcon
} from "react-icons/gi"


export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
};

const projects = (S) => S.listItem()
  .title("Projects")
  .icon(BlogIcon)
  .child(
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Published projects")
          .schemaType("project")
          .icon(BlogIcon)
          .child(
            S.documentList("project")
              .title("Published projects")
              .menuItems(S.documentTypeList("project").getMenuItems())
              // Only show projects with publish date earlier than now and that is not drafts
              .filter(
                '_type == "project" && publishedAt < now() && !(_id in path("drafts.**"))'
              )
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("project")
                  .views([S.view.form()])
              )
          ),
        S.documentTypeListItem("project")
          .title("All projects")
          .icon(AllIcon),
        S.listItem()
          .title("Project by category")
          .child(
            // List out all categories
            S.documentTypeList("category")
              .title("Project by category")
              .child((catId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType("project")
                  .title("Project")
                  .filter('_type == "project" && $catId in categories[]._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("category").title("Categories"),
      ])
  );

export default projects;
