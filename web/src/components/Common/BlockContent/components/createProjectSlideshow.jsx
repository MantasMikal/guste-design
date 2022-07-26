import PageTitle from 'Common/PageTitle'
import ProjectSlideshow from 'Common/ProjectSlideshow'
import React from 'react'

const createProjectSlideshow = (component) => {
  if (!component) return null
  const { projects, title } = component || {}
  if (!projects) return null

  return (
    <div style={{ marginBottom: '8px' }}>
      {title && <PageTitle title={title} />}
      <ProjectSlideshow projects={projects} />
    </div>
  )
}

export default createProjectSlideshow
