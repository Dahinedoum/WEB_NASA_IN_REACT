import { FC, useCallback } from 'react'
import './styles.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const navigate = useNavigate()

  const handleButtonClick = useCallback(() => {
    navigate('/login')
  }, [navigate])
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <img src="../logo.png" alt="Logo" className="logo" />
      </div>
      <div className="buttonContainer">
        <Button className="button" variant="text" onClick={handleButtonClick}>
          Rumbo hacía Marte
        </Button>
      </div>
    </header>
  )
}

export default Header
