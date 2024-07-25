import React from 'react'
import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { useGetOtpMutation } from '../../hooks/useGetOtpMutation'
import { IGetOtpPayload } from '../../verify.interface'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS } from '@/features/shared/shared.interface'
import { useFirebaseAuth } from '@/providers/auth-provider'

type FormMobileNumberProps = {
  setCurrentVerificationStep: () => void
}

const mobileNumberSchema = Joi.object({
  mobileNumber: Joi.string()
    .pattern(new RegExp('^[0-9]{10}$'))
    .required()
    .messages({
      'string.empty': 'Mobile number is required',
      'string.pattern.base': 'Please enter a valid mobile number'
    })
})

export const FormMobileNumber: React.FC<FormMobileNumberProps> = ({
  setCurrentVerificationStep
}: FormMobileNumberProps) => {
  const getOtpMutation = useGetOtpMutation()
  const { user } = useFirebaseAuth()
  const { setItem: setUserMobileNumber } = useLocalStorage(
    LOCAL_STORAGE_KEYS.MOBILE_NUMBER
  )
  // const { getItem: getUserDetails } = useLocalStorage(
  //   LOCAL_STORAGE_KEYS.USER_DETAILS
  // )
  // const { role } = getUserDetails() || {}

  const getFormData = (data: Record<string, string | number | boolean>) => {
    setUserMobileNumber(data.mobileNumber)
    // if (user && role) {
    if (user) {
      const getOtpPayload = {
        mobile: data.mobileNumber
        // uid: user.uid,
        // role: role
      } as IGetOtpPayload
      getOtpMutation.mutate(getOtpPayload)
      setCurrentVerificationStep()
    }
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
          <Button btnText="Sent OTP" disable={getOtpMutation.isPending} />
        </Container>
      </Container>
    </Form>
  )
}
