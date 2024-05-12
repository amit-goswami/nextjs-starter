import React from 'react'
import useAppStore from '@/store/app.store'
import { Container } from '@/components/atoms/container'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { Text } from '@/components/atoms/text'
import { Button } from '@/components/atoms/button'

interface TabsProps<T> {
  children: React.ReactElement[]
}

const renderToggleButton = (isTabOpen: boolean) => {
  switch (isTabOpen) {
    case true:
      return <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    default:
      return <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
  }
}

export const Tabs = <T,>({ children }: TabsProps<T>) => {
  const { isTabOpen } = useAppStore()
  const { selected } = useAppStore()
  const { setSelected } = useAppStore()
  const { setIsTabOpen } = useAppStore()

  const handleChange = (index: number) => {
    setSelected(index)
    setIsTabOpen(false)
  }

  const toggleMenu = () => {
    setIsTabOpen(!isTabOpen)
  }

  return (
    <React.Fragment>
      <Container>
        <Container className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0">
          <Container className="flex h-16 items-center justify-between">
            <Container className="flex items-center">
              <Container className="hidden md:block">
                <Container className="ml-0 flex space-x-4 items-center">
                  {React.Children.map(
                    children,
                    (elem: React.ReactElement, index: number) => {
                      const className =
                        index === selected
                          ? 'bg-brand text-white rounded-full px-6 text-base font-semibold leading-7 text-gray-900 hover:text-black hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed'
                          : 'text-gray-600 hover:text-black'
                      return (
                        <Button
                          key={index}
                          className={className}
                          onClick={() => handleChange(index)}
                          btnText={elem.props.title}
                        />
                      )
                    }
                  )}
                </Container>
              </Container>
            </Container>

            <Container className="flex md:hidden">
              <Button
                onClick={() => toggleMenu()}
                className="sm:mr-2 relative z-40 inline-flex items-center justify-center rounded-md bg-brand p-2 text-gray-400 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                btnText={
                  <React.Fragment>
                    <Text className="absolute -inset-0.5">
                      <div />
                    </Text>
                    <Text className="sr-only">Open main menu</Text>
                    {renderToggleButton(isTabOpen)}
                  </React.Fragment>
                }
              />
            </Container>
          </Container>
        </Container>
      </Container>

      <Container className="md:hidden">
        <Container className="space-y-2 px-2 pb-3 pt-2 sm:px-3 flex flex-col">
          {isTabOpen && (
            <React.Fragment>
              {React.Children.map(
                children,
                (elem: React.ReactElement, index: number) => {
                  const className =
                    index === selected
                      ? 'bg-brand text-white rounded-full px-6 text-base font-semibold leading-7 text-gray-900 hover:text-black hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed'
                      : 'text-gray-600 hover:text-black w-fit px-6'
                  return (
                    <Button
                      key={index}
                      className={className}
                      onClick={() => handleChange(index)}
                      btnText={elem.props.title}
                    />
                  )
                }
              )}
            </React.Fragment>
          )}
        </Container>
      </Container>

      <Container>
        <Container className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-0">
          {React.cloneElement(children[selected])}
        </Container>
      </Container>
    </React.Fragment>
  )
}
