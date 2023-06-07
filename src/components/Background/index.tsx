import { VideoContainer, VideoBackground } from './styles'

const Background = () => {
  return (
    <VideoContainer>
      <VideoBackground autoPlay muted loop>
        <source src="../Background.mp4" type="video/mp4" />
      </VideoBackground>
    </VideoContainer>
  )
}
export default Background
