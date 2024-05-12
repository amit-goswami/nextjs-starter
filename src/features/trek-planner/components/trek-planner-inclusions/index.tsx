import { ITrekDetail } from '../../trek-planner.interface'

type TrekPlannerInclusionsProps = {
  tabsState?: ITrekDetail
}

const getInclusionFromTabsState = (tabsState: ITrekDetail | undefined) => {
  const inclusions = tabsState?.trek?.details?.inclusions
  const inclusionsList =
    inclusions &&
    inclusions.split('<li>').map((item, index) => {
      if (index !== 0) {
        // Remove the closing </li> tag and trim any extra spaces
        const inclusionText = item.replace('</li>', '').trim()
        return (
          <li key={index} className="pb-2">
            &#x2022; {inclusionText}
          </li>
        )
      }
      return null
    })
  return {
    inclusions: inclusionsList
  }
}

export const TrekPlannerInclusionsComponent = ({
  tabsState
}: TrekPlannerInclusionsProps) => {
  const { inclusions } = getInclusionFromTabsState(tabsState)
  console.log('inclusions', inclusions)
  return (
    <div>
      <ul>{inclusions}</ul>
    </div>
  )
}
