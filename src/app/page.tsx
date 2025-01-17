import { Suspense } from 'react'
import { LoadingSkeleton } from '@/components/ui/loading-skeleton'
import { DashboardShell } from '@/components/dashboard/shell'

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <Suspense fallback={<LoadingSkeleton />}>
        <DashboardShell />
      </Suspense>
    </main>
  )
}