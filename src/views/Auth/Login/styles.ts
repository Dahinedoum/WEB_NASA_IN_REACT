
import styled from 'styled-components'
import { Link as DefaultLink } from 'react-router-dom'

export const Container = styled.div``

export const Form = styled.form`
  border: 1px solid;
  margin: 10rem auto;
  border-radius: 4px;
  max-width: 15rem;
`

export const FormContent = styled.div`
  padding: 10px;
  background-color: #fff;
`


export const Link = styled(DefaultLink)`
  color: #2f73d8;
  display: block;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  transition: color 200ms ease-in-out;

  &:hover {
    color: #2f73d8;
  }
`

