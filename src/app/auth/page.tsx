'use client'

import WithUnregisteredUserOnly from '@/utils/middlewares/withUnregisteredUserOnly'
import { AuthComponent } from '@/features/auth'

function Login() {
  return <AuthComponent />
}

export default WithUnregisteredUserOnly(Login)
