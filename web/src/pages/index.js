import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../libs/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import Hero from 'Common/Hero'
import BlogPostCarouselSection from 'Section/BlogPostCarousel'
import BlockSection from 'Section/Block'

export const query = graphql`
  query IndexPageQuery {
    home: sanityHomePage(_id: { regex: "/(drafts.|)homePage/" }) {
      _rawSections(resolveReferences: { maxDepth: 10 })
      title
      subtitle
      hero {
        asset {
          url
          _id
        }
      }
    }

    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { isFeatured: { eq: true } }
    ) {
      edges {
        node {
          id
          publishedAt
          isFeatured

          category {
            color {
              hex
            }
            title
          }
          mainImage {
            asset {
              url
              _id
            }
          }
          title
          _rawExcerpt
          slug {
            current
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

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  if (!home) {
    throw new Error(
      'Missing "Home content". Open the studio at http://localhost:3333 and add some content to "Pages/Home" and restart the development server.'
    )
  }

  const { hero, title, subtitle, _rawSections } = home

  return (
    <Layout>
      <SEO />
      {home && <Hero heroImage={hero} title={title} subtitle={subtitle} />}
      {_rawSections &&
        _rawSections.map((section) => (
          <div key={section._key}>
            <BlockSection blockContent={section.body} title={section.title} />
          </div>
        ))}
      {postNodes.length > 0 && (
        <BlogPostCarouselSection
          postNodes={postNodes}
          browseMoreHref="/blog/"
          title="Featured blog posts"
        />
      )}
    </Layout>
  )
}

export default IndexPage
