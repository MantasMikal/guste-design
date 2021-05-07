import React, { useContext } from 'react'
import classNames from 'classnames'
import { string } from 'prop-types'

import reduce from 'lodash.reduce'
import { FaShoppingCart } from 'react-icons/fa'
import StoreContext from 'Context/StoreContext'
import ButtonStandard from 'Primitive/ButtonStandard'
import Type from 'Primitive/Type'
import ModalWithTrigger from 'Primitive/ModalWithTrigger'
import Cart from 'Common/Cart'

import styles from './CartButton.module.scss'

const useQuantity = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const CartButton = ({ className }) => {
  const [hasItems, quantity] = useQuantity()
  return (
    <ModalWithTrigger
      heading="Cart"
      ariaLabel="Cart"
      trigger={
        <ButtonStandard
          className={classNames(styles.CartButton, className)}
          size="small"
          noBorder
        >
          <Type size="small">CART</Type>
          <div className={styles.Cart}>
            <FaShoppingCart />
            {hasItems && <span className={styles.ItemCount}>{quantity}</span>}
          </div>
        </ButtonStandard>
      }
    >
      <Cart />
    </ModalWithTrigger>
  )
}

CartButton.propTypes = {
  className: string
}

export default CartButton
