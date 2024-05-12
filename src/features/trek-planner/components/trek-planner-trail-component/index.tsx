import { ITrekDetail } from '../../trek-planner.interface'

type TrekPlannerTrailComponentProps = {
  tabsState?: ITrekDetail
}

const getMushWatchFromTabsState = (tabsState: ITrekDetail | undefined) => {
  const mushWatch = tabsState?.trek?.details?.must_watch
  const mushWatchList =
    mushWatch &&
    mushWatch.split('<li>').map((item, index) => {
      if (index !== 0) {
        // Remove the closing </li> tag and trim any extra spaces
        const mushWatchText = item.replace('</li>', '').trim()
        return (
          <li key={index} className="pb-2">
            &#x2022; {mushWatchText}
          </li>
        )
      }
      return null
    })
  return {
    mushWatch: mushWatchList
  }
}

export const TrekPlannerTrailComponent = ({
  tabsState
}: TrekPlannerTrailComponentProps) => {
  const { mushWatch } = getMushWatchFromTabsState(tabsState)
  return (
    <div>
      <span className="pb-2">On the Trail- don&apos;t miss</span>
      <ul>{mushWatch}</ul>
    </div>
  )
}
