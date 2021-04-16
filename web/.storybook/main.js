const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader')

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env')
    ]

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries')
    ]

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main']

    const existingSvgRule = config.module.rules.findIndex((rule) =>
      rule.test.toString().includes('svg')
    )
    config.module.rules[existingSvgRule].exclude = [
      path.resolve(__dirname, '../src/assets/svg/icon')
    ]

    config.module.rules.unshift({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.join(__dirname, '../src/assets/scss/settings')
              ]
            },
            additionalData: `
              @import 'settings';
            `
          }
        }
      ],
      resolve: {
        alias: {
          '_backline-mixins': path.join(
            __dirname,
            '../node_modules/backline-mixins/src/_backline-mixins'
          )
        }
      }
    })

    // Add support for creating icons using inline SVGs
    config.module.rules.unshift({
      test: /\.svg$/,
      include: [path.resolve(__dirname, '../src/assets/svg/icon')],
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: { dimensions: false }
        }
      ]
    })

    // Resolve alias
    config.resolve.alias['Primitive'] = path.join(
      __dirname,
      '../src/components/Primitive'
    )
    config.resolve.alias['Common'] = path.join(
      __dirname,
      '../src/components/Common'
    )
    config.resolve.alias['Context'] = path.join(
      __dirname,
      '../src/components/Context'
    )
    config.resolve.alias['libs'] = path.join(__dirname, '../src/libs')
    config.resolve.alias['hooks'] = path.join(__dirname, '../src/hooks')
    config.resolve.alias['Section'] = path.join(
      __dirname,
      '../src/components/Section'
    )

    // Return the altered config
    return config
  }
}
