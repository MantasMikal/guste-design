## Setup

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MantasMikal/gatsby-starter-picks)

Use NPM

```bash
# Install deps
cd gatsby-starter-picks && npm i --legacy-peer-deps && npm i -g @sanity/cli gatsby-cli

# Login to Sanity
sanity login

# Run
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
npm start

# Format and lint
npm run lint
npm run fix

# Build
npm run build

# Deploy Sanity Graphql API
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy

# Run storybook
npm run storybook

```

## Read the docs

Run Storybook to learn how components work

[Getting started with Sanity.io](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content)

[Sanity.io](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content)

[gatsby-source-sanity](https://github.com/sanity-io/gatsby-source-sanity)