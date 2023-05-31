import { FC, useCallback, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { getNasaPhotos } from '../../services/nasa'
import "./styles.css"
import { Photo } from '../../models/Photo'
import {motion} from "framer-motion"


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



          <motion.div className='dashboardCard'>

            <motion.div className='slider-container'>


            <motion.div className='slider' drag="x" dragConstraints={{right:0}} >

          {photos.map((Photo) => (<Card 
          key={Photo.id} 
          cameraName={Photo.cameraName} 
          image={Photo.image}/>  
          
          ))}

            </motion.div>


            </motion.div>




          </motion.div>




        </div>
      </div>
  )
}

export default Dashboard