import { FC, memo, useCallback, useState } from 'react'
import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  InputError,
  Label,
} from './styles'
import Button from '../../../components/Button'
import { Formik } from 'formik'
import { initialValues, validationLoginSchema } from './constant'
import { login } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
    const handleOnSubmit = useCallback((values: {email:string; password: string;}) => {
        console.log(values)
    }, [])



  // const navigate = useNavigate()
  // const [, setError] = useState<string | null>(null)
  // const handleLogin = async (values: typeof initialValues) => {
  //   const loginError = await login(values)
  //   if (!loginError) {
  //     navigate('/landing')
  //   } else {
  //     setError(loginError)
  //   }
  // }



  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationLoginSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <InputController>
                <Label>Email</Label>
                <Input 
                type="email" 
                name="email"
                onChange={handleChange}
                />
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Password</Label>
                <Input 
                type="password" 
                name="password"
                onChange={handleChange}
                />
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type='submit' >
                Login</Button>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Login)
