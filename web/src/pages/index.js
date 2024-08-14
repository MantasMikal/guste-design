import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from 'libs/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Hero from 'Common/Hero'
import BlockContent from 'Common/BlockContent'
import VisuallyHidden from 'Primitive/VisuallyHidden'
import InstagramPosts from 'Section/InstagramPosts'

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
  const instagram = (data || {}).instagram

  if (!home) {
    throw new Error(
      'Missing "Home content". Open the studio at http://localhost:3333 and add some content to "Pages/Home" and restart the development server.'
    )
  }

  const { hero, title, subtitle, _rawSections } = home
  const { openGraph } = site
  const { description } = openGraph
  const instagramPosts = mapEdgesToNodes(instagram || [])

  return (
    <Layout>
      <Seo title="Home" />
      <VisuallyHidden>
        <h1>{site.title} | Gustė Vasiliauskaitė</h1>
        <p>{description}</p>
      </VisuallyHidden>
      {home && <Hero heroImage={hero} title={title} subtitle={subtitle} />}
      {_rawSections &&
        _rawSections.map((section) => (
          <BlockContent blocks={section.body} key={section._id} />
        ))}
      <InstagramPosts posts={instagramPosts} />
    </Layout>
  )
}

export default IndexPage
