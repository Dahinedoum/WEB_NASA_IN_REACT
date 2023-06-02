import { Photo } from "../../models/Photo"

const NASA_PHOTO_ID = 'nasaPhotos'
export const FAV_PHOTOS = 'favPhotos'

export const getCachedNasaPhotos = (): Photo[] => {
  const response = window.localStorage.getItem(NASA_PHOTO_ID)
  return response ? JSON.parse(response) : []
}

export const setCachedNasaPhotos = (photos: Photo[]) => {
  window.localStorage.setItem(NASA_PHOTO_ID, JSON.stringify(photos))
}


export const getFavPhotos = (): Photo[] => {
  const response = window.localStorage.getItem(FAV_PHOTOS)
  return response ? JSON.parse(response) : []
}

export const setFavPhotos = (photos: Photo[]) => {
  window.localStorage.setItem(FAV_PHOTOS, JSON.stringify(photos))
}

// export const addFavPhoto = (photo: Photo) => {
//   const currentFavPhotos = getFavPhotos()
//   const updatedFavPhotos = [...currentFavPhotos, photo]
//   setFavPhotos(updatedFavPhotos)
// }



export const addFavPhoto = (photo: Photo) => {
  const currentFavPhotos = getFavPhotos()

  // Verificar si el elemento ya está en la lista de favoritos
  const existingIndex = currentFavPhotos.findIndex((item) => item.id === photo.id)

  if (existingIndex !== -1) {
    // Si el elemento ya está en favoritos, eliminarlo
    currentFavPhotos.splice(existingIndex, 1)
  } else {
    // Si el elemento no está en favoritos, agregarlo
    currentFavPhotos.push(photo)
  }

  setFavPhotos(currentFavPhotos)
}






