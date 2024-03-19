import { TrekPlannerLayoutComponent } from '@/features/trek-planner'

type TrekPlannerLayoutProps = {
  children: React.ReactNode
  details: React.ReactNode
}

const TrekPlannerLayout: React.FC<TrekPlannerLayoutProps> = ({
  children,
  details
}: TrekPlannerLayoutProps) => {
  return (
    <TrekPlannerLayoutComponent details={details}>
      {children}
    </TrekPlannerLayoutComponent>
  )
}

export default TrekPlannerLayout
