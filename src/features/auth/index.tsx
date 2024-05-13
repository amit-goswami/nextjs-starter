'use client'

import useAuthStore from './store/auth.store'
import { Container } from '@/components/atoms/container'
import { LoginComponent } from './components/login'
import { RegisterComponent } from './components/register'

export const AuthComponent = () => {
  const { isLoginTabActive } = useAuthStore()
  return (
    <Container className="max-w-md mx-auto px-4 sm:px-8 py-32 rounded-sm h-[calc(100vh-152px)]">
      {isLoginTabActive ? <LoginComponent /> : <RegisterComponent />}
    </Container>
  )
}
