import React, { FC } from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Welcome from '../../views/welcome'
import Dashboard from '../../views/dashboard'
import Login from '../../views/Auth/login'
import Signup from '../../views/Auth/signup'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Navigate replace to="/welcome" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
