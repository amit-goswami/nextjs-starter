import Joi from 'joi'
import React, { useState } from 'react'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/organisms/form'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { PinInputHorizon } from '@/components/organisms/form/form-pin-input'

const otpSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{6}$')).required().messages({
    'string.empty': 'OTP is required',
    'string.pattern.base': 'Please enter a valid OTP'
  })
})

export const FormEnterVerificationOtp: React.FC = () => {
  const [resendTimer, setResendTimer] = useState(90)

  const getOTP = (data: Record<string, string | number | boolean>) => {}

  const handleResendOtp = () => {
    setResendTimer(90)
  }

  return (
    <Form validationSchema={otpSchema} initialValues={{}} getFormData={getOTP}>
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
        <PinInputHorizon name="OTP" length={6} />
        <Container className="mt-4">
          <Button btnText="Verify Account" />
        </Container>
        <Container className="flex text-sm text-slate-500 mt-4 dark:text-gray-400">
          {resendTimer > 0 ? (
            <Text>Resend code in {resendTimer} seconds</Text>
          ) : (
            <Container
              className="cursor-pointer"
              onClick={() => handleResendOtp()}
            >
              Resend code
            </Container>
          )}
        </Container>
      </Container>
    </Form>
  )
}
