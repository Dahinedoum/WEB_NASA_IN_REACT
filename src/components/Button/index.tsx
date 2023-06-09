import { FC } from 'react'
import type { Props } from './types'
import {Boton} from "./styles"



export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <Boton onClick={onClick} >
      {children}
    </Boton>
  )
}

export default Button
