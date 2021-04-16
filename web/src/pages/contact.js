import React from 'react'
import { graphql } from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import ContactSection from 'Section/Contact'

export const query = graphql`
  query ContactPageQuery {
    contact: sanityContactPage(_id: { regex: "/(drafts.|)contactPage/" }) {
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const ContactPage = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  if (!data.contact) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  const contact = (data || {}).contact
  const { _rawBody } = contact

  return (
    <Layout>
      <SEO title="Contact" slug="/contact" />
      <ContactSection title="Contact" body={_rawBody} />
    </Layout>
  )
}
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default ContactPage
