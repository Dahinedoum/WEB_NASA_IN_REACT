import styled from 'styled-components';

const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: transparent;
   padding: 16px;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
`;

const Logo = styled.img`
   height: 40px;
   width: 50px;
   position: absolute;
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
`;

export { HeaderContainer, Logo, ButtonContainer, Button };
