import React, { useEffect } from 'react'
import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { MOBILE_VERIFICATION_STEPS } from '@/shared/shared.interface'

const mobileNumberSchema = Joi.object({
  mobileNumber: Joi.string()
    .pattern(new RegExp('^[0-9]{10}$'))
    .required()
    .messages({
      'string.empty': 'Mobile number is required',
      'string.pattern.base': 'Please enter a valid mobile number'
    })
})

type FormMobileNumberProps = {
  setCurrentVerificationStep: () => void
}

export const FormMobileNumber: React.FC<FormMobileNumberProps> = ({
  setCurrentVerificationStep
}: FormMobileNumberProps) => {
  const getFormData = (data: Record<string, string | number | boolean>) => {
    console.log(data)
    setCurrentVerificationStep()
  }
  return (
    <Form
      validationSchema={mobileNumberSchema}
      initialValues={{}}
      getFormData={getFormData}
    >
      <Container className="mb-4">
        <Text as="h1" className="text-2xl font-bold mb-1">
          Enter Mobile Phone
        </Text>
        <Text as="p" className="text-[15px] text-slate-500">
          Enter your mobile number to receive a verification code.
        </Text>
      </Container>
      <Container>
        <FormInput
          label="Mobile Number"
          name="mobileNumber"
          type="text"
          labelRequired
        />
        <Container className="mt-4">
          <Button btnText="Sent OTP" />
        </Container>
      </Container>
    </Form>
  )
}
