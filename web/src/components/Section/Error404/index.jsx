import React from 'react'
import { node } from 'prop-types'

import styles from './Error404.module.scss'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

const Error404 = () => (
  <section className={styles.Error404}>
    <Container gutter center size="small">
      <Type size="titleLarge" as="h1" className={styles.Title}>
        Error: 404
      </Type>
      <Type size="base" className={styles.Description}>Lost in the dreamy hues!</Type>
    </Container>
  </section>
)

Error404.propTypes = {
  children: node.isRequired
}

export default Error404
