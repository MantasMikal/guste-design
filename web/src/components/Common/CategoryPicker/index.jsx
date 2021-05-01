import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  FaFilter,
  FaArrowRight,
  FaArrowLeft,
  FaArrowDown,
  FaArrowUp
} from 'react-icons/fa'
import classNames from 'classnames'

import ButtonStandard from 'Primitive/ButtonStandard'
import Type from 'Primitive/Type'

import styles from './CategoryPicker.module.scss'
import { arrayOf, bool, func, string } from 'prop-types'

const CategoryPicker = ({
  categories,
  onClick,
  activeCategory,
  isOpen,
  className
}) => {
  const [open, setOpen] = useState(isOpen || true)
  return (
    <div className={classNames(styles.CategoryPicker, className)}>
      <ButtonStandard
        onClick={() => setOpen(!open)}
        className={styles.Toggle}
        size="small"
        noBorder
      >
        <Type size="small">Categories</Type>

        <FaFilter size="0.9em" />
        <span className={styles.ArrowDesktop}>
          {open ? <FaArrowRight size="0.6em" /> : <FaArrowLeft size="0.6em" />}
        </span>
        <span className={styles.ArrowMobile}>
          {open ? <FaArrowUp size="0.6em" /> : <FaArrowDown size="0.6em" />}
        </span>
      </ButtonStandard>
      <div className={styles.Categories}>
        {open &&
          categories &&
          categories.length > 0 &&
          categories.map((cat) => (
            <ButtonStandard
              onClick={() => onClick(cat)}
              key={cat}
              className={classNames(
                styles.Category,
                activeCategory === cat && styles.active
              )}
              size="small"
              noBorder
            >
              <Type size="small">{cat}</Type>
            </ButtonStandard>
          ))}
      </div>
    </div>
  )
}

CategoryPicker.propTypes = {
  categories: arrayOf(string),
  onClick: func,
  activeCategory: string,
  isOpen: bool,
  className: string
}

export default CategoryPicker
