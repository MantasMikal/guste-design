import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import DescriptionList from '.'

const requiredProps = () => ({
  items: { 'Term 1': 'Details 1', 'Term 2': 'Details 2' }
})

describe('Component: DescriptionList', function () {
  validateRequiredProps(DescriptionList, requiredProps())

  // TODO
  // Fix this test

  // test('should output the expected markup with default props', function () {
  //   const { container, getAllByRole } = render(
  //     <DescriptionList {...requiredProps()} />
  //   )
  //   expect(container.querySelector('dl')).toBeTruthy()
  //   expect(getAllByRole('term')).toHaveLength(2)
  //   expect(getAllByRole('definition')).toHaveLength(2)
  // })
})
