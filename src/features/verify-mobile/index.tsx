import React from 'react'
import { FormMobileNumber } from './components/enter-mobile'
import { FormEnterVerificationOtp } from './components/verify-otp'
import { Container } from '@/components/atoms/container'
import {
  LOCAL_STORAGE_KEYS,
  MOBILE_VERIFICATION_STEPS
} from '@/features/shared/shared.interface'
import { useLocalStorage } from '../shared/hooks/useLocalStorage'

const getMobileVerificationStep = (
  currentStep: MOBILE_VERIFICATION_STEPS,
  handleFormMobileNumberSubmit: () => void
) => {
  switch (currentStep) {
    case MOBILE_VERIFICATION_STEPS.ENTER_MOBILE_NUMBER:
      return (
        <FormMobileNumber
          setCurrentVerificationStep={handleFormMobileNumberSubmit}
        />
      )
    case MOBILE_VERIFICATION_STEPS.ENTER_OTP:
      return <FormEnterVerificationOtp />
    default:
      return (
        <FormMobileNumber
          setCurrentVerificationStep={handleFormMobileNumberSubmit}
        />
      )
  }
}

export const MobilePhoneVerification: React.FC = () => {
  const [currentStep, setCurrentStep] =
    React.useState<MOBILE_VERIFICATION_STEPS>(
      MOBILE_VERIFICATION_STEPS.ENTER_MOBILE_NUMBER
    )
  const { setItem: setCurrentVerificationStep } = useLocalStorage(
    LOCAL_STORAGE_KEYS.CURRENT_VERIFICATION_STEP
  )

  const handleFormMobileNumberSubmit = () => {
    setCurrentStep(MOBILE_VERIFICATION_STEPS.ENTER_OTP)
    setCurrentVerificationStep(MOBILE_VERIFICATION_STEPS.ENTER_OTP)
  }

  return (
    <Container className="max-w-md mx-auto px-4 sm:px-8 py-32 rounded-sm h-[calc(100vh-152px)]">
      {getMobileVerificationStep(currentStep, handleFormMobileNumberSubmit)}
    </Container>
  )
}
