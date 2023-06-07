import styled from 'styled-components'
import { Link as DefaultLink } from 'react-router-dom'

export const Container = styled.div``

export const Form = styled.form`
  border: none;
  margin: 10rem auto;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

export const FormContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`

export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 14px;
  color: #2F73D8;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #2F73D8;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2F73D8;
  }
`

export const InputError = styled.span`
  color: #E53935;
  font-size: 14px;
  margin-top: 8px;
`

export const Link = styled(DefaultLink)`
  color: #2F73D8;
  display: block;
  font-size: 16px;
  margin-top: 16px;
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }
`
