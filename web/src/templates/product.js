import React from 'react'
import { graphql } from 'gatsby'
import Product from 'Section/Product'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import StoreContextProvider from 'Context/StoreContext/StoreContextProvider'

const ProductTemplate = (props) => {
  const { data } = props
  const product = data && data.product
  const page = data && data.page
  const { similarProducts } = props.pageContext
  const { title, description, images } = product
  return (
    <StoreContextProvider>
      <Layout>
        {product && (
          <Seo
            title={title}
            description={description}
            image={images[0].originalSrc}
          />
        )}

        {product && (
          <Product page={page} product={product} similarProducts={similarProducts} />
        )}
      </Layout>
    </StoreContextProvider>
  )
}

export const query = graphql`
  query($handle: String!) {
    page: sanityProductPage(_id: { regex: "/(drafts.|)productPage/" }) {
      _rawInformation(resolveReferences: { maxDepth: 10 })
    }
    product: shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        priceV2 {
          amount
          currencyCode
        }
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default ProductTemplate
