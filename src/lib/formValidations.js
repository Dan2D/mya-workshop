import { object, string, ref } from 'yup'

export const loginSchema = object({
  username: string('Enter a username or email')
    .required('Username or Email is required'),
  password: string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Password is required')
})

export const registrationSchema = object({
  username: string('Enter a username')
    .required('Username is required'),
  email: string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Password is required'),
  confirmPass: string('Enter your password')
    .required('Confirm your password')
    .oneOf([ref('password')], 'Password does not match')
})

export const adventureSchema = object({
  name: string('Enter a name')
    .required('Adventure Name is required')
    .min(8, 'Adventure name must contain and least 8 characters'),
  description: string('Enter a description')
    .required('A description is required')
})