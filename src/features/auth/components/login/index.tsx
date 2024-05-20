'use client'

import Joi from 'joi'
import toast from 'react-hot-toast'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { Text } from '@/components/atoms/text'
import { useFirebaseAuth } from '@/providers/AuthProvider'
import { useRouter } from 'next/navigation'
import { LOGIN_ALERT } from '../../auth.interface'
import { ROUTES } from '@/features/shared/shared.interface'

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters'
  })
})

export const LoginComponent = () => {
  const { loginWithEmail } = useFirebaseAuth()
  const router = useRouter()

  const getFormData = async (
    data: Record<string, string | number | boolean>
  ) => {
    const success = await loginWithEmail(data)
    if (success) return router.push(ROUTES.HOME)
    return toast.error(LOGIN_ALERT.ERROR)
  }

  return (
    <Container>
      <Text as="h1" className="mb-4">
        Login to your account
      </Text>
      <Form
        validationSchema={loginSchema}
        initialValues={{}}
        getFormData={getFormData}
      >
        <Container className="flex flex-col gap-2 mb-4">
          <FormInput label="Email" name="email" type="email" />
          <FormInput label="Password" name="password" type="password" />
        </Container>
        <Button btnText="Login" />
      </Form>
    </Container>
  )
}
