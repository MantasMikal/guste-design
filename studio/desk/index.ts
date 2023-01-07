/**
 * Desk structure overrides
 */
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
import collections from './collectionStructure'
import galleryStructure from './galleryStructure'
import pages from './pageStructure'
import postStructure from './postStructure'
import products from './productStructure'
import projectStructure from './projectStructure'
import settings from './settingStructure'

/**
 * Desk structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom desk structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schemas progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
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
    "post",
    'media.tag',
    'product',
    'productVariant',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      pages(S, context),
      S.divider(),
      collections(S, context),
      products(S, context),
      S.divider(),
      galleryStructure(S, context),
      S.divider(),
      postStructure(S, context),
      S.divider(),
      galleryStructure(S, context),
      S.divider(),
      projectStructure(S, context),
      S.divider(),
      settings(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
