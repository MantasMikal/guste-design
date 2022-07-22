import React from 'react'
import { graphql } from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Hero from 'Common/Hero'
import BlockSection from 'Section/Block'

export const query = graphql`
  query IndexPageQuery {
    home: sanityHomePage(_id: { regex: "/(drafts.|)homePage/" }) {
      _rawSections(resolveReferences: { maxDepth: 10 })
      title
      subtitle
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        description
      }
    }
  }
`

const IndexPage = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const home = (data || {}).home
  const site = (data || {}).site

  if (!home) {
    throw new Error(
      'Missing "Home content". Open the studio at http://localhost:3333 and add some content to "Pages/Home" and restart the development server.'
    )
  }

  const { hero, title, subtitle, _rawSections } = home
  const { openGraph } = site
  const { description } = openGraph
  return (
    <Layout>
      <Seo title="GUSTE.DESIGN | Gustė Vasiliauskaitė" />
      <h1 hidden>{site.title} | Gustė Vasiliauskaitė</h1>
      <p hidden>{description}</p>
      {home && <Hero heroImage={hero} title={title} subtitle={subtitle} />}
      {_rawSections &&
        _rawSections.map((section) => (
          <div key={section._key}>
            <BlockSection blockContent={section.body} title={section.title} />
          </div>
        ))}
    </Layout>
  )
}

export default IndexPage
