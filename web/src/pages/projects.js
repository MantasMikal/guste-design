import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../libs/helpers'

import SEO from '../components/seo'
import Layout from '../containers/MainLayout'
import Projects from 'Section/Projects'

const ProjectPage = () => {
  const { projects } = useStaticQuery(
    graphql`
      query {
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
  )

  const projectNodes = projects
    ? mapEdgesToNodes(projects).filter(filterOutDocsWithoutSlugs)
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
