import { FC, useCallback, useState } from 'react'
import "./styles.css"
import {Props} from "./types";
import {Button} from '../Button';
import { addFavPhoto } from '../../services/storage/Photos';


const Card: FC<Props> = ({ photo, onRemove }) => {
  const [isClicked, setIsClicked] = useState(photo.isFav)

  const handleOnClick = useCallback(() => {
    setIsClicked(!isClicked)
    addFavPhoto(photo)
  }, [photo, isClicked])

  return (
    <div className={`cardContainer ${isClicked ? 'cardContainer2' : ''}`}>
      <div className="cardContent">
        <div className="cardHeader">{photo.cameraName}</div>
        <Button onClick={handleOnClick}>FAV</Button>
        <Button onClick={() => onRemove(photo)}>ELIMINAR</Button>
        <div className="cardFooter">
          <img src={photo.image} alt="#" className="img" />
        </div>
      </div>
    </div>
  )
}

export default Card
