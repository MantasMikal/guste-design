import React from 'react'
import { array } from 'prop-types'
import Container from 'Primitive/Container'
import PageTitle from 'Common/PageTitle'

import styles from './StoreHome.module.scss'
import BlockContent from 'Common/BlockContent'

const StoreHome = ({ page }) => {
  const { _rawBody } = page
  return (
    <Container className={styles.Store} as="section">
      <div className={styles.Header}>
        <PageTitle title="Store" />
      </div>
      {_rawBody && <BlockContent blocks={_rawBody} /> }
    </Container>
  )
}

StoreHome.propTypes = {
  products: array.isRequired
}

export default StoreHome
