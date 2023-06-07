import styled from 'styled-components';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: transparent;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  color: #9a9292;
  font-size: 14px;
`;

export { FooterContainer, FooterContent, FooterText };
