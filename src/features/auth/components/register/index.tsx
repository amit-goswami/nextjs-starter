'use client'

import React from 'react'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { CreateRegistration } from './create-registration'
import { GetEmail } from './get-email'
import useAuthStore from '../../store/auth.store'

type getRenderComponentProps = {
  isGetOtpClicked: boolean
  registeredEmail: Record<string, string | number | boolean> | null
  setRegisteredEmail: (
    email: Record<string, string | number | boolean> | null
  ) => void
  setIsGetOtpClicked: (isClicked: boolean) => void
}

const getRenderComponent = ({
  isGetOtpClicked,
  registeredEmail,
  setRegisteredEmail,
  setIsGetOtpClicked
}: getRenderComponentProps) => {
  switch (isGetOtpClicked) {
    case true:
      return (
        <CreateRegistration
          email={registeredEmail}
          setIsGetOtpClicked={setIsGetOtpClicked}
        />
      )
    case false:
      return (
        <GetEmail
          setEmail={setRegisteredEmail}
          setIsGetOtpClicked={setIsGetOtpClicked}
        />
      )
    default:
      return null
  }
}

export const RegisterComponent = () => {
  const {
    isGetOtpClicked,
    registeredEmail,
    setRegisteredEmail,
    setIsGetOtpClicked
  } = useAuthStore()

  return (
    <Container>
      <Text as="h1" className="mb-4">
        Register a new account
      </Text>
      {getRenderComponent({
        isGetOtpClicked,
        registeredEmail,
        setRegisteredEmail,
        setIsGetOtpClicked
      })}
    </Container>
  )
}
