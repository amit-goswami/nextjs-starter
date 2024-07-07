import useTransformRecentTreks from '@/features/user/hooks/useTransformRecentTreks'
import { Container } from '@/components/atoms/container'
import { IRecentTrek } from '@/features/user/user.interface'
import { Timeline } from 'primereact/timeline'
import { customizedContent, customizedMarker } from '@/features/user/utils'

type UpcomingTrekDetailsProps = {
  recentTreks: IRecentTrek | null | undefined
}

export const UpcomingTrekTimeline = ({
  recentTreks
}: UpcomingTrekDetailsProps) => {
  const recentTreksList = useTransformRecentTreks(recentTreks?.pathRoutes)

  return (
    <Container className="flex items-center justify-center w-full">
      {recentTreksList.length !== 0 && (
        <Timeline
          value={recentTreksList}
          align="left"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      )}
    </Container>
  )
}
