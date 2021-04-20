const config = require('../config')
const { siteUrl } = config.site

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      post: allSanityPost(filter: { slug: { current: { ne: null } } }) {
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
  const postEdges = (result.data.post || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/blog/${slug.current}/`
    const absolutePath = siteUrl + path
    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blogPost.js'),
      context: { id, absolutePath }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
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
