import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../libs/helpers'

import Seo from '../components/seo'
import Layout from '../containers/MainLayout'
import Posts from 'Section/Posts'

const PostPage = () => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allSanityPost(
          limit: 100
          sort: { fields: [publishedAt], order: DESC }
        ) {
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
        description="Illustration | Logo & Brand Identity | Packaging | Web Design"
      />
      {postNodes && <Posts posts={postNodes} />}
    </Layout>
  )
}

export default PostPage
