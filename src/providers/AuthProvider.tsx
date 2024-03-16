'use client'

import toast from 'react-hot-toast'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Loader } from '@/components/molecules/loader'
import { AUTH_MESSAGE } from '@/shared/shared.interface'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User
} from 'firebase/auth'
import { auth } from '@/config/firebase'

interface IAuthContext {
  user: User | null
  loading: Boolean
  googleSignIn: () => void
  logOut: () => void
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  googleSignIn: () => {},
  logOut: () => {}
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)
    setUser(user)
  }

  const logOut = async () => {
    await signOut(auth)
    setUser(null)
    toast.success(AUTH_MESSAGE.USER_LOGGED_OUT)
  }

  const checkIsUserLoggedIn = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    })
  }

  useEffect(() => {
    setLoading(false)
    return () => checkIsUserLoggedIn()
  }, [])

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
