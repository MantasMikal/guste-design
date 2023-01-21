import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes } from '../../libs/helpers'
import Seo from '../../components/seo'
import Layout from '../../containers/MainLayout'
import StoreContextProvider from 'Context/StoreContext/StoreContextProvider'
import StoreHome from 'Section/StoreHome'

const StorePage = () => {
  const { products, page } = useStaticQuery(
    graphql`
      query {
        page: sanityStorePage(_id: { regex: "/(drafts.|)storePage/" }) {
          _rawBody(resolveReferences: { maxDepth: 20 })
        }
      }
    `
  )
  const productNodes = products ? mapEdgesToNodes(products) : []
  return (
    <StoreContextProvider>
      <Layout>
        <Seo
          title="Store"
          description="Gusté merges art & design to add a personal touch to your home."
        />
        {productNodes && <StoreHome page={page} />}
      </Layout>
    </StoreContextProvider>
  )
}

export default StorePage
