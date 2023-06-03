import { FC } from 'react'
import type { Props } from './types'
import "./styles.css"
import {Container} from "./styles"

const Button: FC<Props> = ({ children, onClick }) => {
  return <Container 
  onClick={onClick} className='button'>
    {children}</Container>
}

export default Button
