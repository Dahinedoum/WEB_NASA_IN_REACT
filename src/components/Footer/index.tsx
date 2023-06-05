import { FC } from 'react'
import { FooterContainer, FooterContent, FooterText } from './styles'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2023 Exploring Mars by NASA</FooterText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
