import { Panel } from '@/components/organisms/tabs/panel'
import { Tabs } from '@/components/organisms/tabs'
import { TrekPlannerDetailsComponent } from '../trek-planner-details'
import { TrekPlannerMapComponent } from '../trek-planner-map'
import { ITrekDetail } from '../../trek-planner.interface'

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
      <Panel title="Show Map">
        <TrekPlannerMapComponent />
      </Panel>
    </Tabs>
  )
}
