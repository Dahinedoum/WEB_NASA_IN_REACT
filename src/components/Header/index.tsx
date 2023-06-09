import { FC, useCallback, useEffect, useState } from 'react'
import { HeaderContainer, ButtonContainer } from './styles'
import { Button } from '../Button'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'

import { setCachedNasaPhotos } from '../../services/storage/Photos'
import { Photo, nasaPhotosResponse, normalizePhoto } from '../../models/Photo'

import { useLocation } from 'react-router-dom'
import Logos from '../Logo'


const Header: FC = () => {
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState('')
  const location = useLocation()

  useEffect(() => {
    setCurrentView(location.pathname)
  }, [location])


  const synchronizeNasaPhotos = async (): Promise<Photo[]> => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_KEY}`
    );
  
    const data: nasaPhotosResponse = await response.json();
  
    const mappedPhotos = data.photos.map(normalizePhoto);
    setCachedNasaPhotos(mappedPhotos);
    return mappedPhotos;
  };









  const handleButtonClick = useCallback(() => {
    navigate('/login')
  }, [navigate])

  const handleLogout = useCallback(() => {
    navigate('/Welcome')
  }, [navigate])

  const handleClick2 = useCallback(() => {
    navigate('/#')
  }, [navigate])

  const handleClick3 = useCallback(async () => {
    try {
      await synchronizeNasaPhotos();
      console.log('Sincronizado');
    } catch (error) {
      console.error('Error al sincronizar', error);
    }
  }, []);

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
