import { FC, useCallback, useState } from 'react'
import { HeaderContainer, Logo, ButtonContainer } from './styles'
import Button from '../Button'
// import ProfileTab from '../ProfileTab'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState('Welcome')
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleButtonClick = useCallback(() => {
    navigate('/login')
  }, [navigate])

  const handleProfileClick = useCallback(() => {
    // setIsProfileOpen(true)
  }, [])

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
      </>
    )
  } else if (currentView === 'Dashboard') {
    buttonToShow = (
      <>
        <Button onClick={handleClick2}>Crear</Button>
        <Button onClick={handleClick3}>Sincronizar</Button>
      </>
    )
  }

  return (
    <HeaderContainer>
      <Logo src="./Logo/logo.png" alt="" />
      {currentView === 'Dashboard' || (
        <ButtonContainer>{buttonToShow}</ButtonContainer>
      )}
      {/* {isProfileOpen && ( */}
      {/* <ProfileTab>Contenido de la pestaña de perfil</ProfileTab> */}
      {/* )} */}
    </HeaderContainer>
  )

  // return (
  //   <HeaderContainer>
  //     <Logo src="./Logo/logo.png" alt="Logo" />
  //     <ButtonContainer>
  //       <Button>Login</Button>
  //       <Button>Profile</Button>
  //       <Button>Crear</Button>
  //       <Button>Sincronizar</Button>
  //     </ButtonContainer>
  //   </HeaderContainer>
  // )
}

export default Header
