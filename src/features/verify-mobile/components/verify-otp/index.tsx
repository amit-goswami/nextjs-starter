import Joi from 'joi'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/organisms/form'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { PinInputHorizon } from '@/components/organisms/form/form-pin-input'
import { useFirebaseAuth } from '@/providers/AuthProvider'
import { useVerifyOtpMutation } from '../../hooks/useVerifyOtpMutation'
import { IGetOtpPayload, IVerifyOtpPayload } from '../../verify.interface'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS } from '@/shared/shared.interface'
import { useGetOtpMutation } from '../../hooks/useGetOtpMutation'

const otpSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{6}$')).required().messages({
    'string.empty': 'OTP is required',
    'string.pattern.base': 'Please enter a valid OTP'
  })
})

export const FormEnterVerificationOtp: React.FC = () => {
  const verifyOtpMutation = useVerifyOtpMutation()
  const getOtpMutation = useGetOtpMutation()
  const [resendTimer, setResendTimer] = useState(90)
  const { user } = useFirebaseAuth()

  const { getItem: getUserDetails } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USER_DETAILS
  )
  // const { role } = getUserDetails() || {}

  const { getItem: gettUserMobileNumber } = useLocalStorage(
    LOCAL_STORAGE_KEYS.MOBILE_NUMBER
  )

  // useEffect(() => {
  //   const currentTimestamp = new Date().getTime()
  //   // const lastSentTimestamp =
  //   //   new Date(getUserDetails()?.lastOtpSentAt).getTime() || 0
  //   // const differenceInSeconds = (currentTimestamp - lastSentTimestamp) / 1000
  //   const interval = setInterval(() => {
  //     if (differenceInSeconds > 90) return setResendTimer(0)
  //     setResendTimer(90 - Math.floor(differenceInSeconds))
  //     setResendTimer((prevTimer) => prevTimer - 1)
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [resendTimer, setResendTimer])

  const getOTP = (data: Record<string, string | number | boolean>) => {
    const userMobileNumber = gettUserMobileNumber()
    // if (user && userMobileNumber && role) {
    //   const verifyOtpPayload = {
    //     mobile: userMobileNumber,
    //     // uid: user.uid,
    //     uid: new Date().getTime().toString(),
    //     otp: data.OTP,
    //     role: role
    //   } as IVerifyOtpPayload
    //   verifyOtpMutation.mutate(verifyOtpPayload)
    // }
  }

  const handleResendOtp = () => {
    const mobileNumber = gettUserMobileNumber()
    // if (user && mobileNumber && role) {
    // const getOtpPayload = {
    //   mobile: mobileNumber,
    //   // uid: user.uid,
    //   uid: new Date().getTime().toString(),
    //   role: role
    // } as IGetOtpPayload
    // getOtpMutation.mutate(getOtpPayload)
    // }
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
