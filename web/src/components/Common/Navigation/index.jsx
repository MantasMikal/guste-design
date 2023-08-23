import React from 'react'
import { func, bool, string, object, node, number } from 'prop-types'
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
          <div className={styles.Logo}>
            <Icon width={20} height={26} type="gugis" a11yText="Gugis" />
          </div>
          <h1>{siteTitle}</h1>
        </SmartLink>

        <Contact
          trigger={
            <Link
              className={styles.NavLink}
              iconWidth={24}
              iconHeight={24}
              icon="mail"
            >
              Contact
            </Link>
          }
        />
        <Link
          className={styles.NavLink}
          to="/about"
          iconWidth={24}
          iconHeight={24}
          icon="about"
        >
          About
        </Link>
        <Link
          className={styles.NavLink}
          to="/blog"
          iconWidth={24}
          iconHeight={24}
          icon="arrow"
        >
          Blog
        </Link>
        <Link
          className={styles.NavLink}
          to="/gallery"
          iconWidth={24}
          iconHeight={24}
          icon="grid"
        >
          Gallery
        </Link>
        <Link
          className={styles.NavLink}
          to="/projects"
          iconWidth={24}
          iconHeight={24}
          icon="projects"
        >
          Projects
        </Link>

        {/* <Link
          className={styles.NavLink}
          to="/services"
          iconWidth={24}
          iconHeight={24}
          icon="services"
        >
          Services
        </Link> */}
        <Link
          className={styles.NavLink}
          to="/store"
          iconWidth={24}
          iconHeight={24}
          icon="store"
        >
          Store
        </Link>
        {/* <div className={styles.Dropdown}>
        <SmartLink onClick={} to="/store" className={styles.DropdownBtn}>
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
  icon: string,
  iconWidth: number,
  iconHeight: number,
  onHideNav: func,
  onShowNav: func,
  showNav: bool,
  siteTitle: string,
  logo: object,
  id: string
}

export default Navigation

const Link = ({
  children,
  to,
  className,
  highlight,
  icon,
  iconWidth,
  iconHeight,
  ...other
}) => (
  <SmartLink
    className={classnames(className, highlight && styles.highlight)}
    to={to}
    {...other}
  >
    <div className={styles.Icon}>
      <Icon
        className={styles.IconInner}
        width={iconWidth}
        height={iconHeight}
        type={icon}
        a11yText=""
      />
    </div>{' '}
    <Type className={styles.NavLinkInner} as="span" size="menu">
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
