'use client'

import { motion } from 'framer-motion'
import { Card } from './card'

interface MetricCardProps {
  title: string
  value: string | number
  trend: string
  isPositive?: boolean
}

export function MetricCard({
  title,
  value,
  trend,
  isPositive = true
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="mt-2 flex items-baseline justify-between">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <span className={`text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend}
          </span>
        </div>
      </Card>
    </motion.div>
  )
}