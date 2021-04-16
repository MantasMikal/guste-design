import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import { StatusContextProvider, StatusContextConsumer } from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: StatusContext', function () {
  validateRequiredProps(StatusContextProvider, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<StatusContextProvider {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output status value when `status` prop passed', function () {
    const { getByText } = render(
      <StatusContextProvider {...requiredProps()} status="success">
        <StatusContextConsumer>
          {(status) => <span>Received: {status}</span>}
        </StatusContextConsumer>
      </StatusContextProvider>
    )
    expect(getByText('Received: success')).toBeTruthy()
  })
})
