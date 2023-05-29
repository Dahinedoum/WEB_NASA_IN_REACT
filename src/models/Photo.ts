



export type nasaPhoto = {
   name: string
   earth_date: number
}

export type nasaPhotosResponse = {
camera: Array <{
   name: string
   earth_date: number
}>
}
//test nono
export const normalizePhoto = (input: nasaPhoto ) => ({
name: input?.name || "",
date: input?.earth_date || "",
})
