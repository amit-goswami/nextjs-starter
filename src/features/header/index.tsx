'use client'

import useHeaderStore from './store/header.store'
import React, { useState } from 'react'
import { Logo } from './components/logo'
import { UserAuth } from '@/providers/AuthProvider'
import { usePathname } from 'next/navigation'
import { SideBarMenu } from './components/sidebar-menu'

export const HeaderComponent: React.FC = () => {
  const pathname = usePathname()
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const { navigation } = useHeaderStore()
  const { user, logOut } = UserAuth()

  const handleSignOut = () => {
    logOut()
  }

  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 bg-transparent relative z-10"
        aria-label="Global"
      >
        <Logo />
        <SideBarMenu
          user={user}
          pathname={pathname}
          sideBarOpen={sideBarOpen}
          navigationData={navigation}
          handleSignOut={handleSignOut}
          setSideBarOpen={setSideBarOpen}
        />
      </nav>
    </header>
  )
}
