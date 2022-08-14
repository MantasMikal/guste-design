import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes } from '../libs/helpers'

import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Gallery from 'Section/Gallery'

const GalleryPage = (props) => {
  const { gallery } = useStaticQuery(
    graphql`
      query {
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
  )

  const galleryNodes = gallery ? mapEdgesToNodes(gallery) : []

  return (
    <Layout>
      <Seo title="Gallery" description='Painting | Illustration | Sculpture | Drawing' />
      {galleryNodes && <Gallery posts={galleryNodes} />}
    </Layout>
  )
}

export default GalleryPage
