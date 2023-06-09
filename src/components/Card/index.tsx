import { FC, useCallback, useState } from 'react'
import './styles.css'
import { Props } from './types'
import { Button } from '../Button'
import { addFavPhoto } from '../../services/storage/Photos'
import { GrFavorite } from 'react-icons/gr'
import { RiDeleteBin2Fill } from 'react-icons/ri'

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
        <Button onClick={handleOnClick}>
          <GrFavorite />
        </Button>
        <Button onClick={() => onRemove(photo)}>
          <RiDeleteBin2Fill />
        </Button>
        <div className="cardFooter">
          <img src={photo.image} alt="#" className="img" />
        </div>
      </div>
    </div>
  )
}

export default Card
