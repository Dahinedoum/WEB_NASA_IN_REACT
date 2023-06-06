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
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Formik } from 'formik'
import { initialValues, validationSignupSchema } from './constant'
// import { login } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup: FC = () => {
  const handleOnSubmit = useCallback(
    (values: {
      email: string
      password: string
      nombre: string
      apellidos: string
      edad: number
      pais: string
    }) => {
      console.log(values)
    },
    []
  )

  return (
    <>
      <Header />
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
                  {errors?.password && (
                    <InputError>{errors.password}</InputError>
                  )}
                </InputController>
                <InputController>
                  <Label>Nombre</Label>
                  <Input type="text" name="nombre" onChange={handleChange} />
                  {errors?.nombre && <InputError>{errors.nombre}</InputError>}
                </InputController>
                <InputController>
                  <Label>Apellidos</Label>
                  <Input type="text" name="apellidos" onChange={handleChange} />
                  {errors?.apellidos && (
                    <InputError>{errors.apellidos}</InputError>
                  )}
                </InputController>
                <InputController>
                  <Label>Edad</Label>
                  <Input type="number" name="edad" onChange={handleChange} />
                  {errors?.edad && <InputError>{errors.edad}</InputError>}
                </InputController>
                <InputController>
                  <Label>País</Label>
                  <Input type="text" name="pais" onChange={handleChange} />
                  {errors?.pais && <InputError>{errors.pais}</InputError>}
                </InputController>
                <Button type="submit">Create an account</Button>
                <Link to="/login">Log in</Link>
              </FormContent>
            </Form>
          )}
        </Formik>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Signup)
