import NotFound from '@/app/not-found'
import { useFirebaseAuth } from '@/providers/AuthProvider'

interface WithUnregisteredUserOnlyProps {}

export function WithUnregisteredUserOnly<
  P extends WithUnregisteredUserOnlyProps
>(Component: React.ComponentType<P>) {
  return function WithUnregisteredUserOnlyWrapper(props: P) {
    const { user } = useFirebaseAuth()
    return !user ? <Component {...props} /> : <NotFound />
  }
}

export default WithUnregisteredUserOnly
