require('dotenv').config()
const path = require('path')
const config = require('../config')
const { projectId, dataset } = config.project

module.exports = {
  trailingSlash: 'ignore',
  siteMetadata: {
    title: config.site.siteTitle,
    siteUrl: config.site.siteUrl,
    description: config.site.description
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: false,
    PRESERVE_WEBPACK_CACHE: true,
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false
          }
        },
        sassOptions: {
          includePaths: [
            ...require('backline-mixins').includePaths,
            ...require('backline-normalize').includePaths,
            path.join(__dirname, 'src/assets/scss/settings')
          ]
        },
        sassRuleTest: /\.global\.s(a|c)ss$/,
        sassRuleModulesTest: /\.module\.s(a|c)ss$/
      }
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          Primitive: 'src/components/Primitive',
          Common: 'src/components/Common',
          Context: 'src/components/Context',
          libs: 'src/libs',
          Section: 'src/components/Section',
          hooks: 'src/hooks'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        password: process.env.SHOPIFY_APP_PASSWORD,
        downloadImages: true,
        paginationSize: 30,
        verbose: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.site.siteTitle,
        short_name: config.site.shortName,
        background_color: config.site.bgColor,
        description: config.site.description,
        theme_color: config.site.themeColor,
        icon: config.site.favIcon,
        start_url: '/',
        display: 'standalone'
      }
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#56b78f`,
        showSpinner: true
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-use-query-params',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-remove-serviceworker'
    // 'gatsby-plugin-offline',
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   options: {
    //     devMode: true
    //   }
    // }
  ]
}
