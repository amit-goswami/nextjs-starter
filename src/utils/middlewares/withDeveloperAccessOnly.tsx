'use client'

import NotFound from '@/app/not-found'

interface WithDeveloperAccessOnlyProps {}

enum ACCESS_CREDENTIALS {
  PASSWORD = 'SUDO'
}

export function WithDeveloperAccessOnly<P extends WithDeveloperAccessOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithDeveloperAccessOnlyWrapper(props: P) {
    const user = prompt('Enter your password:')

    if (user !== ACCESS_CREDENTIALS.PASSWORD) {
      return <NotFound />
    }

    return <Component {...props} />
  }
}

export default WithDeveloperAccessOnly
