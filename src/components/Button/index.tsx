import { FC, memo } from 'react'
import type { Props } from './types'
import "./styles.css"

const Button: FC<Props> = ({ children, onClick }) => {
  return <button 
  onClick={onClick} className='button'>
    {children}</button>
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
