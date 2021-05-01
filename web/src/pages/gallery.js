import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../libs/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import Gallery from 'Section/Gallery'

export const query = graphql`
  query GalleryPageQuery {
    gallery: allSanityGalleryPost(
      limit: 100
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
          title
          mainImage {
            asset {
              url
              _id
            }
          }
          categories {
            title
          }
        }
      }
    }
  }
`

const GalleryPage = (props) => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const galleryNodes = (data || {}).gallery
    ? mapEdgesToNodes(data.gallery)
    : []

  console.log(
    '🚀 ~ file: projects.js ~ line 44 ~ GalleryPage ~ galleryNodes',
    galleryNodes
  )
  return (
    <Layout>
      <SEO title="Gallery" />
      {galleryNodes && <Gallery posts={galleryNodes} />}
    </Layout>
  )
}

export default GalleryPage
