import { FC, memo } from 'react'
import type { Props } from './types'
import './styles.css'
import { Container } from '../../views/Auth/Login/styles'

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}
