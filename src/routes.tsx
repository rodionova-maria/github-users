import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/main'
import DetailsPage from './pages/details'
import NotFoundPage from './pages/not-found'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:userLogin" element={<DetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
