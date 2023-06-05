import styled from "styled-components";

export const Container = styled.button`
display: inline-block;
padding: 10px 20px;
background-color: #333;
color: #fff;
border: none;
border-radius: 4px;
font-size: 16px;
cursor: pointer;

&:hover {
  background-color: #555;
}

&:active {
  background-color: #222;
}

&:focus {
  outline: none;
}
`


