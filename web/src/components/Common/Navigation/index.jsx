import React from 'react'
import { func, bool, string, object, node } from 'prop-types'
import classnames from 'classnames'

import Type from 'Primitive/Type'
import Icon from 'Primitive/Icon'
import SmartLink from 'Primitive/SmartLink'

import styles from './Navigation.module.scss'
import Contact from 'Section/Contact'

const Navigation = ({ onHideNav, onShowNav, showNav, siteTitle, id }) => {
  return (
    <div className={styles.Navigation}>
      <nav
        className={classnames(styles.Wrapper, showNav && styles.showNav)}
        id={id}
      >
        <SmartLink className={styles.Branding} to="/">
          <h1>{siteTitle}</h1>
        </SmartLink>
        <Contact
          trigger={
            <Link className={styles.NavLink}>
              Contact
            </Link>
          }
        />
        <Link className={styles.NavLink} to="/about/">
          About
        </Link>
        {/* <div className={styles.Dropdown}>
        <SmartLink onClick={handleClick} to="/store" className={styles.DropdownBtn}>
          <Type as="span" size="menu">
            Store
          </Type>
        </SmartLink>
        <div className={styles.DropdownContent}>
          <Link
            className={classnames(styles.NavLink, styles.DropdownLink)}
            to="/"
          >
            Delivery & returns
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
      </div> */}
        <Link className={styles.NavLink} to="/store/">
          Store
        </Link>
        <Link className={styles.NavLink} to="/gallery/">
          Gallery
        </Link>
        <Link className={styles.NavLink} to="/projects/">
          Projects
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
      </nav>
    </div>
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
