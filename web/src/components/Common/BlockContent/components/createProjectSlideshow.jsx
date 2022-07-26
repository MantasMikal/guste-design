import PageTitle from 'Common/PageTitle'
import ProjectSlideshow from 'Common/ProjectSlideshow'
import React from 'react'

const createProjectSlideshow = (component) => {
  if (!component) return null
  console.log("🚀 ~ file: createProjectSlideshow.jsx ~ line 7 ~ createProjectSlideshow ~ component", component)
  const { projects, title } = component || {}
  if (!projects) return null

  return (
    <div>
      {title && <PageTitle title={title} />}
      <ProjectSlideshow projects={projects} />
    </div>
  )
}

export default createProjectSlideshow
