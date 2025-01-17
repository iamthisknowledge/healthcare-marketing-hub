import { Card } from '@/components/ui/card';
export function DashboardShell() {
    return (
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Value Proposition Header */}
        <header className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-2 text-emerald-600 mb-2">
            <span className="text-sm font-medium px-2 py-1 bg-emerald-50 rounded">Portfolio Demo</span>
            <span className="text-sm font-medium px-2 py-1 bg-emerald-50 rounded">Marketing Analytics</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Marketing Manager&apos;s Time-Saving Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Transform your marketing workflow from manual to automated
          </p>
        </header>
  
        {/* Before vs After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gray-50 border border-red-100">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-red-600 font-semibold">BEFORE</span>
              <span className="text-sm text-gray-600">Traditional Marketing Workflow</span>
            </div>
            <div className="space-y-4">
              <PainPoint
                task="Weekly Report Creation"
                time="5 hours"
                pain="Manual data collection from multiple sources"
                impact="Delayed decision making"
              />
              <PainPoint
                task="Performance Analysis"
                time="3 hours"
                pain="Spreadsheet-based calculations"
                impact="Outdated insights"
              />
              <PainPoint
                task="Content Performance"
                time="2.5 hours"
                pain="Manual tracking across channels"
                impact="Reactive strategy adjustments"
              />
            </div>
          </Card>
  
          <Card className="bg-emerald-50 border border-emerald-100">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-emerald-600 font-semibold">AFTER</span>
              <span className="text-sm text-gray-600">With Automated Dashboard</span>
            </div>
            <div className="space-y-4">
              <Solution
                task="Real-Time Reporting"
                benefit="Automated data aggregation"
                impact="Instant access to insights"
                timeSaved="5 hours/week"
              />
              <Solution
                task="Live Performance Metrics"
                benefit="Automated calculations & visualization"
                impact="Data-driven decisions"
                timeSaved="3 hours/week"
              />
              <Solution
                task="Content Analytics"
                benefit="Automated cross-channel tracking"
                impact="Proactive optimization"
                timeSaved="2.5 hours/week"
              />
            </div>
          </Card>
        </div>
  
        {/* Total Impact Summary */}
        <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Weekly Impact for Marketing Managers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImpactMetric
              title="Time Saved"
              value="10.5 Hours"
              subtitle="Per week through automation"
            />
            <ImpactMetric
              title="Faster Decisions"
              value="Real-time"
              subtitle="vs. weekly reporting cycles"
            />
            <ImpactMetric
              title="ROI Improvement"
              value="+28%"
              subtitle="Through data-driven optimization"
            />
          </div>
        </Card>
      </div>
    )
  }
  
  // New Components
  interface PainPointProps {
    task: string;
    time: string;
    pain: string;
    impact: string;
  }
  
  function PainPoint({ task, time, pain, impact }: PainPointProps) {
    return (
      <div className="p-4 bg-white rounded-lg">
        <h3 className="font-semibold text-gray-900">{task}</h3>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-red-600 font-medium">⏱ {time}</p>
          <p className="text-sm text-gray-600">{pain}</p>
          <p className="text-sm text-gray-500 italic">{impact}</p>
        </div>
      </div>
    )
  }
  
  interface SolutionProps {
    task: string;
    benefit: string;
    impact: string;
    timeSaved: string;
  }
  
  function Solution({ task, benefit, impact, timeSaved }: SolutionProps) {
    return (
      <div className="p-4 bg-white rounded-lg">
        <h3 className="font-semibold text-gray-900">{task}</h3>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-emerald-600 font-medium">✓ {benefit}</p>
          <p className="text-sm text-gray-600">{impact}</p>
          <p className="text-sm font-medium text-emerald-600">Saves {timeSaved}</p>
        </div>
      </div>
    )
  }
  
  interface ImpactMetricProps {
    title: string;
    value: string;
    subtitle: string;
  }
  
  function ImpactMetric({ title, value, subtitle }: ImpactMetricProps) {
    return (
      <div className="text-center">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>
    )
  }