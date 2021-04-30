import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from 'Common/PageTitle'
import Container from 'Primitive/Container'
import BlockContent from 'Common/BlockContent'

import styles from './Project.module.scss'

const Project = ({title, _rawBody}) => {
  return (
    <Container as='section' className={styles.Project}>
      <PageTitle title={title} />
      <BlockContent blocks={_rawBody} />
    </Container>
  )
}

Project.propTypes = {

}

export default Project
