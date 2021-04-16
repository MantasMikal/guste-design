import React from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './Prose.module.scss'

/** 
 * Prose should wrap any large body of text-based content and provides
 * uniform sizing and spacing between elements.

 * It can aslo accept a string of HTML to render, for example from a
 * WYSIWYG editor. NOTE: it uses [\`dangerouslySetInnerHTML\`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
 * so do not use this method for user-supplied or untrusted content.

 * Prose will override most inline styles to avoid cases where content is
 * pasted into a WYSIWYG from Word or similar with inline styles attached.
*/
const Prose = ({ children, className, dangerousHtml, inverse }) => {
  if (!children && !dangerousHtml) return null

  return (
    <div
      className={classNames(styles.Prose, inverse && styles.inverse, className)}
      {...(dangerousHtml && {
        dangerouslySetInnerHTML: { __html: dangerousHtml }
      })}
    >
      {children}
    </div>
  )
}

Prose.propTypes = {
  children: node,
  className: string,
  dangerousHtml: string,
  inverse: bool
}

export default Prose
