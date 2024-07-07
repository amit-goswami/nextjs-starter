import { Panel } from '@/components/organisms/tabs/panel'
import { Tabs } from '@/components/organisms/tabs'
import { TrekPlannerDetailsComponent } from '../trek-planner-details'
import { TrekPlannerMapComponent } from '../trek-planner-map'
import { ITrekDetail } from '../../trek-planner.interface'
import { TrekPlannerInclusionsComponent } from '../trek-planner-inclusions'
import { TrekPlannerMoreDetails } from '../trek-planner-more-details'
import { TrekPlannerTrailComponent } from '../trek-planner-trail-component'
import { TrekPlannerBookNow } from '../trek-planner-booknow'
import { TrekPlannerEssentialsComponent } from '../trek-planner-essentials'
import { TrekItineraryBrief } from '../trek-itinerary-brief'

type TrekTabsProps = {
  trekDetails: ITrekDetail
}

export const TrekTabsComponent: React.FC<TrekTabsProps> = ({
  trekDetails
}: TrekTabsProps) => {
  return (
    <Tabs tabsState={trekDetails}>
      <Panel title="Trek Details">
        <TrekPlannerDetailsComponent />
      </Panel>
      <Panel title="Itinerary">
        <TrekItineraryBrief />
      </Panel>
      <Panel title="Details">
        <TrekPlannerMoreDetails />
      </Panel>
      <Panel title="Inclusions">
        <TrekPlannerInclusionsComponent />
      </Panel>
      <Panel title="Essentials">
        <TrekPlannerEssentialsComponent />
      </Panel>
      <Panel title="Trail">
        <TrekPlannerTrailComponent />
      </Panel>
      <Panel title="Book Now">
        <TrekPlannerBookNow />
      </Panel>
      <Panel title="Show Map">
        <TrekPlannerMapComponent />
      </Panel>
    </Tabs>
  )
}
