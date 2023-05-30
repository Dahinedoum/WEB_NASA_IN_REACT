import { FC } from 'react'
import "./styles.css"
import {Props} from "./types";


const Card: FC<Props> = ({cameraName }) => {
  return (

  <div className='cardContainer'>
    <div className='cardContent'>


      <div className='cardHeader'>
      {cameraName}
      </div>

      <div className='cardFooter'>
      I M A G E N
      </div>


    </div>
  </div>

  )
}

export default Card
