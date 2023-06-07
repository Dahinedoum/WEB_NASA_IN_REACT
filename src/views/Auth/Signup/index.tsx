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
import useLogic from './logic'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Background from '../../../components/Background'

const Signup: FC = () => {
  const { handleOnSubmit } = useLogic()

  return (
    <>
      <Header />
      <Background />
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
                  <Label>Name</Label>
                  <Input type="text" name="name" onChange={handleChange} />
                  {errors?.name && <InputError>{errors.name}</InputError>}
                </InputController>
                <InputController>
                  <Label>Surname</Label>
                  <Input type="text" name="surname" onChange={handleChange} />
                  {errors?.surname && (
                    <InputError>{errors.surname}</InputError>
                  )}
                </InputController>
                <InputController>
                  <Label>Age</Label>
                  <Input type="number" name="age" onChange={handleChange} />
                  {errors?.age && <InputError>{errors.age}</InputError>}
                </InputController>
                <InputController>
                  <Label>Country</Label>
                  <Input type="text" name="country" onChange={handleChange} />
                  {errors?.country && <InputError>{errors.country}</InputError>}
                </InputController>
                <Button type="submit">Register</Button>
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
