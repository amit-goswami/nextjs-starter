'use client'

import React from 'react'
import { Loader } from '@/components/molecules/loader'
import { TrekPlannerLayoutComponent } from '@/features/trek-planner'
import { useGetTrekDetails } from '@/features/trek-planner/hooks/useGetTrekDetails'
import { useParams } from 'next/navigation'
import { useSetTrekDetails } from '@/features/trek-planner/hooks/useSetTrekDetails'

type TrekPlannerLayoutProps = {
  children: React.ReactNode
  details: React.ReactNode
  map: React.ReactNode
}

const TrekPlannerLayout: React.FC<TrekPlannerLayoutProps> = ({
  children,
  details,
  map
}: TrekPlannerLayoutProps) => {
  const { id } = useParams()
  const { data: trekDetails, isError } = useGetTrekDetails(id as string)
  useSetTrekDetails(trekDetails)

  isError && <div>Something went wrong</div>

  return (
    <React.Fragment>
      {trekDetails && (
        <TrekPlannerLayoutComponent details={details} map={map}>
          {children}
        </TrekPlannerLayoutComponent>
      )}
      {!trekDetails && <Loader />}
    </React.Fragment>
  )
}

export default TrekPlannerLayout
