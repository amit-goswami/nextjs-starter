import NotFound from '@/app/not-found'
import { useFirebaseAuth } from '@/providers/auth-provider'

interface WithCustomerOnlyProps {}

export function withUserOnly<P extends WithCustomerOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithUserOnlyWrapper(props: P) {
    const { user } = useFirebaseAuth()
    return user ? <Component {...props} /> : <NotFound />
  }
}

export default withUserOnly
