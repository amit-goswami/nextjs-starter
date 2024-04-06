'use client'

import { Panel } from '@/components/organisms/tabs/panel'
import { Tabs } from '@/components/organisms/tabs'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Container } from '@/components/atoms/container'

type TrekPlannerLayoutProps = {
  children: React.ReactNode
  details: React.ReactNode
  map: React.ReactNode
}

export const TrekPlannerLayoutComponent = ({
  children,
  details,
  map
}: TrekPlannerLayoutProps) => {
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-190px)] overflow-y-scroll">
        <Container className="mx-auto flex flex-wrap">
          {children}
          <Container className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <Tabs>
              <Panel title="Trek Details">{details}</Panel>
              <Panel title="Show Map">{map}</Panel>
            </Tabs>
          </Container>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
