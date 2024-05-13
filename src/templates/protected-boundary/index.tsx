'use client'

import React from 'react'

// import useVerifyStore from '@/features/verify-mobile/store/verify.store'
// import React, { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { MobilePhoneVerification } from '@/features/verify-mobile'
// import { useFirebaseAuth } from '@/providers/AuthProvider'
// import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
// import { LOCAL_STORAGE_KEYS, ROUTES } from '@/shared/shared.interface'

export const ProtectedBoundary = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  // const router = useRouter()
  // const { user } = useFirebaseAuth()
  // const { isOtpVerified } = useVerifyStore()
  // const { getItem: getUserDetails } = useLocalStorage(
  //   LOCAL_STORAGE_KEYS.USER_DETAILS
  // )
  // const { isMobileVerified } = getUserDetails() || {}

  // useEffect(() => {
  //   if (isOtpVerified) return router.push(ROUTES.USER)
  //   if (user && isMobileVerified) {
  //     return router.push(ROUTES.USER)
  //   }
  // }, [isOtpVerified, user, isMobileVerified, router])

  // if (user && !isMobileVerified) {
  //   return <MobilePhoneVerification />
  // }

  return <React.Fragment>{children}</React.Fragment>
}
