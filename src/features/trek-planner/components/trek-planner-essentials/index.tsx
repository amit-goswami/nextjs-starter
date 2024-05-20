import { ITrekDetail } from '../../trek-planner.interface'

type TrekPlannerEssentialsProps = {
  tabsState?: ITrekDetail
}

const getEssentialsFromTabsState = (tabsState: ITrekDetail | undefined) => {
  const essentials = tabsState?.trek?.details?.essentials
  const essentialsList =
    essentials &&
    essentials.split('<li>').map((item, index) => {
      if (index !== 0) {
        // Remove the closing </li> tag and trim any extra spaces
        const essentialText = item.replace('</li>', '').trim()
        return (
          <li key={index} className="pb-2">
            &#x2022; {essentialText}
          </li>
        )
      }
      return null
    })
  return {
    essentials: essentialsList
  }
}

export const TrekPlannerEssentialsComponent = ({
  tabsState
}: TrekPlannerEssentialsProps) => {
  const { essentials } = getEssentialsFromTabsState(tabsState)

  return (
    <div className="h-[calc(100vh-320px)] overflow-y-scroll">
      <ul>{essentials}</ul>
    </div>
  )
}
