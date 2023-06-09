import styled from "styled-components";

export const Boton = styled.button`
  display: inline-block;
  margin: 2px;
  margin-bottom: 7px;
  background-color: #4caf4fb4;
  color: #fff;
  border: none;
  border-radius: 5px;
  height:30px;
  width:auto;
  font-size: 2px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;


  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #3e8e41;
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

export default Boton;




