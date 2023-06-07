import styled from 'styled-components'

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
  color: #e53935;
  font-size: 12px;
  line-height: 0.9;
  margin-top: 8px;
`
