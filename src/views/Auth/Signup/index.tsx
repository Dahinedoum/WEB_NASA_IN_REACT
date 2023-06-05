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
import { Button } from '../../../components/Button'
import { Formik } from 'formik'
import { initialValues, validationSignupSchema } from './constant'
import { login } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup: FC = () => {
  const handleOnSubmit = useCallback(
    (values: { email: string; password: string }) => {
      console.log(values)
    },
    []
  )

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSignupSchema}
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
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type="submit">Create an account </Button>
              <Link to="/login">Log in</Link>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Signup)
