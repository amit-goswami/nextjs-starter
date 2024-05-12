import React, { ReactNode } from 'react'
import { Container } from '../../../atoms/container'

interface PanelProps<T> {
  children: ReactNode
  title: string
  tabsState?: T
}

export const Panel = <T,>(props: PanelProps<T>) => {
  return (
    <Container>
      {React.cloneElement(props.children as React.ReactElement, {
        tabsState: props.tabsState
      })}
    </Container>
  )
}
