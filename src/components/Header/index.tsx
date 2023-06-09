import { FC, useCallback, useState } from 'react'
import { HeaderContainer, Logo, ButtonContainer } from './styles'
import { Button } from '../Button'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'
import { setCachedNasaPhotos } from '../../services/storage/Photos'
import { Photo, nasaPhotosResponse, normalizePhoto } from '../../models/Photo'

const Header: FC = () => {
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState('Welcome')


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
    navigate('/login')
  }, [navigate])



  const handleOnClick2 = useCallback(() => {

  }, []);



  const handleClick3 = useCallback(async () => {
    try {
      await synchronizeNasaPhotos();
      console.log('Sincronizado');
    } catch (error) {
      console.error('Error al sincronizar', error);
    }
  }, []);

  let buttonToShow = null

  if (currentView === 'Welcome') {
    buttonToShow = (
      <>
        <Button onClick={handleButtonClick}>Login</Button>
        <Button onClick={handleLogout}>Logout</Button>
        <Sidebar />
        <Button onClick={handleOnClick2}>Create</Button>
        <Button onClick={handleClick3}>Synchronize </Button>
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
function setIsClicked(arg0: boolean) {
  throw new Error('Function not implemented.')
}

