const config = require('../config')
const { siteUrl } = config.site

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
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

  projectEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/projects/${slug.current}/`
    const absolutePath = siteUrl + path
    const prev = edge.previous
      ? `/project/${edge.previous.slug.current}/`
      : `/project/${projectEdges[projectEdges.length - 1].node.slug.current}`
    const next = edge.next
      ? `/project/${edge.next.slug.current}/`
      : `/project/${projectEdges[0].node.slug.current}`
    const nextTitle = edge.next ? edge.next.title : null
    const prevTitle = edge.previous ? edge.previous.title : null

    const nextProject = {
      url: next,
      title: nextTitle
    }

    const prevProject = {
      url: prev,
      title: prevTitle
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
              priceV2 {
                amount
                currencyCode
              }
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
            id
            title
            description
            descriptionHtml
            handle
            productType
            images {
              id
              originalSrc
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
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
    const path = `/store/${handle}/`
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
  await createProductPages(graphql, actions, reporter)
}

// Removes Mini-css errors
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'develop') {
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
