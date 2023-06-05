
export type nasaPhotosImg = {
   id: number
   sol: number
   camera:{
      id: number
      name: string
      rover_id: number
      full_name: string
   }
   img_src: string
   earth_date: number
   rover:{
      id: number
      name: string
      landing_date: number   
      launch: number
      status: "active"
   }
}

export type nasaPhotosResponse = {
photos: nasaPhotosImg[]
}


export const normalizePhoto = (input: nasaPhotosImg) => ({
   id: input?.id || "",
   image: input?.img_src || "",
   cameraName: input?.camera.full_name || "",
   status: input?.rover.status || "",
   earthDate: input?.earth_date || "",
   isFav: false
})


export type Photo = ReturnType<typeof normalizePhoto>



// CATEGORYKEY   ESSS  PHOTOID 

// nasaPhotos BookLists