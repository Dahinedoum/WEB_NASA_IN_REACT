import { FC, useCallback, useState } from 'react'
import { HeaderContainer, Logo, ButtonContainer } from './styles'
import { Button } from '../Button'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState('Welcome')

  const handleButtonClick = useCallback(() => {
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

  if (currentView === 'Welcome') {
    buttonToShow = (
      <>
        <Button onClick={handleButtonClick}>Login</Button>
        <Sidebar />
        <Button onClick={handleClick2}>Crear</Button>
        <Button onClick={handleClick3}>Sincronizar</Button>
      </>
    )
  } else if (currentView === 'Dashboard') {
    buttonToShow = <></>
  }

  return (
    <HeaderContainer>
      <Logo />

      <ButtonContainer>{buttonToShow}</ButtonContainer>
    </HeaderContainer>
  )
}

export default Header
