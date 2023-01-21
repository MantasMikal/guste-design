import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes } from '../../libs/helpers'
import Seo from '../../components/seo'
import Layout from '../../containers/MainLayout'
import Store from 'Section/Store'
import StoreContextProvider from 'Context/StoreContext/StoreContextProvider'

const StorePage = () => {
  const { products, page } = useStaticQuery(
    graphql`
      query {
        page: sanityStoreProductPage(_id: { regex: "/(drafts.|)storeProductPage/" }) {
          _rawBody(resolveReferences: { maxDepth: 20 })
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
              media {
                preview {
                  ... on ShopifyMediaPreviewImage {
                    image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: BLURRED
                            width: 500
                            height: 500
                          )
                        }
                      }
                    }
                  }
                }
              }
              totalInventory
              variants {
                price
                inventoryQuantity
                availableForSale
              }
              priceRangeV2 {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
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
        <Seo
          title="All Products"
          description="Gusté merges art & design to add a personal touch to your home."
        />
        {productNodes && <Store products={productNodes} page={page} />}
      </Layout>
    </StoreContextProvider>
  )
}

export default StorePage
