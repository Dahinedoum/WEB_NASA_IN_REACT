import { FC, memo } from 'react'
import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  InputError,
  Label,
} from './styles'
import { Button } from '../../../components/Button'
import { Formik } from 'formik'
import { initialValues, validationLoginSchema } from './constant'
import { Link } from 'react-router-dom'
import useLogic from './logic'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const Login: FC = () => {
  const { handleOnSubmit } = useLogic()

  return (
    <>
      <Header />
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
                  <Input type="email" name="email" onChange={handleChange} />
                  {errors?.email && <InputError>{errors.email}</InputError>}
                </InputController>
                <InputController>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                  {errors?.password && (
                    <InputError>{errors.password}</InputError>
                  )}
                </InputController>
                <Button type="submit">Login</Button>
                <Link to="/signup">Crear cuenta</Link>
              </FormContent>
            </Form>
          )}
        </Formik>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Login)
