'use client'

import useHeaderStore from './store/header.store'
import React from 'react'
import { Logo } from './components/logo'
import { SideBarMenu } from './components/sidebar-menu'
import { useFirebaseAuth } from '@/providers/AuthProvider'
import { RenderButtonType } from './components/render-button-type'
import { Container } from '@/components/atoms/container'
import { ThemeSwitcher } from './components/theme-switcher-button'

export const HeaderComponent: React.FC = () => {
  const { navigation } = useHeaderStore()
  const { user, logOut, googleSignIn } = useFirebaseAuth()
  const { sideBarOpen } = useHeaderStore()
  const { setSideBarOpen } = useHeaderStore()

  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 bg-transparent relative z-10"
        aria-label="Global"
      >
        <Logo />
        <Container className="flex items-center justify-center gap-x-6">
          <ThemeSwitcher />
          <RenderButtonType
            user={user}
            handleSignOut={logOut}
            handleSignIn={googleSignIn}
          />
          <Container className='className="relative flex overflow-hidden'>
            <SideBarMenu
              user={user}
              sideBarOpen={sideBarOpen}
              navigationData={navigation}
              handleSignOut={() => logOut()}
              setSideBarOpen={setSideBarOpen}
              googleSignIn={googleSignIn}
            />
          </Container>
        </Container>
      </nav>
    </header>
  )
}
