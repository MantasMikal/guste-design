import React from 'react'
import { array, string } from 'prop-types'

import BlockContent from 'Common/BlockContent'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './Block.module.scss'

/**
 * BlockContent with a title
 */
const Block = ({ blockContent, title }) => {
  return (
    <Container
      className={styles.Block}
      size="wide"
      center
      gutter
      spacious
      as="section"
    >
      {title && (
        <Type as="h1" size="display" className={styles.Title}>
          {title}
        </Type>
      )}
      <BlockContent blocks={blockContent} />
    </Container>
  )
}

Block.propTypes = {
  blockContent: array,
  title: string
}

export default Block
