
import type { ReactNode } from 'react'
import { AppHeader } from './AppHeader'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="app-layout">

      <AppHeader />

      <main className="app-main">
        {children}
      </main>

      <Footer />

    </div>
  )
}