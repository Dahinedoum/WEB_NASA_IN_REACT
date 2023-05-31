import { Photo } from '../../models/Photo'

const NASA_PHOTO_ID = 'nasaPhotos'

export const getCachedNasaPhotos = (): Photo[] => {
  const response = window.localStorage.getItem(NASA_PHOTO_ID)
  return response ? JSON.parse(response) : []
}

export const setCachedNasaPhotos = (photos: Photo[]) => {
  window.localStorage.setItem(NASA_PHOTO_ID, JSON.stringify(photos))
}
