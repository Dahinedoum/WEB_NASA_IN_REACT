
import { Children, FC, useCallback, useState } from 'react'
import "./styles.css"
import {Props} from "./types";
import Button from '../Button';
import { FAV_PHOTOS, addFavPhoto } from '../../services/storage/Photos';


const Card: FC<Props> = ({photo}) => {
const [isClicked, setIsClicked] = useState(false);

const handleOnClick = useCallback(()=>{

  setIsClicked((prevIsClicked) => !prevIsClicked);
  addFavPhoto(photo)
},[photo])




  return (

    <div className={`cardContainer ${isClicked ? 'cardContainer2' : ''}`}>


    <div className='cardContent'>


      <div className='cardHeader'>

      {photo.cameraName}
      </div>
    <Button onClick={handleOnClick}>FAV</Button>
      <div className='cardFooter'>
      <img src={photo.image} alt="#"  className='img'/>
      </div>


    </div>
  </div>

  )
}

export default Card
