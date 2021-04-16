import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from 'libs/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import BlogSection from 'Section/Blog'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      limit: 100
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
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

const BlogPage = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const blogNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title="Blog" slug={'/blog'} />
      {blogNodes && blogNodes.length > 0 && (
        <BlogSection blogNodes={blogNodes} />
      )}
    </Layout>
  )
}

export default BlogPage
