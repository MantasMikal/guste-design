import React from 'react'
import { func, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './DotPagination.module.scss'

/**
 * Simple pagination dots with accessible text and increased hit-areas.
 * Accepts an index to highlight a dot, and returns a function when a
 * dot is clicked.
 */
const DotPagination = ({
  activeIndex,
  dots,
  labelActive,
  labelInactive,
  labelTitle,
  onChangeIndex
}) => (
  <nav className={styles.DotPagination}>
    <ol className={styles.DotPaginationList} aria-label={labelTitle}>
      {[...Array(dots).keys()].map((dot) => {
        const isActive = activeIndex === dot
        const label = isActive ? labelActive : `${labelInactive} ${dot + 1}`
        return (
          <li
            key={`DotPaginationItem${dot}`}
            className={styles.DotPaginationItem}
          >
            <button
              className={classNames(
                styles.DotPaginationButton,
                isActive && styles.active
              )}
              aria-label={label}
              {...(isActive && {
                'aria-current': 'true',
                disabled: true
              })}
              {...(!isActive && {
                onClick: () => onChangeIndex(dot)
              })}
            >
              <span className={styles.DotPaginationButtonInner} />
            </button>
          </li>
        )
      })}
    </ol>
  </nav>
)

DotPagination.defaultProps = {
  activeIndex: 0,
  labelActive: 'Current item',
  labelInactive: 'Go to item',
  labelTitle: 'Pagination'
}

DotPagination.propTypes = {
  activeIndex: number,
  dots: number.isRequired,
  labelActive: string,
  labelInactive: string,
  labelTitle: string,
  onChangeIndex: func.isRequired,
  title: string
}

export default DotPagination
