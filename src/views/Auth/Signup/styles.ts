import styled from 'styled-components'
import { Link as DefaultLink } from 'react-router-dom'

export const Container = styled.div``

export const Form = styled.form`
  border: 1px solid;
  margin: 10rem auto;
  border-radius: 4px;
  max-widht: 15rem;  
`

export const FormContent = styled.div`
  padding: 10px;
  background-color: #fff;
`

export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 14px;
`
export const Input = styled.input``


export const InputError = styled.span`
  color: #E53935;
  font-size: 12px;
  line-height: 0.9;
  margin-top: 8px;
`

export const Link = styled(DefaultLink)`
  color: #2F73D8 ;
  display: block;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  transition: color 200ms ease-in-out;

  &:hover {
    color: #2F73D8;
  }
`