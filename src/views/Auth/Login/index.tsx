import { FC, memo } from 'react'
import { Container, Form, Input, InputController, Label } from './styles'

const Login: FC = () => {
  return (<Container>
    <Form>
        <InputController>
            <Label>Email</Label>
            <Input type="email" />
        </InputController>
        <InputController>
            <Label>Password</Label>
            <Input type="password" />
        </InputController>
        <Button></Button>
    </Form>

    
  </Container>
  )
}

export default memo(Login)
