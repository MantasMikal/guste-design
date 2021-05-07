import React from 'react'

import SmartLink from 'Primitive/SmartLink'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <Container as="footer" gutter className={styles.Footer}>
      <Type size="small" className={styles.CopyRight}>
        © {new Date().getFullYear()} GUSTÉ.DESIGN {' '}
        <br />
        <span className={styles.Mantas}>
          Crafted by{' '}
          <SmartLink href="https://github.com/MantasMikal" target="__blank">
            Mantas
          </SmartLink>
        </span>
      </Type>
    </Container>
  )
}
export default Footer
