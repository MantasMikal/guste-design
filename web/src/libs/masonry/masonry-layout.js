import React from 'react'
import { arrayOf, number, element, shape } from 'prop-types'

function getColCount(width, widths) {
  if (width > 750) {
    if (width > 1000) {
      return widths['desktop']
    } else return widths['tablet']
  } else return widths['mobile']
}

// TODO: Transform to function

export default class MasonryLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colCount: this.props.colCount
    }
  }

  handleResize = () =>
    this.setState({
      colCount: getColCount(window.innerWidth, this.props.widths)
    })

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.colCount === nextState.colCount &&
      this.props.children === nextProps.children
    ) {
      return false
    } else return true
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const columnWrapper = {}
    const result = []
    // create columns
    for (let i = 0; i < this.state.colCount; i++) {
      columnWrapper[`column${i}`] = []
    }

    // divide children into columns
    for (let i = 0; i < this.props.children.length; i++) {
      const columnIndex = i % this.state.colCount
      columnWrapper[`column${columnIndex}`].push(
        <div
          style={{ marginBottom: `${this.props.gap}px` }}
          key={`column-${columnIndex}-${i}`}
        >
          {this.props.children[i]}
        </div>
      )
    }
    // wrap children in each column with a div
    for (let i = 0; i < this.state.colCount; i++) {
      result.push(
        <div
          style={{
            marginLeft: `${i > 0 ? '10px' : '0px'}`,
            flex: 1
          }}
          key={`masonry-column-${i}`}
        >
          {columnWrapper[`column${i}`]}
        </div>
      )
    }
    return <div style={{ display: 'flex' }}>{result}</div>
  }
}

MasonryLayout.defaultProps = {
  gap: 20,
  colCount: 3,
  widths: {
    desktop: 3,
    tablet: 2,
    mobile: 1
  }
}

MasonryLayout.propTypes = {
  gap: number.isRequired,
  children: arrayOf(element),
  widths: shape({
    desktop: number,
    tablet: number,
    mobile: number
  })
}
