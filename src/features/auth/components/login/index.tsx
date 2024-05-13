'use client'

import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'

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

const getFormData = (data: Record<string, string | number | boolean>) => {
  console.log(data)
}

export const LoginComponent = () => {
  return (
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
  )
}
