import React from 'react'
import { graphql } from 'gatsby'
import Container from 'Primitive/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from 'Common/BlogPost'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
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
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`

const BlogPostTemplate = (props) => {
  const { data, errors, pageContext } = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title}
          image={post.mainImage && post.mainImage.asset.url}
          slug={`/blog/${post.slug.current}`}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} url={pageContext.absolutePath} />}
    </Layout>
  )
}

export default BlogPostTemplate
