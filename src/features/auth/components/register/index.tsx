'use client'

import React from 'react'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { CreateRegistration } from './create-registration'
import { GetEmail } from './get-email'

export const RegisterComponent = () => {
  const [email, setEmail] =
    React.useState<Record<string, string | number | boolean>>()
  const [isGetOtpClicked, setIsGetOtpClicked] = React.useState(false)

  return (
    <Container>
      <Text as="h1" className="mb-4">
        Register a new account
      </Text>
      {isGetOtpClicked ? (
        <CreateRegistration email={email} />
      ) : (
        <GetEmail setEmail={setEmail} setIsGetOtpClicked={setIsGetOtpClicked} />
      )}
    </Container>
  )
}
