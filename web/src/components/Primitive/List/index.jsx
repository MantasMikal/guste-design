import React from 'react'
import { bool, node, string } from 'prop-types'
import classNames from 'classnames'

import styles from './List.module.scss'

/** 
 * A simple list component with options to unset default styling when using
 * as a non-traditional list, e.g. as a list of navigation items.

 * If no styling adjustments are required, just use the standard \`<ul>\` or
 * \`<ol>\` elements directly.

 * Defaults to \`<ul>\`, but can be switched to \`<ol>\` by passing an
 * \`ordered\` prop.
*/
const List = ({ children, className, inline, ordered, unstyled }) => {
  const ListEl = ordered ? 'ol' : 'ul'

  return (
    <ListEl
      className={classNames(
        styles.List,
        inline && styles.inline,
        unstyled && styles.unstyled,
        className
      )}
    >
      {children}
    </ListEl>
  )
}

List.propTypes = {
  children: node.isRequired,
  className: string,
  inline: bool,
  ordered: bool,
  unstyled: bool
}

export default List
