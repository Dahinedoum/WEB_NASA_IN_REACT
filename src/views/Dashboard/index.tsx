import { FC, useCallback, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { getNasaPhotos } from '../../services/nasa'
import './styles.css'
import { Photo } from '../../models/Photo'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard: FC = () => {

  const [photos, setPhotos] = useState<Photo[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const handleSetPhotos = useCallback(async () => {
    const photosList = await getNasaPhotos()
    setPhotos(photosList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    handleSetPhotos()
  }, [handleSetPhotos])

  if (isLoading) {
    return <div>CARGANDO IMÁGENES...</div>
  }

  return (
    <div>
      <Header />
      {/* <Button onClick={handleButtonClick}>Profile</Button> */}
      <div className="dashboardContent">
        <motion.div className="dashboardCard">
          <motion.div className="slider-container">
            <motion.div
              className="slider"
              drag="x"
              dragConstraints={{ right: 0 }}
            >
              {photos.map((photo) => (
                <Card key={photo.id} photo={photo} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
