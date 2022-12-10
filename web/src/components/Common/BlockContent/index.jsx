import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import classNames from 'classnames'

import Type from 'Primitive/Type'
import Blockquote from 'Primitive/Blockquote'
import ButtonStandard from 'Primitive/ButtonStandard'
import SmartLink from 'Primitive/SmartLink'

import createGrid from './components/createGrid'
import createFigure from './components/createFigure'
import createSlideshow from './components/createSlideshow'
import createMediaComponent from './components/createMedia'
import createLine from './components/createLine'
import createNewsletterSignup from './components/createNewsletterSignup'

import styles from './BlockContent.module.scss'

const serializers = (baseFontSize) => ({
  marks: {
    button: ({ mark, children }) => {
      return (
        children[0] && (
          <ButtonStandard
            override
            target={mark.blank && '_blank'}
            href={mark.href}
          >
            {children}
          </ButtonStandard>
        )
      )
    },
    link: ({ mark, children }) => {
      return (
        children[0] && (
          <SmartLink target={mark.blank && '_blank'} href={mark.href}>
            {children}
          </SmartLink>
        )
      )
    }
  },
  types: {
    block(props) {
      switch (props.node.style) {
        case 'title':
          return (
            <Type as="h2" size="display" light  padded>
              {props.children}
            </Type>
          )
        case 'h2':
          return (
            <Type as="h2" size="titleLarge" light padded>
              {props.children}
            </Type>
          )

        case 'h3':
          return (
            <Type as="h3" size="titleMedium" light padded>
              {props.children}
            </Type>
          )

        case 'h4':
          return (
            <Type as="h4" size="title" light padded>
              {props.children}
            </Type>
          )

        case 'large':
          return (
            <Type as="div" size="baseLarge" light padded>
              {props.children}
            </Type>
          )

        case 'larger':
          return (
            <Type as="div" size="titleLarge" light padded>
              {props.children}
            </Type>
          )

        case 'small':
          return (
            <Type as="div" size="small" padded style={{ lineHeight: '1.6' }}>
              {props.children}
            </Type>
          )

        case 'blockquote':
          return <Blockquote quoteMarks>{props.children}</Blockquote>

        default:
          if (props.children.length > 1 || props.children[0] !== '') {
            return (
              <Type as="p" size={baseFontSize || 'base'}>
                {props.children}
              </Type>
            )
          } else return <br />
      }
    },
    figure(props) {
      return createFigure(props.node)
    },
    slideshow(props) {
      return createSlideshow(props.node)
    },
    grid(props) {
      return createGrid(props.node)
    },
    video(props) {
      return createMediaComponent(props.node)
    },
    line(props) {
      return createLine(props.node)
    },
    projectSlideshow(props) {
      return createMediaComponent(props.node)
    },
    newsletterSignup(props) {
      return createNewsletterSignup(props.node)
    }
  }
})

const BlockContent = ({ blocks, baseFontSize, className, style }) => (
  <div style={style}> <BaseBlockContent
    className={classNames(styles.BlockContent, className)}
    blocks={blocks}
    serializers={serializers(baseFontSize)}
  />
  </div>
 
)

export default BlockContent
