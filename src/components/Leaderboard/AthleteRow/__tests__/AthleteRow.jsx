import React from 'react'
import renderer from 'react-test-renderer'

import AthleteRow from '../AthleteRow'

it('renders correctly', () => {
  const tree = renderer.create(<AthleteRow />).toJSON()
  expect(tree).toMatchSnapshot()
})
