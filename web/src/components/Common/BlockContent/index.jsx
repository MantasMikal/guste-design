import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

import Type from 'Primitive/Type'
import Blockquote from 'Primitive/Blockquote'
import ButtonStandard from 'Primitive/ButtonStandard'
import SmartLink from 'Primitive/SmartLink'

import createGrid from './components/createGrid'
import createFigure from './components/createFigure'
import createSlideshow from './components/createSlideshow'
import createMediaComponent from './components/createMedia'

const serializers = {
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
            <Type as="h2" size="display" padded>
              {props.children}
            </Type>
          )
        case 'h2':
          return (
            <Type as="h2" size="titleLarge" padded>
              {props.children}
            </Type>
          )

        case 'h3':
          return (
            <Type as="h3" size="titleMedium" padded>
              {props.children}
            </Type>
          )

        case 'h4':
          return (
            <Type as="h4" size="title" padded>
              {props.children}
            </Type>
          )

        case 'blockquote':
          return <Blockquote quoteMarks>{props.children}</Blockquote>

        default:
          if (props.children.length > 1 || props.children[0] !== '') {
            return (
              <Type as="p" size="base">
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
    }
  }
}

const BlockContent = ({ blocks, className }) => (
  <BaseBlockContent
    className={className}
    blocks={blocks}
    serializers={serializers}
  />
)

export default BlockContent
