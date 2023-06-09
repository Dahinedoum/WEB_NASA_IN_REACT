import { FC, useCallback, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { getNasaPhotos } from '../../services/nasa'
import Footer from '../../components/Footer'
import { Photo } from '../../models/Photo'
import { motion } from 'framer-motion'
import {
  getCachedNasaPhotos,
  getFavPhotos,
  removeCachedNasaPhotos,
} from '../../services/storage/Photos'
import NewCard from '../../components/newCard/newCard'
import {
  DashboardBack,
  SliderContainer,
  DashboardContent,
  DashboardCard,
  BackgroundImage,
} from './styles'
import './styles.css'

const Dashboard: FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSetPhotos = useCallback(async () => {
    let photosList = await getNasaPhotos()
    const favPhotoList = getFavPhotos()
    photosList = photosList.map((photo, index) => {
      const isFav = !!favPhotoList.find((favPhoto) => favPhoto.id === photo.id)

      return {
        ...photo,
        position: index,
        isFav,
      }
    })

    setPhotos(photosList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    handleSetPhotos()
  }, [handleSetPhotos])

  const handleRemove = useCallback((photo: Photo) => {
    const newList = removeCachedNasaPhotos(photo)
    setPhotos(newList)
  }, [])

  const handleOnCompleteCreations = useCallback(() => {
    const currentCachedApods = getCachedNasaPhotos()
    setPhotos(currentCachedApods)
  }, [])

  if (isLoading) {
    return <div>CARGANDO IMÁGENES...</div>
  }

  return (
    <DashboardBack>
      <Header />
      <DashboardContent>
        <BackgroundImage
          src="../marte.jpeg"
          alt="DashBackground"
          className="backgroundImage"
        />
        <DashboardCard>
          <SliderContainer>
            <motion.div
              className="slider"
              drag="x"
              dragConstraints={{ right: 0 }}
            >
              {photos.map((photo) => (
                <Card key={photo.id} photo={photo} onRemove={handleRemove} />
              ))}
            </motion.div>
          </SliderContainer>
          <NewCard onCompleteCreations={handleOnCompleteCreations} />
        </DashboardCard>
      </DashboardContent>
      <Footer />
    </DashboardBack>
  )
}

export default Dashboard
