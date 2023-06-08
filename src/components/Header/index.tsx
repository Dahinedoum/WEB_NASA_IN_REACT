import { FC, useCallback, useEffect, useState } from 'react'
import { HeaderContainer, ButtonContainer } from './styles'
import { Button } from '../Button'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Logos from '../Logo'

const Header: FC = () => {
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState('')
  const location = useLocation()

  useEffect(() => {
    setCurrentView(location.pathname)
  }, [location])

  const handleButtonClick = useCallback(() => {
    navigate('/login')
  }, [navigate])

  const handleLogout = useCallback(() => {
    navigate('/login')
  }, [navigate])

  const handleClick2 = useCallback(() => {
    navigate('/#')
  }, [navigate])

  const handleClick3 = useCallback(() => {
    setCurrentView('Dashboard')
    navigate('/#')
  }, [navigate])

  let buttonToShow = null

  if (currentView === '/Welcome') {
    buttonToShow = (
      <>
        <Button onClick={handleButtonClick}>Login</Button>
      </>
    )
  } else if (currentView === '/dashboard') {
    buttonToShow = (
      <>
        <Button onClick={handleLogout}>Logout</Button>
        <Sidebar />
        <Button onClick={handleClick2}>Create</Button>
        <Button onClick={handleClick3}>Synchronize </Button>
      </>
    )
  }

  return (
    <HeaderContainer>
      <Logos />

      <ButtonContainer>{buttonToShow}</ButtonContainer>
    </HeaderContainer>
  )
}

export default Header
