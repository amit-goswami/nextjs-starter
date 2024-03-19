import { TrekPlannerLayoutComponent } from '@/features/trek-planner'

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
  return (
    <TrekPlannerLayoutComponent details={details} map={map}>
      {children}
    </TrekPlannerLayoutComponent>
  )
}

export default TrekPlannerLayout
