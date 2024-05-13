'use client'

import toast from 'react-hot-toast'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Loader } from '@/components/molecules/loader'
import {
  AUTH_MESSAGE,
  LOCAL_STORAGE_KEYS
  // USER_ROLES
} from '@/shared/shared.interface'
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   User
// } from 'firebase/auth'
// import { auth } from '@/config/firebase'
// import { useCreateUserMutation } from '@/features/auth/hooks/useLoginMutation'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { IUserLogin } from '@/features/auth/auth.interface'
// import { IUserLoginPayload } from '@/features/auth/auth.interface'

interface IAuthContext {
  user: IUserLogin | null
  loading: Boolean
  // googleSignIn: (role?: USER_ROLES) => void
  logOut: () => void
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  // googleSignIn: (role = USER_ROLES.USER) => {},
  logOut: () => {}
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // const useLoginMutate = useCreateUserMutation()
  const [user, setUser] = useState<IUserLogin | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  // const { removeItem: removeUserDetails } = useLocalStorage(
  //   LOCAL_STORAGE_KEYS.USER_DETAILS
  // )
  // const { removeItem: removeCurrentVerificationStep } = useLocalStorage(
  //   LOCAL_STORAGE_KEYS.CURRENT_VERIFICATION_STEP
  // )
  // const { removeItem: removeMobileNumber } = useLocalStorage(
  //   LOCAL_STORAGE_KEYS.MOBILE_NUMBER
  // )

  // const googleSignIn = async (role = USER_ROLES.USER) => {
  //   const provider = new GoogleAuthProvider()
  //   const { user } = await signInWithPopup(auth, provider)
  //   if (!user || !user.email) return setUser(null)
  //   const userDataPayload: IUserLoginPayload = {
  //     uid: user.uid,
  //     email: user.email,
  //     role: role
  //   }
  //   useLoginMutate.mutate(userDataPayload)
  //   setUser(user)
  // }

  const { removeItem: removeToken, getItem: getToken } = useLocalStorage(
    LOCAL_STORAGE_KEYS.TOKEN
  )
  const { removeItem: removeUserName, getItem: getUserName } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USERNAME
  )
  const { removeItem: removeUserType, getItem: getUserType } = useLocalStorage(
    LOCAL_STORAGE_KEYS.USERTYPE
  )

  const logOut = async () => {
    // await signOut(auth)
    // removeUserDetails()
    // removeCurrentVerificationStep()
    // removeMobileNumber()
    removeToken()
    removeUserName()
    removeUserType()
    setUser(null)
    toast.success(AUTH_MESSAGE.USER_LOGGED_OUT)
  }

  const checkIsUserLoggedIn = () => {
    // onAuthStateChanged(auth, (currentUser) => {
    //   if (currentUser) return setUser(currentUser)
    //   return setUser(null)
    // })
    const token = getToken()
    const username = getUserName()
    const usertype = getUserType()
    if (token && username && usertype) {
      return setUser({ token, username, usertype })
    }
    return setUser(null)
  }

  const loginWithEmail = (email: string, password: string) => {
    // Implement user login with email and password
  }

  useEffect(() => {
    setLoading(false)
    checkIsUserLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, logOut }}>
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
