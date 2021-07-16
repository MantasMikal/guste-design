import React from 'react'
import { array } from 'prop-types'
import ProductPreview from 'Common/ProductPreview'
import Container from 'Primitive/Container'
import GridLayout from 'Primitive/GridLayout'
import PageTitle from 'Common/PageTitle'
import { useStore } from '../../../store'
import useHasMounted from 'hooks/useHasMounted'

import styles from './Favorites.module.scss'
import Type from 'Primitive/Type'

const Favorites = () => {
  const { favorites } = useStore()
  const hasMounted = useHasMounted()

  return (
    <Container className={styles.Favorites} as="section">
      <div className={styles.Header}>
        <PageTitle title="Favorites" />
      </div>
      {hasMounted && favorites.length > 0 ? (
        <GridLayout
          customGridClass={styles.Grid}
          items={favorites.map((favorite) => (
            <ProductPreview
              key={favorite.id}
              className={styles.ProductPreview}
              {...favorite}
            />
          ))}
        />
      ) : (
        <Type className={styles.Empty} size="base">Empty.<br /> Go add some stuff! 😎</Type>
      )}
    </Container>
  )
}

Favorites.propTypes = {
  products: array.isRequired
}

export default Favorites
