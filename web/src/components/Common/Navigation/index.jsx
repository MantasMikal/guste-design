import React from 'react'
import { func, bool, string, object, node } from 'prop-types'
import classnames from 'classnames'

import Type from 'Primitive/Type'
import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'
import Image from 'Primitive/Image'
import Container from 'Primitive/Container'

import styles from './Navigation.module.scss'

const Navigation = ({ onHideNav, onShowNav, showNav, siteTitle, logo, id }) => {
  return (
    <Container
      gutter
      as="nav"
      className={classnames(styles.Root, showNav && styles.showNav)}
      id={id}
    >
      <h1 hidden>{siteTitle}</h1>
      <div className={styles.Branding}>
        <SmartLink to="/">
          <Image image={logo} className={styles.Logo} alt={siteTitle} />
        </SmartLink>
      </div>
      <Link className={styles.NavLink} to="/contact/">
        Contact
      </Link>
      <Link className={styles.NavLink} to="/blog/">
        Blog
      </Link>
      <div className={styles.Dropdown}>
        <SmartLink className={styles.DropdownBtn}>
          <Type as="span" size="menu">
            SubNav
          </Type>
        </SmartLink>
        <div className={styles.DropdownContent}>
          <Link
            className={classnames(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            Sub Nav 1
          </Link>
          <Link
            className={classnames(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            SubNav 2
          </Link>
          <Link
            className={classnames(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            SubNav 3
          </Link>
        </div>
      </div>
      <Link className={styles.NavLink} to="/about/">
        About
      </Link>
      <button
        className={styles.ToggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        {showNav ? (
          <Icon a11yText="Close" type="close" width={24} height={24} />
        ) : (
          <Icon a11yText="Open Menu" type="burger" width={24} height={24} />
        )}
      </button>
    </Container>
  )
}

Navigation.propTypes = {
  onHideNav: func,
  onShowNav: func,
  showNav: bool,
  siteTitle: string,
  logo: object,
  id: string
}

export default Navigation

const Link = ({ children, to, className, highlight, ...other }) => (
  <SmartLink
    className={classnames(className, highlight && styles.highlight)}
    to={to}
    {...other}
  >
    <Type as="span" size="menu">
      {children}
    </Type>
  </SmartLink>
)

Link.propTypes = {
  children: node,
  to: string,
  className: string,
  highlight: string
}
