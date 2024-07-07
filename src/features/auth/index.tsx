'use client'

import useAuthStore from './store/auth.store'
import getRenderComponent from './components'
import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'

export const AuthComponent = () => {
  const { isLoginTabActive, setIsLoginTabActive } = useAuthStore()
  return (
    <Container className="max-w-md mx-auto px-4 sm:px-8 rounded-sm h-[calc(100vh-200px)]">
      <BackGroundDiv>
        {getRenderComponent({ isLoginTabActive, setIsLoginTabActive })}
      </BackGroundDiv>
    </Container>
  )
}
