import { FC, useCallback, useState } from 'react'
import './styles.css'
import {CardContent, CardHeader, CardFooter, } from "./styles"
import { Props } from './types'
import { Button } from '../Button'
import { addFavPhoto } from '../../services/storage/Photos'
import { FaHeart } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri'

const Card: FC<Props> = ({ photo, onRemove }) => {
  
  const [isClicked, setIsClicked] = useState(photo.isFav)

  const [hearthClass, setHearthClass] = useState('hearth');

  const handleOnClick = useCallback(() => {
    setIsClicked(!isClicked)
    addFavPhoto(photo)
    if (isClicked) {
      setHearthClass('hearth');
    } else {
      setHearthClass('hearth2');
    }
  }, [photo, isClicked]);


const [containerClass, setContainerClass] = useState('cardContainer');
const [dateClass, setDateClass] = useState('cardDate1');

const handleDetails = () => {
  if (containerClass === 'cardContainerDetail' && dateClass === 'cardDate2') {
    setContainerClass('cardContainer');
    setDateClass('cardDate1');
  } else {
    setContainerClass('cardContainerDetail');
    setDateClass('cardDate2');
  }
};


  return (
    <div className={containerClass}>
      
      <CardContent>
        
        <CardHeader>{photo.cameraName}
              <br />

              <Button onClick={handleOnClick} >       <FaHeart className={hearthClass} /></Button>    
              <Button onClick={() => onRemove(photo)}> <RiDeleteBin2Fill className='delete' /> </Button>
              <Button onClick={handleDetails}>Details</Button>

              <CardFooter>
                <img src={photo.image} alt="#" className="img" />
                <div className={dateClass} id='fecha'>Fecha terrestre {photo.earthDate}{photo.roverName}</div>
                <div className={dateClass} id='fecha'>ID: {photo.id}</div>
                <div className={dateClass} id='fecha'>Estado camara: {photo.status}</div>
              </CardFooter>
        </CardHeader>
      </CardContent>
    </div>
  )
}

export default Card
