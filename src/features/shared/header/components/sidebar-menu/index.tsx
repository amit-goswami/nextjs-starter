import React, { useRef } from 'react'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/atoms/button'
import { INavigationData } from '../../header.interface'
import { NavBarOptions } from '../nav-options'
import { RenderButtonType } from '../render-button-type'
import { Logo } from '../logo'
import { useClickOutside } from '@/features/shared/hooks/useClickOutSide'
import { IUserLogin } from '@/features/auth/auth.interface'

type SideBarMenuProps = {
  user: IUserLogin | null
  sideBarOpen: boolean
  navigationData: [] | INavigationData[]
  handleSignOut: () => void
  setSideBarOpen: (value: boolean) => void
  googleSignIn: () => void
}

export const SideBarMenu = ({
  user,
  sideBarOpen,
  navigationData,
  handleSignOut,
  setSideBarOpen,
  googleSignIn
}: SideBarMenuProps) => {
  const sideBarRef = useRef(null)

  const handleCloseModal = () => {
    setSideBarOpen(false)
  }
  useClickOutside(sideBarRef, handleCloseModal)

  return (
    <div ref={sideBarRef}>
      <Bars3BottomRightIcon
        className="h-6 w-6 cursor-pointer text-gray-900 dark:text-gray-600"
        onClick={() => setSideBarOpen(true)}
        aria-hidden="true"
      />
      <Container
        className={`fixed inset-y-0 right-0 lg:w-4/12 md:w-2/3 sm:w-6/12 bg-gray-900 z-50 transform transition-transform ease-in-out duration-300 ${sideBarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Container className="bg-gray-100 dark:bg-gray-800 h-screen">
          <Container className="p-7">
            <Container className="flex items-center justify-between">
              <Logo />
              <Button
                type="button"
                className="text-gray-700"
                onClick={() => setSideBarOpen(false)}
                btnText={
                  <React.Fragment>
                    <Text className="sr-only">Close menu</Text>
                    <XMarkIcon
                      className="h-6 w-6 dark:text-gray-600"
                      aria-hidden="true"
                    />
                  </React.Fragment>
                }
              />
            </Container>
            <Container className="mt-6">
              <Container className="divide-y divide-gray-500/10 dark:divide-gray-600">
                <Container className="space-y-2 py-6">
                  <NavBarOptions navigationData={navigationData} user={user} />
                </Container>
                <Container className="py-6">
                  <RenderButtonType
                    user={user}
                    handleSignOut={handleSignOut}
                    handleSignIn={googleSignIn}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  )
}
