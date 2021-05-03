import React from 'react'
import { string, object } from 'prop-types'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import PageTitle from 'Common/PageTitle'
import Container from 'Primitive/Container'
import BlockContent from 'Common/BlockContent'
import SmartLink from 'Primitive/SmartLink'

import styles from './Project.module.scss'

const Project = ({ title, _rawBody, prev, next }) => {
  return (
    <Container as="section" className={styles.Project}>
      <PageTitle title={title} />
      <BlockContent blocks={_rawBody} />
      <div className={styles.Navigation}>
        {prev && (
          <SmartLink to={prev.url}>
            <IoIosArrowBack /> Previous
          </SmartLink>
        )}
        {next && (
          <SmartLink to={next.url}>
            Next <IoIosArrowForward />
          </SmartLink>
        )}
      </div>
    </Container>
  )
}

Project.propTypes = {
  title: string,
  _rawBody: object,
  prev: object,
  next: object
}

export default Project
