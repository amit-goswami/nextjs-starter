'use client'

import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { Form } from '@/components/organisms/form'

const otpSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{6}$')).required().messages({
    'string.empty': 'OTP is required',
    'string.pattern.base': 'Please enter a valid OTP'
  })
})

export const LoginComponent = () => {
  return (
    <Form
      validationSchema={otpSchema}
      initialValues={{}}
      getFormData={(data) => console.log(data)}
    >
      <Container className="mb-4">
        <Text as="h1" className="text-2xl font-bold mb-1 dark:text-gray-400">
          Mobile Phone Verification
        </Text>
        <Text as="p" className="text-[15px] text-slate-500 dark:text-gray-400">
          Enter the 6-digit verification code that was sent to your phone
          number.
        </Text>
      </Container>
      <Container className="flex flex-col items-center justify-center">
        <Container className="mt-4">
          <Button btnText="Verify Account" />
        </Container>
      </Container>
    </Form>
  )
}
