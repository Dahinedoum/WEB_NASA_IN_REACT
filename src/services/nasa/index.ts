import { Photo, normalizePhoto, nasaPhotosResponse } from '../../models/Photo'
import { getCachedNasaPhotos, setCachedNasaPhotos } from '../storage/Photos'

export const getNasaPhotos = async (): Promise<Photo[]> => {
  const savedPhotos = getCachedNasaPhotos()

  if (!savedPhotos || savedPhotos.length <= 0) {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_KEY}`
    )

    const data: nasaPhotosResponse = await response.json()

    const mappedPhotos = data.photos.map(normalizePhoto)
    setCachedNasaPhotos(mappedPhotos)
    return mappedPhotos
  }

  return savedPhotos
}
