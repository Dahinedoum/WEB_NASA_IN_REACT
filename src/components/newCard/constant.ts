import * as Yup from 'yup'

export const initialValues = {
  cameraName: '',
  earthDate: '',
  image: '',
}

export const validationNewCardSchema = Yup.object().shape({
  cameraName: Yup.string().required('Please enter a valid name'),
  earthDate: Yup.string().required('required'),
  image: Yup.string().required('required'),
})
