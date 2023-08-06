import React from 'react'
import User from './User'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders user information correctly', () => {
  const mockUser = {
    login: 'Maria',
    id: 1,
    avatar_url: 'https://github.com/avatar.jpg',
    html_url: 'https://github.com/Maria'
  }

  render(<User user={mockUser} />)

  const avatar = screen.getByRole('img', { name: 'Maria' })
  expect(avatar).toBeInTheDocument()
  expect(avatar).toHaveAttribute('src', 'https://github.com/avatar.jpg')

  const name = screen.getByRole('heading', { level: 2, name: 'Maria' })
  expect(name).toBeInTheDocument()

  const link = screen.getByRole('link', { name: 'Ссылка на GitHub' })
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://github.com/Maria')
})
