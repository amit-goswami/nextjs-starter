import { Timeline } from 'primereact/timeline'
import { Container } from '@/components/atoms/container'
import { customizedContent, customizedMarker } from '@/features/user/utils'
import { IReturnRecentTreksList } from '@/features/user/hooks/useTransformRecentTreks'

type SelectedRowTimelineProps = {
  recentTreksList: IReturnRecentTreksList[]
}

export const SelectedRowTimeline = ({
  recentTreksList
}: SelectedRowTimelineProps) => {
  return (
    <Container className="flex items-center justify-center w-full">
      {recentTreksList.length !== 0 && (
        <Timeline
          value={recentTreksList}
          align="left"
          marker={customizedMarker}
          content={customizedContent}
        />
      )}
    </Container>
  )
}
