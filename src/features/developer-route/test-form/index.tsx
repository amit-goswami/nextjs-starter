import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { IUserLoginBaha } from '@/features/auth/auth.interface'
import { USER_TYPE } from '@/features/user/user.interface'
import HttpService from '@/services/HttpService'
import Logger from '@/libs/logger.util'

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

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const TestingFormComponents = () => {
  const getFormData = async (
    data: Record<string, string | number | boolean>
  ) => {
    try {
      const userLoginPayload = {
        email: data.email,
        password: data.password,
        user_type: USER_TYPE.CUSTOMER
      } as IUserLoginBaha
      const response = await HttpService.post(`${baseUrl}/users/login`, {
        user: {
          ...userLoginPayload
        }
      })
      Logger.info('User login response', response as any)
    } catch (error) {
      return error
    }
  }
  return (
    <Form
      validationSchema={loginSchema}
      initialValues={{
        email: 'wrong@gmail.com',
        password: '123456'
      }}
      getFormData={getFormData}
      className="w-full"
    >
      <Container className="flex flex-col gap-2 mb-4">
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Password" name="password" type="password" />
      </Container>
      <Button btnText="Login" />
    </Form>
  )
}
