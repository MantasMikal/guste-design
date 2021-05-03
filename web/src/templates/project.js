import React from 'react'
import { graphql } from 'gatsby'
import Container from 'Primitive/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import { getProjectUrl } from 'libs/helpers'
import Project from 'Section/Project'
import SEO from '../components/seo'
import Layout from '../containers/MainLayout'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
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
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const ProjectTemplate = (props) => {
  const { data, errors, pageContext } = props
  const { nextProject, prevProject } = pageContext
  console.log("🚀 ~ file: project.js ~ line 33 ~ ProjectTemplate ~ pageContext", pageContext)
  const project = data && data.project
  const metaImage =
    project && project.mainImages && project.mainImages[0].asset.url
  return (
    <Layout>
      {project && (
        <SEO
          title={project.title}
          image={metaImage}
          slug={getProjectUrl(project.slug.current)}
        />
      )}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {project && (
        <Project
          {...project}
          url={pageContext.absolutePath}
          next={nextProject}
          prev={prevProject}
        />
      )}
    </Layout>
  )
}

export default ProjectTemplate
