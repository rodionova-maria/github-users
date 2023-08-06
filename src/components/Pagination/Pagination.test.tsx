import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from './Pagination'

it('check current page is disabled and others are not', () => {
  const cb = jest.fn()
  const totalPages = 3
  const currentPageNumber = 2

  render(
    <Pagination
      currentPageNumber={currentPageNumber}
      totalPages={totalPages}
      onPageChange={cb}
    />
  )

  const paginationNumbers = screen.getByTestId('pagination')
  expect(paginationNumbers).toBeInTheDocument()

  const pageButtons = screen.getAllByRole('button')
  expect(pageButtons).toHaveLength(totalPages)

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = pageButtons[i - 1]
    if (i === currentPageNumber) {
      expect(pageButton).toHaveAttribute('disabled')
    } else {
      expect(pageButton).not.toHaveAttribute('disabled')
    }
  }
})
