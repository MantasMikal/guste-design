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
    const path = `/projects/${(slug.current)}/`
    const absolutePath = siteUrl + path
    reporter.info(`Creating project page: ${path}`)
    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id, absolutePath }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProjectPages(graphql, actions, reporter)
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
