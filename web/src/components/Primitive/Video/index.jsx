import React from 'react'
import { object, string } from 'prop-types'
import classNames from 'classnames'

import Type from 'Primitive/Type'
import ResponsiveMedia from 'Primitive/ResponsiveMedia'

import YouTubeEmbed from './YouTubeEmbed'
import VimeoEmbed from './VimeoEmbed'

import styles from './Video.module.scss'

/**
 * Video embed component wrapper
 */

const Video = ({ videoType, videoId, caption, className, style, ...other }) => {
  switch (videoType) {
    case 'youtube':
      return (
        <div className={classNames(styles.Video, className)} style={style}>
          <ResponsiveMedia ratio={9 / 16}>
            <YouTubeEmbed
              {...other}
              videoId={videoId}
              width="100%"
              height="100%"
            />
          </ResponsiveMedia>
          {caption && (
            <Type className={styles.Caption} size="base" italic>
              {caption}
            </Type>
          )}
        </div>
      )

    case 'vimeo':
      return (
        <div className={classNames(styles.Video, className)} style={style}>
          <ResponsiveMedia ratio={9 / 16}>
            <VimeoEmbed
              {...other}
              videoId={videoId}
              width="100%"
              height="100%"
            />
          </ResponsiveMedia>
          {caption && (
            <Type className={styles.Caption} size="base" italic>
              {caption}
            </Type>
          )}
        </div>
      )

    default:
      return <div>Video type is not supported...</div>
  }
}

Video.propTypes = {
  videoType: string,
  videoId: string,
  caption: string,
  style: object,
  alt: string
}

export default Video
