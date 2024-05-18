'use client'

import withUserOnly from '@/utils/middlewares/withUserOnly'
import { UserLayoutComponent } from '@/features/user'

const UserProfile = () => {
  return <UserLayoutComponent />
}

export default withUserOnly(UserProfile)
