import { Text } from '@/components/atoms/text'
import { ITrekDetail } from '../../trek-planner.interface'

type TrekItineraryBriefProps = {
  tabsState?: ITrekDetail
}

const getItenaryListFromTabsState = (tabsState: ITrekDetail | undefined) => {
  if (tabsState) {
    const itineraryBrief = tabsState?.trek?.details?.itinerary_brief
      .split('<li>')
      .filter((item) => item)
      .map((item) => {
        const day = item.split(':')[0]
        const rest = item.split(':')[1]
        return (
          <li key={day} className="py-2">
            <Text as="span" className="font-semibold">
              {day}
            </Text>
            :{rest.split('</li>')[0]}
          </li>
        )
      })
    return { itineraryBrief }
  }
  return { itineraryBrief: null }
}

export const TrekItineraryBrief = ({ tabsState }: TrekItineraryBriefProps) => {
  const { itineraryBrief } = getItenaryListFromTabsState(tabsState)

  return (
    <div>
      <ul>{itineraryBrief}</ul>
    </div>
  )
}
