import Joi from 'joi'
import React, { useEffect } from 'react'
import useVerifyStore from '../../store/verify.store'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/organisms/form'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { PinInputHorizon } from '@/components/organisms/form/form-pin-input'
import { useFirebaseAuth } from '@/providers/AuthProvider'
import { useVerifyOtpMutation } from '../../hooks/useVerifyOtpMutation'
import { IGetOtpPayload, IVerifyOtpPayload } from '../../verify.interface'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS, ROUTES } from '@/shared/shared.interface'
import { useGetOtpMutation } from '../../hooks/useGetOtpMutation'
import { useRouter } from 'next/navigation'

const otpSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{6}$')).required().messages({
    'string.empty': 'OTP is required',
    'string.pattern.base': 'Please enter a valid OTP'
  })
})

export const FormEnterVerificationOtp: React.FC = () => {
  const router = useRouter()
  const verifyOtpMutation = useVerifyOtpMutation()
  const getOtpMutation = useGetOtpMutation()
  const { user } = useFirebaseAuth()
  const { isOtpVerified } = useVerifyStore()

  useEffect(() => {
    if (isOtpVerified) return router.push(ROUTES.HOME)
  }, [isOtpVerified])

  const { getItem: gettUserMobileNumber } = useLocalStorage(
    LOCAL_STORAGE_KEYS.MOBILE_NUMBER
  )
  const { getItem: getUserDetails } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USER_DETAILS
  )

  const isButtonDisabled = () => {
    const currentTimestamp = new Date().getTime()
    const lastSentTimestamp = new Date(getUserDetails().lastOtpSentAt).getTime()
    const differenceInSeconds = (currentTimestamp - lastSentTimestamp) / 1000
    return differenceInSeconds > 90
  }

  const getOTP = (data: Record<string, string | number | boolean>) => {
    const userMobileNumber = gettUserMobileNumber()
    if (user && userMobileNumber) {
      const verifyOtpPayload = {
        mobile: userMobileNumber,
        uid: user.uid,
        otp: data.OTP
      } as IVerifyOtpPayload
      verifyOtpMutation.mutate(verifyOtpPayload)
    }
  }

  const handleResendOtp = () => {
    const mobileNumber = gettUserMobileNumber()
    if (user && mobileNumber) {
      const getOtpPayload = {
        mobile: mobileNumber,
        uid: user.uid
      } as IGetOtpPayload
      getOtpMutation.mutate(getOtpPayload)
    }
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
        <PinInputHorizon name="OTP" length={6} />
        <Container className="mt-4">
          <Button btnText="Verify Account" />
        </Container>
        <Container className="flex text-sm text-slate-500 mt-4">
          Didn&apos;t receive code?
          <Button
            className="ml-1 font-medium text-[#f68a1e] hover:text-gray-600 cursor-pointer disabled:hover:text-gray-400 disabled:cursor-not-allowed"
            btnText="Resend"
            onClick={() => handleResendOtp()}
            disabled={!isButtonDisabled()}
          />
        </Container>
      </Container>
    </Form>
  )
}
