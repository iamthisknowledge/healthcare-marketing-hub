'use client'

import { Card } from '../ui/card'
import { BarChart } from '../charts/bar-chart'

const complianceData = {
  labels: ['Marketing Materials', 'Documentation', 'Training Records'],
  datasets: [
    {
      label: 'Compliance %',
      data: [95, 98, 92],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }
  ]
}

export function ComplianceMetrics() {
  return (
    <Card>
      <BarChart
        data={complianceData}
        title="Compliance Overview"
      />
    </Card>
  )
}