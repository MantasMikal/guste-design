import React from 'react'
import { string, object, array, bool } from 'prop-types'
import { Link } from 'gatsby'
import { getProjectUrl } from 'libs/helpers'
import cn from 'classnames'

import Type from 'Primitive/Type'
import MultiImage from 'Common/MultiImage'

import styles from './ProjectSlideshow.module.scss'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect } from 'react'
import Image from 'Primitive/Image'

const ProjectSlideshow = ({ projects, className }) => {
  const [playing, setPlaying] = React.useState(true)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1
    },
    loop: true,
    dragStarted: () => {
      if (playing) setPlaying(false)
    }
  })

  useEffect(() => {
    if (!playing || !instanceRef || projects?.length <= 1) return
    const timeout = setTimeout(() => {
      instanceRef.current?.next()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [playing, projects, instanceRef])

  return (
    <div className={cn(styles.ProjectSlideshow, className)}>
      <div ref={sliderRef} className={cn('keen-slider', styles.Carousel)}>
        {projects?.map(({ slug, mainImages, title }, i) => (
          <Link
            className={cn('keen-slider__slide', styles.Slide)}
            key={`ProjectSlideshow-${i}`}
            to={getProjectUrl(slug.current)}
            index={i}
          >
            <div className={styles.ProjectImage}>
              <Image image={mainImages[0]} width={1920} />
            </div>
            <div className={styles.Details}>
              <Type as="h3" size="title" className={styles.Title}>
                {title}
              </Type>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

ProjectSlideshow.propTypes = {
  slug: object,
  mainImages: array,
  title: string,
  publishedAt: string,
  excerpt: array,
  surround: bool,
  className: string
}

export default ProjectSlideshow
