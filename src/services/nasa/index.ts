


export const getNasaPhotos = async () => {
   const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=r7xe5Kwk4h8obhAKGBPbQqYpEqvSGzEHhEUvuCGB`
      )
   const data = await response.json();
   console.log({data: data.camera})
};



