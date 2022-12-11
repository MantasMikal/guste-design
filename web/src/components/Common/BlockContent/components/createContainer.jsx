import Container from 'Primitive/Container'
import React from 'react'
import BlockContent from '../index'

const createLine = (component) => {
  if (!component) return null

  return (
    <Container center size={component.size} style={{paddingBottom: '10px'}}>
      <BlockContent blocks={component.contentBlock} />
    </Container>
  ) 
}

export default createLine
