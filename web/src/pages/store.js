import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes } from '../libs/helpers'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import Store from 'Section/Store'
import StoreContextProvider from 'Context/StoreContext/StoreContextProvider'

const StorePage = () => {
  const { products } = useStaticQuery(
    graphql`
      query {
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
                    gatsbyImageData(layout: CONSTRAINED placeholder: BLURRED)
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
        {productNodes && <Store products={productNodes} />}
      </Layout>
    </StoreContextProvider>
  )
}

export default StorePage
