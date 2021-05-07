import React, { useContext } from 'react'
import { getCurrencySymbol } from 'libs/helpers'

import StoreContext from 'Context/StoreContext'
import LineItem from './components/LineItem'
import Type from 'Primitive/Type'

import styles from './Cart.module.scss'
import ButtonStandard from 'Primitive/ButtonStandard'

const Cart = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)
  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map((item) => (
    <LineItem key={item.id.toString()} item={item} />
  ))
  const symbol = getCurrencySymbol(checkout.currencyCode)

  return (
    <div className={styles.Cart}>
      {lineItems.length > 0 ? (
        lineItems
      ) : (
        <Type size="base" className={styles.NoItems}>
          The cart is empty
        </Type>
      )}

      <Type size="base" className={styles.Summary}>
        <div>
          <p>Subtotal</p>
          <p>
            {symbol}
            {checkout.subtotalPrice}
          </p>
        </div>
        <div className={styles.Taxes}>
          <p>Taxes</p>
          <p>
            {symbol}
            {checkout.totalTax}
          </p>
        </div>
        <div className={styles.Total}>
          <p>Total</p>
          <p>
            {symbol}
            {checkout.totalPrice}
          </p>
        </div>
      </Type>
      <ButtonStandard
        onClick={handleCheckout}
        highlight
        className={styles.CheckoutButton}
      >
        Checkout
      </ButtonStandard>
    </div>
  )
}

Cart.propTypes = {}

export default Cart
