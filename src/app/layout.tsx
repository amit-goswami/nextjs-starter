import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { TanStackQueryProvider } from '@/providers/TanStackQueryProvider'
import { ErrorBoundary } from '@/templates/error-boundary'
import { AuthContextProvider } from '@/providers/AuthProvider'
import { HeaderComponent } from '@/features/header'
import { FooterComponent } from '@/features/footer'

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
        <Toaster position="top-center" />
        <ErrorBoundary>
          <TanStackQueryProvider>
            <AuthContextProvider>
              <HeaderComponent />
              <main>{children}</main>
              <FooterComponent />
            </AuthContextProvider>
          </TanStackQueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
