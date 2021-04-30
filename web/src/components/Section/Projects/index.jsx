import React from 'react'
import { array } from 'prop-types'

import ProjectPreview from 'Common/ProjectPreview'
import Container from 'Primitive/Container'
import MasonryLayout from 'Primitive/MasonryLayout'
import PageTitle from 'Common/PageTitle'

import styles from './Projects.module.scss'

const Projects = ({ projects }) => {
  const projectNodes = projects.map((project) => (
    <ProjectPreview
      key={project.id}
      className={styles.ProjectPreview}
      surround
      {...project}
    />
  ))

  return (
    <Container
      className={styles.Root}
      as="section"
    >
      <PageTitle title='Projects' />
      <MasonryLayout items={projectNodes} gap={10} />
    </Container>
  )
}

Projects.propTypes = {
  projects: array.isRequired
}

export default Projects
