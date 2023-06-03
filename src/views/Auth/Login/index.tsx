import { FC, memo, useState } from 'react'
import { Container, Form, Input, InputController, Label } from './styles'
import Button from '../../../components/Button'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './constant'
import { login } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const navigate = useNavigate()
  const [, setError] = useState<string | null>(null)
  const handleLogin = async (values: typeof initialValues) => {
    const loginError = await login(values)
    if (!loginError) {
      navigate('/landing')
    } else {
      setError(loginError)
    }
  }
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      ></Formik>
      <Form>
        <InputController>
          <Label>Email</Label>
          <Input type="email" />
        </InputController>
        <InputController>
          <Label>Password</Label>
          <Input type="password" />
        </InputController>
        <Button>Login</Button>
      </Form>
    </Container>
  )
}

export default memo(Login)
