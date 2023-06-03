import { Photo } from '../../models/Photo'

const NASA_PHOTO_ID = 'nasaPhotos'
export const FAV_PHOTOS = 'favPhotos'

export const getCachedNasaPhotos = (): Photo[] => {
  const response = window.localStorage.getItem(NASA_PHOTO_ID)
  return response ? JSON.parse(response) : []
}

export const setCachedNasaPhotos = (photos: Photo[]) => {
  window.localStorage.setItem(NASA_PHOTO_ID, JSON.stringify(photos))
}






export const addCachedNasaPhotos = (photos: Photo) => {
  const currentCachedPhotos = getCachedNasaPhotos()
  const existingIndex = currentCachedPhotos.findIndex(
    (item) => item.id === photos.id
  )
  if (existingIndex !== -1) {
    currentCachedPhotos.splice(existingIndex, 1)
  } else {
    currentCachedPhotos.push(photos)
  }
  setCachedNasaPhotos(currentCachedPhotos)
}

export const removeCachedNasaPhotos = (photos: Photo) => {
  const currentCachedPhotos = getCachedNasaPhotos()
  const existingIndex = currentCachedPhotos.findIndex(
    (item) => item.id === photos.id
  )
  if (existingIndex !== -1) {
    currentCachedPhotos.splice(existingIndex, 1)
  } 
  setCachedNasaPhotos(currentCachedPhotos)
  return currentCachedPhotos
}







export const getFavPhotos = (): Photo[] => {
  const response = window.localStorage.getItem(FAV_PHOTOS)
  return response ? JSON.parse(response) : []
}

export const setFavPhotos = (photos: Photo[]) => {
  window.localStorage.setItem(FAV_PHOTOS, JSON.stringify(photos))
}

export const addFavPhoto = (photo: Photo) => {
  const currentFavPhotos = getFavPhotos()
  const existingIndex = currentFavPhotos.findIndex(
    (item) => item.id === photo.id
  )
  if (existingIndex !== -1) {
    currentFavPhotos.splice(existingIndex, 1)
  } else {
    currentFavPhotos.push(photo)
  }
  setFavPhotos(currentFavPhotos)
}
