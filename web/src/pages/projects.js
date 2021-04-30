import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../libs/helpers'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import Projects from 'Section/Projects'

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject(
      limit: 100
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
          title
          slug {
            current
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

const ProjectPage = (props) => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []

  console.log(
    '🚀 ~ file: projects.js ~ line 44 ~ ProjectPage ~ projectNodes',
    projectNodes
  )
  return (
    <Layout>
      <SEO title="Projects" />
      {projectNodes && <Projects projects={projectNodes} />}
    </Layout>
  )
}

export default ProjectPage
