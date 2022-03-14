import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import UserDetailsPage from '../pages/UserDetailsPage'
import Users from '../users/Users'

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/users/:id' element={<UserDetailsPage/>} />
      <Route path='/*' element={<ErrorPage/>} />
    </Routes>
  )
}
