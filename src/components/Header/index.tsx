import { FC, useCallback } from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const navigate = useNavigate()

  const handleButtonClick = useCallback(() => {
    navigate('/login')
  }, [navigate])

  const handleClick = useCallback(() => {
    navigate('/profile')
  }, [navigate])
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="../logo.png" alt="Logo" className="logo" />
      </HeaderContent>

      <Button onClick={handleButtonClick}>Login</Button>
      <Button onClick={handleClick}>Profile</Button>
    </HeaderContainer>
  )
}

export default Header
