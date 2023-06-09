import styled from 'styled-components';

const Logo = styled.img`
   height: 100px; /* Aumenta la altura del logo */
   width: auto; /* Deja que el ancho se ajuste proporcionalmente */
   position: fixed;
   top: 20px; /* Ajusta la posición vertical */
   left: 20px; /* Ajusta la posición horizontal */
   border-radius: 50%; /* Aplica un borde redondeado */
   border: 2px solid #000; /* Añade un borde al logo */
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Agrega una sombra */
`;

export { Logo };
