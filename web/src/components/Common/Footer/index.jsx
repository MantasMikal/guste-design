import React from 'react'

import links from './links'

import SmartLink from 'Primitive/SmartLink'
import SocialLink from './component/SocialLink'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import Image from 'Primitive/Image'

import styles from './Footer.module.scss'
import ButtonStandard from 'Primitive/ButtonStandard'

const Footer = ({ social, logo, siteTitle }) => {
  return (
    <Container as="footer" gutter className={styles.Footer}>
        <Type size='base' className={styles.CopyRight}>© {new Date().getFullYear()} GUSTÉ.DESIGN <br /> <span>All rights reserved</span></Type>
    </Container>
  )
}
export default Footer
