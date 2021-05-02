<p align="center">
   <img width="300" src='https://i.imgur.com/GhcxkhC.png'>
</p>
<p align="center">
Graphic designer store/portfolio made with Gatsby, Sanity, Netlify and Shopify 🐱‍🚀
</p>
<p align='center'>
<a href='https://guste.design'>https://guste.design</a>
</p>
<br>
<p align="center">
  <a href="https://app.netlify.com/sites/gatsby-starter-picks/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/9e513f12-786c-4fe0-b714-41a3370cbfc3/deploy-status"
      alt="Netlify Status"
    />
  </a>
<p>


## Setup


Use NPM

```bash
# Install deps
cd guste-design && npm i && npm i -g @sanity/cli gatsby-cli

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
