import React, { useState, useEffect, useCallback, useContext } from 'react'
import { string, object } from 'prop-types'
import classNames from 'classnames'
import isEqual from 'lodash.isequal'
import find from 'lodash.find'

import styles from './ProductDetails.module.scss'
import SelectControl from 'Primitive/SelectControl'
import ImageGallery from 'Common/ImageGallery'
import StoreContext from 'Context/StoreContext'
import Type from 'Primitive/Type'
import Stack from 'Primitive/Stack'
import Prose from 'Primitive/Prose'
import ButtonStandard from 'Primitive/ButtonStandard'
import TextControl from 'Primitive/TextControl'
import IconButton from 'Primitive/IconButton'
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi'

const ProductDetails = ({ product, className }) => {
  const {
    media,
    options,
    variants,
    descriptionHtml,
    productType,
    totalInventory,
    variants: [initialVariant],
    priceRangeV2: { minVariantPrice }
  } = product

  const images = media?.map((img) => img?.image).filter(Boolean)

  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const [isAddedToCart, setAddedToCart] = useState(false)
  const {
    addVariantToCart,
    store: { client, adding }
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        if (!fetchedProduct) {
          setAvailable(false)
          return
        }
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          (variant) => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(parseInt(target.value))
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    window.scrollTo(0, 0)
    addVariantToCart(productVariant.shopifyId, quantity)
    setTimeout(() => {
      setAddedToCart(false)
    }, 1000)
  }

  /*
    Using this in conjunction with a select input for variants
    can cause a bug where the buy button is disabled, this
    happens when only one variant is available and it's not the
    first one in the dropdown list. I didn't feel like putting
    in time to fix this since its an edge case and most people
    wouldn't want to use dropdown styled selector anyways -
    at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value
        }
      ]
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency'
  }).format(variant.price)

  return (
    <div className={classNames(styles.ProductDetails, className)}>
      <ImageGallery className={styles.Gallery} images={images} />
      <Stack className={styles.ProductInformation}>
        <Type className={styles.Price} size="titleLarge">
          {price}
        </Type>
        <div className={styles.Options}>
          {options.map(
            ({ id, name, values }, index) =>
              name !== 'Title' && (
                <div key={`Select-${id}`} className={styles.SelectControl}>
                  <Type as="label" size="small" htmlFor={name}>
                    {name}
                  </Type>
                  <SelectControl
                    key={id}
                    onChange={(e) => handleOptionChange(index, e)}
                    name={name}
                  >
                    {values.map((value) => (
                      <option
                        value={value}
                        key={`${name}-${value}`}
                        disabled={checkDisabled(name, value)}
                        className={styles.Option}
                      >
                        {value}
                      </option>
                    ))}
                  </SelectControl>
                </div>
              )
          )}
        </div>
        {productType !== 'Paintings' && (
          <div className={classNames(styles.SelectControl, styles.Quantity)}>
            <Type as="label" size="small" htmlFor="Quantity">
              Quantity
            </Type>
            <div className={styles.QuantityControl}>
              <IconButton
                onClick={() =>
                  setQuantity(parseInt(quantity > 1 ? quantity - 1 : 1))
                }
                disabled={quantity <= 1}
                customIcon={<HiOutlineMinus />}
              />
              <TextControl
                name="quantity"
                defaultValue={quantity}
                type="number"
                onChange={handleQuantityChange}
                value={quantity}
                min={1}
                max={totalInventory}
              />
              <IconButton
                onClick={() => setQuantity(parseInt(quantity + 1))}
                customIcon={<HiOutlinePlus />}
                disabled={quantity >= totalInventory}
              />
            </div>
          </div>
        )}
        <ButtonStandard
          disabled={true || adding}
          className={styles.BuyButton}
          onClick={handleAddToCart}
        >
          {/* Store is closed. Contact me! */}
          {true ? 'SOLD OUT' : isAddedToCart ? 'Added!' : 'Add to cart'}
        </ButtonStandard>
        <div className={styles.Description}>
          <Prose dangerousHtml={descriptionHtml} />
        </div>
      </Stack>
    </div>
  )
}

ProductDetails.propTypes = {
  product: object.isRequired,
  className: string
}

export default ProductDetails
