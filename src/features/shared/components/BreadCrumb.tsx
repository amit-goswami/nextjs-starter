'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BREAD_CRUMB } from '@/shared/shared.interface'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

enum REMOVE_SUB_PATHS {
  TREK_PLANNER = 'trek-planner',
  PAYMENT = 'payment'
}

type getBreadCrumbValuesProps = {
  item: string
  index: number
  path: string[]
}

const getBreadCrumbValues = ({
  item,
  index,
  path
}: getBreadCrumbValuesProps) => {
  const isNotLast = index !== path.length - 1
  const renderText = item === '' ? 'home' : item
  const textLink = item === '' ? '/' : `/${item}`
  const textColor = index === path.length - 1 ? 'text-brand' : 'text-gray-500'

  return { isNotLast, renderText, textLink, textColor }
}

export const BreadCrumb = () => {
  const pathname = usePathname()
  const [showBreadCrumb, setShowBreadCrumb] = useState(true)
  const [path, setPath] = useState<string[]>([])

  useEffect(() => {
    const path = pathname.split('/')
    const removeSubPaths = path.filter(
      (item) => !Object.values(REMOVE_SUB_PATHS).includes(item as any)
    )
    setPath(removeSubPaths)
    setShowBreadCrumb(pathname !== BREAD_CRUMB.HOME)
  }, [pathname])

  return (
    <React.Fragment>
      {showBreadCrumb && (
        <Container className="relative flex items-center justify-start space-x-2 px-6 sm:px-8 py-2 z-[9]">
          {path.map((item, index) => {
            const { isNotLast, renderText, textLink, textColor } =
              getBreadCrumbValues({ item, index, path })
            return (
              <Container
                className={`cursor-pointer flex items-center justify-center hover:text-black ${textColor}`}
                key={index}
              >
                <Link href={textLink}>
                  <Text>{renderText}</Text>
                </Link>
                {isNotLast && (
                  <ChevronRightIcon className="h-4 w-4 text-gray-500" />
                )}
              </Container>
            )
          })}
        </Container>
      )}
    </React.Fragment>
  )
}
