'use client'

import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { Loader } from '@/components/molecules/loader'
import { IUser, LOCAL_STORAGE_KEYS } from '@/shared/shared.interface'

interface IAuthContext {
  user: IUser | null
  loading: Boolean
  signIn: () => void
  logOut: () => void
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  signIn: () => {},
  logOut: () => {}
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  const { getItem, removeItem } = useLocalStorage(LOCAL_STORAGE_KEYS.TOKEN)

  const signIn = () => {
    setUser({
      name: 'John Doe'
    })
  }

  const logOut = () => {
    setUser(null)
    removeItem()
  }

  const checkIsUserLoggedIn = () => {
    const token = getItem()
    if (!token) return setUser(null)
    return setUser(null)
  }

  useEffect(() => {
    setLoading(false)
    return () => checkIsUserLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, signIn, logOut }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => useContext(AuthContext)
