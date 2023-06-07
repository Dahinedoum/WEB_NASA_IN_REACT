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
          <h1>¡Hola!</h1>
          <p>
            Te damos la bienvenida a nuestra increíble App. En un mundo al borde
            del colapso, hemos emprendido una misión: salvar el mundo. ¿Cómo?
            Prepárate para embarcarte en una emocionante aventura mientras te
            sumerges en el vasto y maravilloso universo que nos rodea. ¡La
            salvación del mundo comienza aquí, en Exploring Mars!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Welcome
