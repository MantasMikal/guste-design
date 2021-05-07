import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import About from 'Section/About'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import { mapEdgesToNodes } from 'libs/helpers'

const AboutPage = () => {
  const { page, instagram } = useStaticQuery(
    graphql`
      query {
        page: sanityAboutPage(_id: { regex: "/(drafts.|)aboutPage/" }) {
          id
          _rawBio(resolveReferences: { maxDepth: 5 })
          _rawBody(resolveReferences: { maxDepth: 5 })
          mainImage {
            asset {
              url
              _id
            }
          }
        }
        instagram: allInstagramContent(limit: 4) {
          edges {
            node {
              caption
              media_url
              localImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    `
  )

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <Seo title="About" slug="/about" />
      <About
        {...page}
        instagramPosts={instagram && mapEdgesToNodes(instagram)}
      />
    </Layout>
  )
}

export default AboutPage
