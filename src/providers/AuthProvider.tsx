'use client'

import toast from 'react-hot-toast'
import AuthService from '@/features/auth/auth.service'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Loader } from '@/components/molecules/loader'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { IUserLogin, IUserLoginBaha } from '@/features/auth/auth.interface'
import { USER_TYPE } from '@/features/user/user.interface'
import {
  AUTH_MESSAGE,
  LOCAL_STORAGE_KEYS
} from '@/features/shared/shared.interface'
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   User
// } from 'firebase/auth'
// import { auth } from '@/config/firebase'
// import { useCreateUserMutation } from '@/features/auth/hooks/useLoginMutation'
// import { IUserLoginPayload } from '@/features/auth/auth.interface'

interface IAuthContext {
  user: IUserLogin | null
  loading: Boolean
  loginWithEmail: (
    data: Record<string, string | number | boolean>
  ) => Promise<boolean>
  logOut: () => void
  // googleSignIn: (role?: USER_ROLES) => void
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  loginWithEmail: async (data: Record<string, string | number | boolean>) =>
    false,
  logOut: () => {}
  // googleSignIn: (role = USER_ROLES.USER) => {},
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // const useLoginMutate = useCreateUserMutation()
  const [user, setUser] = useState<IUserLogin | null>(null)
  const [loading, setLoading] = useState<Boolean>(false)

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

  const {
    removeItem: removeToken,
    getItem: getToken,
    setItem: setToken
  } = useLocalStorage(LOCAL_STORAGE_KEYS.TOKEN)
  const {
    removeItem: removeUserName,
    getItem: getUserName,
    setItem: setUserName
  } = useLocalStorage(LOCAL_STORAGE_KEYS.USERNAME)
  const {
    removeItem: removeUserType,
    getItem: getUserType,
    setItem: setUserType
  } = useLocalStorage(LOCAL_STORAGE_KEYS.USERTYPE)

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
    const user_type = getUserType()
    if (token && username && user_type) {
      return setUser({
        token,
        username,
        user_type
      })
    }
    return setUser(null)
  }

  const loginWithEmail = async (
    data: Record<string, string | number | boolean>
  ) => {
    const userLoginPayload = {
      email: data.email,
      password: data.password,
      user_type: USER_TYPE.CUSTOMER
    } as IUserLoginBaha
    const response = await AuthService.userLogin(userLoginPayload)
    if (!response) throw new Error('Login failed')

    setToken(response.token)
    setUserName(response.username)
    setUserType(response.user_type)
    setUser(response)
    return true
  }

  useEffect(() => {
    setLoading(false)
    checkIsUserLoggedIn()
    return () => setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, logOut, loginWithEmail }}>
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
