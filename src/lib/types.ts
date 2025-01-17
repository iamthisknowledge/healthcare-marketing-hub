export interface Metric {
    title: string
    value: string | number
    trend: string
    isPositive: boolean
  }
  
  export interface ChartData {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string
    }[]
  }