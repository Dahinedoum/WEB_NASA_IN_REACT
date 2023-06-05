import { FC, memo } from 'react'
import type { Props } from './types'
import {Container} from "./styles"

const Button: FC<Props> = ({ children, onClick }) => {
  return <Container 
  onClick={onClick} >
    {children}</Container>
}

//CODIGO MUSTA 
// const Button: FC<Props> = ({
//   className,
//   children,
//   onClick,
//   type = 'button',
//   variant = 'primary',
// }) => {
//   return (
//     <Container
//       $variant={variant}
//       className={className}
//       type={type}
//       onClick={onClick}
//     >
//       {children}
//     </Container>
//   )
// }

export default memo (Button)
