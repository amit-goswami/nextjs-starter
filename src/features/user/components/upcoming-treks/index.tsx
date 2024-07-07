import { Container } from '@/components/atoms/container'
import { IRecentTrek } from '../../user.interface'
import { UpcomingTrekDetails } from './upcoming-trek-details'
import { Text } from '@/components/atoms/text'
import { UpcomingTrekTimeline } from './upcoming-trek-timeline'

type UpcomingTreksDetailsComponentProps = {
  recentTreks: IRecentTrek | null | undefined
}

export const UpcomingTreksDetailsComponent = ({
  recentTreks
}: UpcomingTreksDetailsComponentProps) => {
  return (
    <Container>
      <Text className="text-2xl font-bold">Upcoming Trek Details</Text>
      <Container className="flex space-x-2 flex-col sm:flex-row items-start justify-center gap-4 mt-3">
        <Container className="flex items-center justify-center flex-col pb-4 w-full sm:w-1/2 space-y-4">
          <UpcomingTrekDetails recentTreks={recentTreks} />
        </Container>
        <Container className="flex flex-col items-start gap-2 w-1/2">
          <UpcomingTrekTimeline recentTreks={recentTreks} />
        </Container>
      </Container>
    </Container>
  )
}
