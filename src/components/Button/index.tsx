import { FC } from 'react'
import type { Props } from './types'

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}

export default Button