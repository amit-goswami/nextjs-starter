'use client'

import React from 'react'
import { MobilePhoneVerification } from '@/features/verify-mobile'
import { useFirebaseAuth } from '@/providers/AuthProvider'

export const ProtectedBoundary = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { user } = useFirebaseAuth()
  const isMobileVerified = false

  if (user && !isMobileVerified) {
    return <MobilePhoneVerification />
  }

  return <React.Fragment>{children}</React.Fragment>
}
