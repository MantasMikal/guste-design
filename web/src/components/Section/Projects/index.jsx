import React, { useState, useEffect } from 'react'
import { array } from 'prop-types'
import { useQueryParam, StringParam } from 'use-query-params'
import { useMemo } from 'react'
import CategoryPicker from 'Common/CategoryPicker'
import ProjectPreview from 'Common/ProjectPreview'
import Container from 'Primitive/Container'
import GridLayout from 'Primitive/GridLayout'
import PageTitle from 'Common/PageTitle'

import styles from './Projects.module.scss'

const Projects = ({ projects }) => {
  const allCategories = useMemo(
    () => ['All', ...getAllUniqueProjectsCategories(projects)],
    [projects]
  )
  const [activeCategory, setActiveCategory] = useState(allCategories[0])
  const [queryCat, setQueryCat] = useQueryParam('category', StringParam)

  useEffect(() => {
    setActiveCategory(queryCat || allCategories[0])
  }, [queryCat, allCategories])

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : filterByCategory(projects, activeCategory)

  const handleCategorySelect = (category) => {
    setActiveCategory(category)
    const nextActiveFilter = category !== queryCat ? category : null
    setQueryCat(nextActiveFilter)
    setActiveCategory(nextActiveFilter)
    typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  }

  const projectNodes = filteredProjects.map((project) => (
    <ProjectPreview
      key={project.id}
      className={styles.ProjectPreview}
      surround
      {...project}
    />
  ))

  return (
    <Container className={styles.Root} as="section">
      <div className={styles.Header}>
        <PageTitle title="Projects" />
        <div className={styles.FloatingControls}>
          <CategoryPicker
            className={styles.CategoryPicker}
            categories={allCategories}
            onClick={handleCategorySelect}
            activeCategory={activeCategory}
          />
        </div>
      </div>

      <GridLayout items={projectNodes} customGridClass={styles.Grid} />
    </Container>
  )
}

Projects.propTypes = {
  projects: array.isRequired
}

export default Projects

/**
 * Filters projects by category
 * @param {Object} projects
 * @param {String} category
 * @returns filtered projects
 */
const filterByCategory = (projects, category) => {
  if (!category) return projects
  let filteredProjects = []
  for (let i = 0; i < projects.length; i++) {
    const projectCategories = projects[i].categories
    projectCategories &&
      projectCategories.forEach((projCategory) => {
        if (projCategory.title === category) filteredProjects.push(projects[i])
      })
  }
  return filteredProjects
}

/**
 * Collects categories from projects
 * @param {Object} projects
 * @returns {Array}
 */
const getAllUniqueProjectsCategories = (projects) => {
  let uniqueCategories = []
  for (let i = 0; i < projects.length; i++) {
    const categories = getAllProjectCategories(projects[i])
    categories.forEach((category) => {
      if (!uniqueCategories.includes(category)) uniqueCategories.push(category)
    })
  }
  return uniqueCategories
}

/**
 * Collects all categories from project
 * @param {Object} project
 * @returns {Array}
 */
const getAllProjectCategories = (project) => {
  const projectCategories = project && project.categories
  if (!projectCategories) return []
  let categories = []
  for (let i = 0; i < projectCategories.length; i++) {
    let category = projectCategories[i].title
    if (!categories.includes(category)) categories.push(category)
  }
  return categories
}
