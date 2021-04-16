import React from 'react'
import { node } from 'prop-types'

import styles from './A11yNavigation.module.scss'

/**
 * Allows users navigating using a keyboard or other assistive technology
 * to quickly skip to pre-defined areas of the page. As a minimum, this
 * would likely consist of links to the pages main content area, and
 *  primary site navigation, but may include secondary content or
 * navigations as required.
 *
 * Note: A11yNavigation is hidden by default, so click into the preview
 * area and press \`TAB\` to view. Additional content is shown in some
 * previews to illustrate that links need to have appropriate targets.
 */

const A11yNavigation = ({ children }) => (
  <div className={styles.A11yNavigation}>{children}</div>
)

A11yNavigation.propTypes = {
  children: node.isRequired
}

export default A11yNavigation
