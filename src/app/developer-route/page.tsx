'use client'

import WithDeveloperAccessOnly from '@/utils/middlewares/withDeveloperAccessOnly'
import { DeveloperRouteComponent } from '@/features/developer-route'

function Developer() {
  return <DeveloperRouteComponent />
}

export default WithDeveloperAccessOnly(Developer)
