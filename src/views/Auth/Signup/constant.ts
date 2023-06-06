import * as Yup from 'yup'
import { object, string, number, date } from 'yup'

export const initialValues = {
  email: '',
  password: '',
  nombre: '',
  apellidos: '',
  edad: 0,
  pais: '',

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
