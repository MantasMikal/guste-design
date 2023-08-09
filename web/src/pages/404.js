import React from 'react'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Error404 from 'Section/Error404'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" slug={'/404'} />
    <Error404 />
  </Layout>
)

export default NotFoundPage
