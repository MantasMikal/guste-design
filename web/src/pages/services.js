import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Services from 'Section/Services'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import { mapEdgesToNodes } from 'libs/helpers'

const ServicesPage = () => {
  const { page, instagram } = useStaticQuery(
    graphql`
      query {
        page: sanityServicesPage(_id: { regex: "/(drafts.|)servicesPage/" }) {
          id
          _rawBody(resolveReferences: { maxDepth: 5 })
        }
        instagram: allInstagramContent(limit: 4) {
          edges {
            node {
              caption
              media_url
              localFile {
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
      <Seo title="Services" description='Brand identity | Print | Illustration | Art' slug="/services" />
      <Services
        {...page}
        instagramPosts={instagram && mapEdgesToNodes(instagram)}
      />
    </Layout>
  )
}

export default ServicesPage
