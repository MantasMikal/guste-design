import React from 'react'
import { bool, func, node, string, object } from 'prop-types'

import Navigation from 'Common/Navigation'
import A11yNavigation from 'Primitive/A11yNavigation'
import Footer from 'Common/Footer'

import styles from './Layout.module.scss'

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  social,
  logo
}) => {
  return (
    <div className={styles.Layout}>
      <A11yNavigation>
        <a href="#content">Jump to main content</a>
        <a href="#navigation">Jump to primary navigation</a>
      </A11yNavigation>
      <Navigation
        siteTitle={siteTitle}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
        logo={logo}
        id="navigation"
      />
      <div className={styles.Content} id="content">
        {children}
      </div>
      <Footer social={social} logo={logo} siteTitle={siteTitle} />
    </div>
  )
}

Layout.propTypes = {
  children: node,
  onHideNav: func,
  onShowNav: func,
  showNav: bool,
  siteTitle: string,
  logo: object
}

export default Layout
