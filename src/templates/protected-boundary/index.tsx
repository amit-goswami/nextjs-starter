'use client'

import React from 'react'
import { MobilePhoneVerification } from '@/features/verify-mobile'
import { useFirebaseAuth } from '@/providers/AuthProvider'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS } from '@/shared/shared.interface'

export const ProtectedBoundary = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { user } = useFirebaseAuth()
  const { getItem: getUserDetails } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USER_DETAILS
  )
  const { isMobileVerified } = getUserDetails() || {}

  if (user && !isMobileVerified) {
    return <MobilePhoneVerification />
  }

  return <React.Fragment>{children}</React.Fragment>
}
