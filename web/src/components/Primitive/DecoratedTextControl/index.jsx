import React from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './DecoratedTextControl.module.scss'

import TextControl from 'Primitive/TextControl'

/**
 * Adds icons or buttons before and/or after input content.

 * By default, pointer events are disabled on the additional content, to
 * allow clicks to pass through to the input below. If the additional
 * content is interactive, additional props need to be passed.
*/
const DecoratedTextControlDecoration = ({ children, interactive }) => (
  <div
    className={classNames(
      styles.DecoratedTextControlDecoration,
      interactive && styles.interactive
    )}
  >
    {children}
  </div>
)

DecoratedTextControlDecoration.displayName = 'DecoratedTextControlDecoration'

DecoratedTextControlDecoration.propTypes = {
  interactive: bool,
  children: node.isRequired
}

const DecoratedTextControl = ({
  before,
  beforeInteractive,
  after,
  afterInteractive,
  ...other
}) => (
  <div
    className={classNames(
      styles.DecoratedTextControl,
      before && styles.before,
      after && styles.after
    )}
  >
    {before && (
      <DecoratedTextControlDecoration interactive={beforeInteractive}>
        {before}
      </DecoratedTextControlDecoration>
    )}
    <TextControl {...other} className={styles.DecoratedTextControlControl} />
    {after && (
      <DecoratedTextControlDecoration interactive={afterInteractive}>
        {after}
      </DecoratedTextControlDecoration>
    )}
  </div>
)

DecoratedTextControl.propTypes = {
  before: node,
  beforeInteractive: bool,
  after: node,
  afterInteractive: bool
}

export default DecoratedTextControl
