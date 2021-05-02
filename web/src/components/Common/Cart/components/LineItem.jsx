import React, { useContext } from 'react'
import { VscTrash } from 'react-icons/vsc'
import PropTypes from 'prop-types'
import StoreContext from 'Context/StoreContext'
import { getCurrencySymbol } from 'libs/helpers'
import IconButton from 'Primitive/IconButton'

import styles from './LineItem.module.scss'

const LineItem = ({ item }) => {
  const {
    removeLineItem,
    store: { client, checkout }
  } = useContext(StoreContext)
  const variant = item.variant

  const extraOptions = [
    {
      name: 'Quantity',
      value: item.quantity
    }
  ]

  const selectedOptions = variant.selectedOptions
    ? [...extraOptions, ...variant.selectedOptions].map(
        (option) =>
          option.name !== 'Title' && (
            <div className={styles.Option} key={`option-${option.name}`}>
              <p>
                {option.name}: {option.value}
              </p>
            </div>
          )
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <div className={styles.LineItem}>
      <div className={styles.Title}>
        {item.title}
        <IconButton
          small
          a11yText="Remove product"
          customIcon={<VscTrash size="1.2em" />}
          onClick={handleRemove}
        />
      </div>
      <div className={styles.Wrapper}>
        {variant.image && (
          <div
            className={styles.ImageWrapper}
            style={{ backgroundImage: `url(${variant.image.src})` }}
          />
        )}
        <div className={styles.Details}>
          <div className={styles.Options}>{selectedOptions}</div>
          <div className={styles.Price}>
            Price
            <span>
              {getCurrencySymbol(item.variant.priceV2.currencyCode)}
              {item.variant.priceV2.amount}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

LineItem.propTypes = {}

export default LineItem
