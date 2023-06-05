import { ReactNode } from 'react'

export type Props = {
  className?: string
  children?: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  variant?: 'primary' | 'secondary'
}
