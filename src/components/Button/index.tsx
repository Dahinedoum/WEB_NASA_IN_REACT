import { FC } from 'react'
import type { Props } from './types'
import { Container } from './styles'

const Button: FC<Props> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children} </Container>
}

export default Button
