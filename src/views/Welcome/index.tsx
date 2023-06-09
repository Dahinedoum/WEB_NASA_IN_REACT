import { FC } from 'react'
import Header from '../../components/Header'
import Background from '../../components/Background'
import Footer from '../../components/Footer'
import './styles.css'

const Welcome: FC = () => {
  return (
    <div>
      <Header />
      <div className="background-container">
        <Background />
        <div className="welcome-box">
          <p>
            Welcome to our amazing App. In a world on the brink of collapse, we
            have embarked on a mission: to save the world. How? Get ready to
            embark on an exciting adventure as you dive into the vast and
            marvelous universe that surrounds us. The salvation of the world
            starts here, at Exploring Mars!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Welcome
