import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes } from '../libs/helpers'

import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Gallery from 'Section/Gallery'

const GalleryPage = (props) => {
  const { gallery } = useStaticQuery(
    graphql`
      {
        gallery: allSanityGalleryPost(limit: 100, sort: { publishedAt: DESC }) {
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
      <Seo title="Gallery" description="Merging craft and creativity." />
      {galleryNodes && <Gallery posts={galleryNodes} />}
    </Layout>
  )
}

export default GalleryPage
