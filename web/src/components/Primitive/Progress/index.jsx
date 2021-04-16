import React from 'react'
import { arrayOf, number, oneOfType } from 'prop-types'

import styles from './Progress.module.scss'

/**
 * Shows progress, just like an HTML \`<progress>\` element, but with better
 * cross-browser styling possibilities. Also supports stacked values.

 * To use, pass an integer between 0-100, or an array of integers whose
 * values total no more than 100.
 */
const Progress = ({ value }) => {
  const progressArr = Array.isArray(value) ? value : [value]

  return (
    <div className={styles.Progress}>
      <div className={styles.ProgressTrack}>
        {progressArr.map((progress, i) => (
          <div
            key={`ProgressBar${i}`}
            className={styles.ProgressBar}
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        ))}
      </div>
    </div>
  )
}

Progress.defaultProps = {
  value: 0
}

Progress.propTypes = {
  value: oneOfType([number, arrayOf(number)])
}

export default Progress
