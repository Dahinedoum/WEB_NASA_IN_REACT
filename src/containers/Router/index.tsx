import React, { FC } from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Welcome from '../../views/Welcome'
import Dashboard from '../../views/Dashboard'
import Login from '../../views/Auth/Login'
import Signup from '../../views/Auth/Signup'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Navigate replace to="/Welcome" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

