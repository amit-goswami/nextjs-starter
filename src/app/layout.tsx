import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Provider } from '@/providers'
import { ErrorBoundary } from '@/templates/error-boundary'
import { HeaderComponent } from '@/features/shared/header'
import { FooterComponent } from '@/features/shared/footer'
import { ProtectedBoundary } from '@/templates/protected-boundary'
import { BreadCrumb } from '@/features/shared/components/BreadCrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baha',
  description: 'Your travel companion'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Toaster position="top-center" />
          <ErrorBoundary>
            <Provider>
              <HeaderComponent />
              <BreadCrumb />
              <ProtectedBoundary {...{ children }} />
              <FooterComponent />
            </Provider>
          </ErrorBoundary>
        </main>
      </body>
    </html>
  )
}
