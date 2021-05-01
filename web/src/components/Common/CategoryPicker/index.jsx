import React, { useState, useEffect } from 'react'
import { arrayOf, func, string } from 'prop-types'
import {
  FaFilter,
  FaArrowRight,
  FaArrowLeft,
  FaArrowDown,
  FaArrowUp
} from 'react-icons/fa'
import classNames from 'classnames'
import debounce from 'libs/debounce'

import ButtonStandard from 'Primitive/ButtonStandard'
import Type from 'Primitive/Type'

import styles from './CategoryPicker.module.scss'

const CategoryPicker = ({ categories, onClick, activeCategory, className }) => {
  const [showFilter, setShowFilter] = useState({
    show: true,
    wasClicked: false
  })

  const handleScrollFilter = (state) => {
    if (state !== showFilter.show)
      setShowFilter({ wasClicked: false, show: state })
  }

  const handleCategoryClick = (cat) => {
    onClick(cat)
    setShowFilter({ show: showFilter.show, wasClicked: true })
    typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  }

  const handleShowFilter = () => {
    setShowFilter({ wasClicked: true, show: true })
  }

  const handleHideFilter = () => {
    setShowFilter({ wasClicked: true, show: false })
  }

  useEffect(() => {
    const handleScroll = debounce(() => {
      const show = window.scrollY > 60
      handleScrollFilter(!show)
    }, 15)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [showFilter])

  return (
    <div className={classNames(styles.CategoryPicker, className)}>
      <ButtonStandard
        onClick={showFilter.show ? handleHideFilter : handleShowFilter}
        className={styles.Toggle}
        size="small"
        noBorder
      >
        <Type size="small">Categories</Type>

        <FaFilter size="0.9em" />
        <span className={styles.ArrowDesktop}>
          {showFilter.show ? (
            <FaArrowRight size="0.6em" />
          ) : (
            <FaArrowLeft size="0.6em" />
          )}
        </span>
        <span className={styles.ArrowMobile}>
          {showFilter.show ? (
            <FaArrowUp size="0.6em" />
          ) : (
            <FaArrowDown size="0.6em" />
          )}
        </span>
      </ButtonStandard>
      <div className={styles.Categories}>
        {showFilter.show &&
          categories &&
          categories.length > 0 &&
          categories.map((cat) => (
            <ButtonStandard
              onClick={() => handleCategoryClick(cat)}
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
  className: string
}

export default CategoryPicker
