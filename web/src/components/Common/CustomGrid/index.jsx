import { cn } from 'libs/helpers'
import Image from 'Primitive/Image'
import SmartLink from 'Primitive/SmartLink'
import Type from 'Primitive/Type'
import React from 'react'
import PageTitle from 'Common/PageTitle'
import styles from './CustomGrid.module.scss'

export default function CustomGrid({ type, items, title }) {
  return (
    <div className={styles.GridWrapper}>
      {title && <PageTitle title={title} />}
      <div className={cn(styles.Grid, styles[type])}>
        {items.map((item) => (
          <SmartLink
            href={item.link}
            className={styles.GridItem}
            key={item.link}
          >
            <Image image={item.image} className={styles.Image} />
            <Type as="h3" size="title" className={styles.Title}>
              {item.title}
            </Type>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}
