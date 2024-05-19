'use client'

import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Container } from '@/components/atoms/container'
import { TrekPlannerImages } from './components/trek-planner-images'
import { useGetTrekDetails } from './hooks/useGetTrekDetails'
import { useParams } from 'next/navigation'
import { Loader } from '@/components/molecules/loader'
import { TrekTabsComponent } from './components/trek-tabs'

type TrekPlannerComponentProps = {}

export const TrekPlannerComponent = ({}: TrekPlannerComponentProps) => {
  const { id } = useParams()
  const { data: trekDetails } = useGetTrekDetails(id as string)

  if (!trekDetails) return <Loader />

  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-190px)] overflow-y-scroll">
        <Container className="mx-auto flex flex-wrap">
          <TrekPlannerImages trekDetails={trekDetails} />
          <Container className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <TrekTabsComponent trekDetails={trekDetails} />
          </Container>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
