'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BREAD_CRUMB } from '@/shared/shared.interface'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export const BreadCrumb = () => {
  const pathname = usePathname()
  const [showBreadCrumb, setShowBreadCrumb] = useState(true)
  const [path, setPath] = useState<string[]>([])

  useEffect(() => {
    setPath(pathname.split('/'))
    setShowBreadCrumb(pathname !== BREAD_CRUMB.HOME)
  }, [pathname])

  return (
    <React.Fragment>
      {showBreadCrumb && (
        <Container className="relative flex items-center justify-start space-x-2 px-6 sm:px-8 py-2 z-[9]">
          {path.map((item, index) => (
            <Container
              className={`cursor-pointer flex items-center justify-center ${
                index === path.length - 1 ? 'text-brand' : 'text-gray-500'
              }`}
              key={index}
            >
              <Link href={`${item === '' ? '/' : `/${item}`}`}>
                <Text>{item === '' ? 'home' : item}</Text>
              </Link>
              {index !== path.length - 1 && (
                <ChevronRightIcon className="h-4 w-4 text-gray-500" />
              )}
            </Container>
          ))}
        </Container>
      )}
    </React.Fragment>
  )
}
