import React from 'react'
import { object } from 'prop-types'

import styles from './DescriptionList.module.scss'
/**
 * Accepts an object with a “term” as a key, and “details” as a key/value
 * pair. Currently only supports singe term/detail pairs.
 */
const DescriptionList = ({ items }) => (
  <dl className={styles.DescriptionList}>
    {Object.entries(items).map((item, i) => {
      const [name, details] = item
      console.log("🚀 ~ file: index.jsx ~ line 13 ~ {Object.entries ~ item", item)

      return (
        <div
          className={styles.DescriptionListItem}
          key={`DescriptionListItem${i}`}
        >
          <dt className={styles.DescriptionListTerm}>{name}</dt>
          <dd className={styles.DescriptionListDetails}>{details}</dd>
        </div>
      )
    })}
  </dl>
)

DescriptionList.propTypes = {
  items: object.isRequired
}

export default DescriptionList
