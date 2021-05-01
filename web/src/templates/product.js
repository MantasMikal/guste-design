import React from 'react'
import { graphql } from 'gatsby'
import Product from 'Section/Product'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'

const ProductTemplate = (props) => {
  const { data } = props
  const product = data && data.product
  const { similarProducts } = props.pageContext
  const {title, description, images} = product
  return (
    <Layout>
      {product && (
        <SEO
          title={title}
          description={description}
          image={images[0].originalSrc}
        />
      )}

      {product && (
        <Product product={product} similarProducts={similarProducts} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
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
