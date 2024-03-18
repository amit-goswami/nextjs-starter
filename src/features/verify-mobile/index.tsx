import React from 'react'
import { FormMobileNumber } from './components/enter-mobile'
import { FormEnterVerificationOtp } from './components/enter-otp'
import { Container } from '@/components/atoms/container'
import { MOBILE_VERIFICATION_STEPS } from '@/shared/shared.interface'

export const MobilePhoneVerification: React.FC = () => {
  const currentStep = MOBILE_VERIFICATION_STEPS.ENTER_OTP

  const getMobileVerificationStep = (
    currentStep: MOBILE_VERIFICATION_STEPS
  ) => {
    switch (currentStep) {
      case MOBILE_VERIFICATION_STEPS.ENTER_MOBILE_NUMBER:
        return <FormMobileNumber />
      case MOBILE_VERIFICATION_STEPS.ENTER_OTP:
        return <FormEnterVerificationOtp />
      default:
        return <FormMobileNumber />
    }
  }

  return (
    <Container className="max-w-md mx-auto px-4 sm:px-8 py-10 rounded-sm h-[calc(100vh-152px)]">
      {getMobileVerificationStep(currentStep)}
    </Container>
  )
}
