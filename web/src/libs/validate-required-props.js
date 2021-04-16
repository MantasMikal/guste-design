import validatePropTypes from 'validate-prop-types'

const validateRequiredProps = (Component, props = {}) => {
  if (Object.keys(props).length > 0) {
    test('should return error if required props missing', async () => {
      // eslint-disable-next-line react/forbid-foreign-prop-types
      const actual = validatePropTypes(Component.propTypes || {}, {})
      const expected = Object.fromEntries(
        Object.keys(props).map((prop) => [
          prop,
          `The prop \`${prop}\` is marked as required in \`Component\`, but its value is \`undefined\`.`
        ])
      )
      expect(actual).toEqual(expected)
    })
  }

  test('shouldn’t error if valid required props passed', async () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Component.propTypes || {}, props)
    const expected = undefined
    expect(actual).toEqual(expected)
  })
}

export default validateRequiredProps
