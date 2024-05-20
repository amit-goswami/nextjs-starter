import React from 'react'
import Joi from 'joi'
import toast from 'react-hot-toast'
import AuthService from '@/features/auth/auth.service'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'

const getOtpSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    })
})

type GetEmailProps = {
  setEmail: (data: Record<string, string | number | boolean>) => void
  setIsGetOtpClicked: (data: boolean) => void
}

export const GetEmail = ({ setEmail, setIsGetOtpClicked }: GetEmailProps) => {
  const [disableButton, setDisableButton] = React.useState(false)
  const handleGetOtp = async (
    data: Record<string, string | number | boolean>
  ) => {
    setDisableButton(true)
    const response = await AuthService.getOtp(data.email as string)
    setDisableButton(false)
    if (!response) return
    toast.success(response)
    setEmail(data)
    setIsGetOtpClicked(true)
  }

  return (
    <Form
      validationSchema={getOtpSchema}
      initialValues={{}}
      getFormData={(data) => handleGetOtp(data)}
    >
      <Container className="flex flex-col gap-2 mb-4">
        <FormInput
          label="Enter the Email to get OTP"
          name="email"
          type="email"
        />
      </Container>
      <Button btnText="Get OTP" disabled={disableButton} />
    </Form>
  )
}
