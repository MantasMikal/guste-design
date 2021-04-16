import svgDimensionsFormatter from '../svg-dimensions-formatter'

describe('svgDimensionsFormatter', function () {
  test('should early return width and height if supplied', function () {
    const Svg = () => {
      return {
        props: {
          width: 20,
          height: 40,
          viewBox: '0 0 20 40'
        }
      }
    }
    const output = svgDimensionsFormatter(Svg)
    expect(output.width).toEqual(20)
    expect(output.height).toEqual(40)
  })

  test('should get width and height from svg viewbox', function () {
    const Svg = () => {
      return {
        props: {
          viewBox: '0 0 20 40'
        }
      }
    }
    const output = svgDimensionsFormatter(Svg)
    expect(output.width).toEqual(20)
    expect(output.height).toEqual(40)
  })

  test('should return default values if no width or height can be determined', function () {
    const Svg = () => {
      return {
        props: {}
      }
    }
    const output = svgDimensionsFormatter(Svg)
    expect(output.width).toEqual(0)
    expect(output.height).toEqual(0)
  })
})
