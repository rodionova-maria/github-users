import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchForm from './SearchForm'

it('search is called', () => {
  const cb = jest.fn()
  const searchString = 'value'

  render(
    <SearchForm
      searchString={searchString}
      onSearch={cb}
      setSearchString={cb}
    />
  )

  const button = screen.getByText('Найти')
  fireEvent.click(button)

  expect(cb).toBeCalledTimes(1)
})
