import * as Yup from 'yup'

export const initialValues = {
  email: '',
  password: '',
  name: '',
  surname: '',
  age: 0,
  country: '',
}

export const validationSignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email address'),
  password: Yup.string()
    .min(4, 'too short characters')
    .max(20, 'too long characters')
    .required('required'),
})
