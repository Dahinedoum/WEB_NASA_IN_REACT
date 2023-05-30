import { FC, useCallback, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { getNasaPhotos } from '../../services/nasa'
import "./styles.css"
import { Photo } from '../../models/Photo'

const Dashboard: FC = () => {
  
  const [photos, setPhotos ] = useState<Photo[]> ([])

  const [isLoading , setIsLoading] = useState(false)

  const handleSetPhotos = useCallback (async () => {

    const photosList = await getNasaPhotos()
    setPhotos(photosList)
    setIsLoading(false)
  } , [] )


  useEffect ( () => {
    setIsLoading(true)
    handleSetPhotos()
  }, [handleSetPhotos] )


  if (isLoading) {
    return( <div>CARGANDO IMÁGENES...</div> )
  }



  
  return (
      <div>
       
        <Header />
        <div className='dashboardContent'>

          <div className='dashboardCard'>
          {photos.map((Photo) => (<Card 
          key={Photo.id} 
          cameraName={Photo.cameraName} 
            />) )}
          </div>


        </div>
      </div>
  )
}

export default Dashboard