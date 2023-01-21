const config = require('../config')
const { siteUrl } = config.site

async function createBlogPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogPosts: allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          next {
            slug {
              current
            }
          }
          previous {
            slug {
              current
            }
          }
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors
  const blogPostsEdges = (result.data.blogPosts || {}).edges || []

  blogPostsEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node
    const base = `/blog/`
    const path = `${base}${slug.current}/`
    const absolutePath = siteUrl + path

    const prev = edge.previous
      ? `${edge.previous.slug.current}`
      : `${blogPostsEdges[blogPostsEdges.length - 1].node.slug.current}`
    const next = edge.next
      ? `${edge.next.slug.current}`
      : `${blogPostsEdges[0].node.slug.current}`

    const nextPost = {
      url: `${base}${next}`
    }

    const prevPost = {
      url: `${base}${prev}`
    }

    reporter.info(`Creating post page: ${path}`)
    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: { id, absolutePath, nextPost, prevPost }
    })
  })
}

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          next {
            slug {
              current
            }
          }
          previous {
            slug {
              current
            }
          }
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors
  const projectEdges = (result.data.projects || {}).edges || []

  projectEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node
    const base = `/projects/`
    const path = `${base}${slug.current}/`
    const absolutePath = siteUrl + path

    const prev = edge.previous
      ? `${edge.previous.slug.current}`
      : `${projectEdges[projectEdges.length - 1].node.slug.current}`
    const next = edge.next
      ? `${edge.next.slug.current}`
      : `${projectEdges[0].node.slug.current}`

    const nextProject = {
      url: `${base}${next}`
    }

    const prevProject = {
      url: `${base}${prev}`
    }

    reporter.info(`Creating project page: ${path}`)
    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id, absolutePath, nextProject, prevProject }
    })
  })
}

async function createProductPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allShopifyProduct {
        edges {
          node {
            variants {
              availableForSale
              compareAtPrice
              id
              price
              # priceV2 {
              #   amount
              #   currencyCode
              # }
              requiresShipping
              selectedOptions {
                name
                value
              }
              shopifyId
              sku
              title
              weightUnit
              weight
            }
            totalInventory
            priceRangeV2 {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            id
            title
            description
            descriptionHtml
            handle
            productType
            media {
              preview {
                ... on ShopifyMediaPreviewImage {
                  image {
                    originalSrc
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          layout: CONSTRAINED
                          placeholder: BLURRED
                          width: 500
                          height: 500
                        )
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const productEdges = (result.data.products || {}).edges || []

  const getProductsWithCategories = (category, products, thisProduct) => {
    return products.filter(
      (prod, _) =>
        category === prod.node.productType &&
        thisProduct.node.id !== prod.node.id
    )
  }

  productEdges.forEach((edge) => {
    const id = edge.node.id
    const handle = edge.node.handle
    const path = `/store/products/${handle}/`
    reporter.info(`Creating product page: ${path}`)

    const similarProducts = getProductsWithCategories(
      edge.node.productType,
      productEdges,
      edge
    )
      .sort(() => Math.random() - 0.5)
      .splice(0, 4)
      .map((edge) => edge.node)

    createPage({
      path,
      component: require.resolve('./src/templates/product.js'),
      context: { id, handle, similarProducts }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProjectPages(graphql, actions, reporter)
  await createBlogPages(graphql, actions, reporter)
  await createProductPages(graphql, actions, reporter)
}

// Removes Mini-css errors
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
