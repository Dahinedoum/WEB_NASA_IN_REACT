import { FC } from 'react'
import "./styles.css"

const Background: FC = () => {
  return (
    <div className='video-container'>
      <video autoPlay muted loop className='video-background'>
        <source src='../Background.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default Background;
