import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../libs/helpers'

import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Posts from 'Section/Posts'

const PostPage = () => {
  const { posts } = useStaticQuery(
    graphql`
      {
        posts: allSanityPost(limit: 100, sort: { publishedAt: DESC }) {
          edges {
            node {
              id
              publishedAt
              title
              description
              slug {
                current
              }
              categories {
                title
              }
              mainImages {
                asset {
                  url
                  _id
                }
              }
            }
          }
        }
      }
    `
  )

  const postNodes = posts
    ? mapEdgesToNodes(posts).filter(filterOutDocsWithoutSlugs)
    : []

  return (
    <Layout>
      <Seo
        title="Blog"
        description="Strong identity, guided by core values, shapes the future."
      />
      {postNodes && <Posts posts={postNodes} />}
    </Layout>
  )
}

export default PostPage
