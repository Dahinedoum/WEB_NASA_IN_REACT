import { FC } from 'react'
import "./styles.css"
import {Props} from "./types";


const Card: FC<Props> = ({cameraName, image
 }) => {
  return (

  <div className='cardContainer'>
    <div className='cardContent'>


      <div className='cardHeader'>
      {cameraName}
      </div>

      <div className='cardFooter'>
      <img src={image} alt="#"  className='img'/>
      </div>


    </div>
  </div>

  )
}

export default Card
