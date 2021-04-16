import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Progress from '.'

const requiredProps = () => ({})

describe('Component: Progress', function () {
  validateRequiredProps(Progress, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByRole } = render(<Progress {...requiredProps()} />)
    expect(getByRole('progressbar')).toHaveStyle({ width: '0%' })
  })

  test('should output the expected markup with `value` prop', () => {
    const { getByRole } = render(<Progress {...requiredProps()} value={75} />)
    expect(getByRole('progressbar')).toHaveStyle({ width: '75%' })
  })

  test('should output the expected markup with `value` prop', () => {
    const { getAllByRole } = render(
      <Progress {...requiredProps()} value={[10, 20]} />
    )
    expect(getAllByRole('progressbar')).toHaveLength(2)
  })
})
