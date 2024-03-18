import Joi from 'joi'
import React from 'react'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/organisms/form'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { PinInputHorizon } from '@/components/organisms/form/form-pin-input'

const otpSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{4}$')).required().messages({
    'string.empty': 'OTP is required',
    'string.pattern.base': 'Please enter a valid OTP'
  })
})

export const FormEnterVerificationOtp: React.FC = () => {
  const getOTP = (data: Record<string, string | number | boolean>) => {
    console.log(data)
  }
  return (
    <Form validationSchema={otpSchema} initialValues={{}} getFormData={getOTP}>
      <Container className="mb-4">
        <Text as="h1" className="text-2xl font-bold mb-1">
          Mobile Phone Verification
        </Text>
        <Text as="p" className="text-[15px] text-slate-500">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </Text>
      </Container>
      <Container className="flex flex-col items-center justify-center">
        <PinInputHorizon name="OTP" />
        <Container className="mt-4">
          <Button btnText="Verify Account" />
        </Container>
        <Container className="flex text-sm text-slate-500 mt-4">
          Didn't receive code?
          <Container className="ml-1 font-medium text-[#f68a1e] hover:text-gray-500 cursor-pointer">
            Resend
          </Container>
        </Container>
      </Container>
    </Form>
  )
}
