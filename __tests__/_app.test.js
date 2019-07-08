/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'

import App from '../pages/_app.js'

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { debug } = render(<App />)
    debug();
  })
})
