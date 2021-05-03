import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes } from '../libs/helpers'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import Store from 'Section/Store'
import StoreContextProvider from 'Context/StoreContext/StoreContextProvider'

const StorePage = () => {
  const { products, page } = useStaticQuery(
    graphql`
      query {
        page: sanityStorePage(_id: { regex: "/(drafts.|)storePage/" }) {
          banner {
            mobileImages {
              asset {
                url
                _id
              }
            }
            desktopImages {
              asset {
                url
                _id
              }
            }
          }
        }
        products: allShopifyProduct(
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              description
              descriptionHtml
              productType
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500, height: 500)
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )
  const productNodes = products ? mapEdgesToNodes(products) : []
  return (
    <StoreContextProvider>
      <Layout>
        <SEO title="Store" />
        {productNodes && <Store products={productNodes} page={page}/>}
      </Layout>
    </StoreContextProvider>
  )
}

export default StorePage
