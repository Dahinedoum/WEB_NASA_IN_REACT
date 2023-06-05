import styled from 'styled-components';

const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: rgba(128, 128, 128, 0.5);
   padding: 16px;
`;

const Logo = styled.img`
   height: 40px;
   width: 50px;
   position: fixed;
   top: 20px;
   left: 40px;
`;

const ButtonContainer = styled.div`
   display: flex;
   gap: 20px;
   margin-left: auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #eaeaea;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`

export { HeaderContainer, Logo, ButtonContainer, Button };
