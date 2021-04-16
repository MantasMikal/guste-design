import React from 'react'
import { bool, node, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Blockquote.module.scss'

import Type from '../Type'

/**
 * Semantic markup for a quotation, with optional attribution.
 */
const Blockquote = ({ children, citation, quoteMarks }) => (
  <blockquote
    className={classNames(styles.Blockquote, quoteMarks && styles.quoteMarks)}
  >
    <Type as="span" size="subtitle" className={styles.BlockquoteQuote}>
      {children}
    </Type>
    {citation && (
      <Type as="cite" size="small" className={styles.BlockquoteCitation}>
        {citation}
      </Type>
    )}
  </blockquote>
)

Blockquote.propTypes = {
  children: node.isRequired,
  citation: string,
  quoteMarks: bool
}

export default Blockquote
