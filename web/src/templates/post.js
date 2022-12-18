import React from 'react'
import { graphql } from 'gatsby'
import Container from 'Primitive/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import { getPostUrl } from 'libs/helpers'
import Post from 'Section/Post'
import Seo from '../components/seo'
import Layout from '../containers/MainLayout'

export const query = graphql`
  query PostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      description
      title
      readTime
      categories {
        title
      }
      slug {
        current
      }
      mainImages {
        asset {
          url
          _id
        }
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const PostTemplate = (props) => {
  const { data, errors, pageContext } = props
  const { nextPost, prevPost } = pageContext
  const post = data && data.post
  const metaImage =
    post && post.mainImages && post.mainImages[0].asset.url
  return (
    <Layout>
      {post && (
        <Seo
          title={post.title}
          image={metaImage}
          slug={getPostUrl(post.slug.current)}
        />
      )}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {post && (
        <Post
          {...post}
          url={pageContext.absolutePath}
          next={nextPost}
          prev={prevPost}
        />
      )}
    </Layout>
  )
}

export default PostTemplate
