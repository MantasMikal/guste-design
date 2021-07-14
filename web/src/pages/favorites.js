import React from 'react'
import { graphql } from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Favorites from 'Section/Favorites'

// export const query = graphql`
//   query IndexPageQuery {
//     site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
//       title
//       openGraph {
//         description
//       }
//     }
//   }
// `

const IndexPage = (props) => {
  // const site = (data || {}).site
  return (
    <Layout>
      <Seo title="Favorites" />
      <h1 hidden>Favorites</h1>
      <p hidden>Your favorite store items</p>
      <Favorites />
    </Layout>
  )
}

export default IndexPage
