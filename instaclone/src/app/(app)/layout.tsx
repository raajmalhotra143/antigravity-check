import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home — InstaClone',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
