'use client'

import { MetricCard } from '../ui/metric-card'

const metrics = [
  {
    title: "Market Engagement",
    value: "1,240",
    trend: "+15%",
    isPositive: true
  },
  {
    title: "Healthcare Coverage",
    value: "32",
    trend: "+8%",
    isPositive: true
  },
  {
    title: "Professional Training",
    value: "948",
    trend: "+12%",
    isPositive: true
  }
]

export function MarketMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.title}
          {...metric}
        />
      ))}
    </div>
  )
}