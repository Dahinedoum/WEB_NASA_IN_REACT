import React from 'react'
import './App.css'
import Dashboard from './views/Dashboard'
import Login from './views/Auth/Login'
import Router from './containers/Router'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return <Router />
}

export default App
