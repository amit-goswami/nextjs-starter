'use client'

import toast from 'react-hot-toast'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Loader } from '@/components/molecules/loader'
import {
  AUTH_MESSAGE,
  LOCAL_STORAGE_KEYS,
  USER_ROLES
} from '@/shared/shared.interface'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User
} from 'firebase/auth'
import { auth } from '@/config/firebase'
import { useCreateUserMutation } from '@/features/auth/hooks/useLoginMutation'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { IUserLoginPayload } from '@/features/auth/auth.interface'

interface IAuthContext {
  user: User | null
  loading: Boolean
  googleSignIn: (role?: USER_ROLES) => void
  logOut: () => void
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  googleSignIn: (role = USER_ROLES.USER) => {},
  logOut: () => {}
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const useLoginMutate = useCreateUserMutation()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  const { removeItem: removeUserDetails } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USER_DETAILS
  )
  const { removeItem: removeCurrentVerificationStep } = useLocalStorage(
    LOCAL_STORAGE_KEYS.CURRENT_VERIFICATION_STEP
  )
  const { removeItem: removeMobileNumber } = useLocalStorage(
    LOCAL_STORAGE_KEYS.MOBILE_NUMBER
  )

  const googleSignIn = async (role = USER_ROLES.USER) => {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)
    if (!user || !user.email) return setUser(null)
    const userDataPayload: IUserLoginPayload = {
      uid: user.uid,
      email: user.email,
      role: role
    }
    useLoginMutate.mutate(userDataPayload)
    setUser(user)
  }

  const logOut = async () => {
    await signOut(auth)
    setUser(null)
    removeUserDetails()
    removeCurrentVerificationStep()
    removeMobileNumber()
    toast.success(AUTH_MESSAGE.USER_LOGGED_OUT)
  }

  const checkIsUserLoggedIn = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) return setUser(currentUser)
      return setUser(null)
    })
  }

  useEffect(() => {
    setLoading(false)
    return () => checkIsUserLoggedIn()
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loading, googleSignIn, logOut }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  )
}

export const useFirebaseAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useFirebaseAuth must be used within an AuthProvider')
  }
  return context
}
