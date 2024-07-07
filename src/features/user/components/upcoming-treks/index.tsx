import { Container } from '@/components/atoms/container'
import { IRecentTrek } from '../../user.interface'
import { UpcomingTrekDetails } from './upcoming-trek-details'
import { Text } from '@/components/atoms/text'

type UpcomingTreksDetailsComponentProps = {
  recentTreks: IRecentTrek | null | undefined
}

export const UpcomingTreksDetailsComponent = ({
  recentTreks
}: UpcomingTreksDetailsComponentProps) => {
  return (
    <Container>
      <Text className="text-2xl font-bold">Upcoming Trek Details</Text>
      <Container className="mt-3">
        <UpcomingTrekDetails recentTreks={recentTreks} />
        <>timeline</>
      </Container>
    </Container>
  )
}
