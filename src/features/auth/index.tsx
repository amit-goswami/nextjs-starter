'use client'

import useAuthStore from './store/auth.store'
import { Container } from '@/components/atoms/container'
import { LoginComponent } from './components/login'
import { RegisterComponent } from './components/register'
import { Button } from '@/components/atoms/button'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'

export const AuthComponent = () => {
  const { isLoginTabActive, setIsLoginTabActive } = useAuthStore()
  return (
    <Container className="max-w-md mx-auto px-4 sm:px-8 py-24 rounded-sm h-[calc(100vh-200px)]">
      <BackGroundDiv>
        <Container className="mb-8">
          {isLoginTabActive ? <LoginComponent /> : <RegisterComponent />}
        </Container>
        {isLoginTabActive && (
          <Container className="text-center flex items-center justify-center gap-2">
            <p className="text-sm text-gray-600">Don&apos;t have an account?</p>
            <Button
              onClick={() => setIsLoginTabActive(false)}
              btnText="Register"
            />
          </Container>
        )}
        {!isLoginTabActive && (
          <Container className="text-center flex items-center justify-center gap-2">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Button onClick={() => setIsLoginTabActive(true)} btnText="Login" />
          </Container>
        )}
      </BackGroundDiv>
    </Container>
  )
}
