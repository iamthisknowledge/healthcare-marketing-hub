// src/components/dashboard/shell.tsx
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  subtitle: string;
}

interface ContentChallengeProps {
  area: string;
  problem: string;
  impact: string;
  bottleneck: string;
}

interface ContentSolutionProps {
  area: string;
  solution: string;
  impact: string;
  benefit: string;
}

interface InnovationMetricProps {
  title: string;
  value: string;
  subtitle: string;
}

interface TechHighlightProps {
  title: string;
  points: string[];
}

function MetricCard({ title, value, trend, subtitle }: MetricCardProps) {
  return (
    <Card>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <span className="text-sm font-medium text-emerald-600">
          {trend}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
    </Card>
  );
}

function ContentChallenge({ area, problem, impact, bottleneck }: ContentChallengeProps) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="font-semibold text-gray-900">{area}</h3>
      <div className="mt-2 space-y-1">
        <p className="text-sm text-red-600">⚠ {problem}</p>
        <p className="text-sm text-gray-600">{impact}</p>
        <p className="text-sm text-gray-500 italic">{bottleneck}</p>
      </div>
    </div>
  );
}

function ContentSolution({ area, solution, impact, benefit }: ContentSolutionProps) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="font-semibold text-gray-900">{area}</h3>
      <div className="mt-2 space-y-1">
        <p className="text-sm text-emerald-600">✓ {solution}</p>
        <p className="text-sm text-gray-600">{impact}</p>
        <p className="text-sm font-medium text-emerald-600">{benefit}</p>
      </div>
    </div>
  );
}

function InnovationMetric({ title, value, subtitle }: InnovationMetricProps) {
  return (
    <div className="text-center">
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  );
}

function TechHighlight({ title, points }: TechHighlightProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-emerald-600">•</span>
            <span className="text-sm text-gray-600">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardShell() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Interview-focused Value Proposition */}
      <header className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-2 text-emerald-600 mb-2">
          <span className="text-sm font-medium px-2 py-1 bg-emerald-50 rounded">Web Content Management</span>
          <span className="text-sm font-medium px-2 py-1 bg-emerald-50 rounded">Brand Consistency</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Content Management & Brand Performance Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          Streamlining content workflows while maintaining brand excellence
        </p>
      </header>

      {/* Key Content Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Content Efficiency"
          value="85%"
          trend="+23%"
          subtitle="Faster content deployment"
        />
        <MetricCard
          title="Brand Compliance"
          value="100%"
          trend="+15%"
          subtitle="Across all digital channels"
        />
        <MetricCard
          title="Team Productivity"
          value="47%"
          trend="+32%"
          subtitle="Workflow improvement"
        />
      </div>

      {/* Content Workflow Transformation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-50 border border-red-100">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-red-600 font-semibold">TRADITIONAL PROCESS</span>
            <span className="text-sm text-gray-600">Content Management Challenges</span>
          </div>
          <div className="space-y-4">
            <ContentChallenge
              area="Content Updates"
              problem="4-5 days average deployment time"
              impact="Delayed market response"
              bottleneck="Multiple approval layers"
            />
            <ContentChallenge
              area="Brand Guidelines"
              problem="Manual compliance checking"
              impact="Inconsistent brand presence"
              bottleneck="Time-consuming reviews"
            />
            <ContentChallenge
              area="Performance Tracking"
              problem="Weekly manual reports"
              impact="Delayed optimization"
              bottleneck="Data scattered across platforms"
            />
          </div>
        </Card>

        <Card className="bg-emerald-50 border border-emerald-100">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-emerald-600 font-semibold">OPTIMIZED SOLUTION</span>
            <span className="text-sm text-gray-600">Automated Content Workflow</span>
          </div>
          <div className="space-y-4">
            <ContentSolution
              area="Rapid Deployment"
              solution="Same-day content updates"
              impact="Immediate market response"
              benefit="75% faster time-to-market"
            />
            <ContentSolution
              area="Automated Compliance"
              solution="Real-time brand checking"
              impact="100% brand consistency"
              benefit="Zero guideline violations"
            />
            <ContentSolution
              area="Live Analytics"
              solution="Automated performance tracking"
              impact="Real-time optimization"
              benefit="32% engagement increase"
            />
          </div>
        </Card>
      </div>

      {/* Innovation Showcase */}
      <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Content Innovation Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InnovationMetric
            title="Automated Workflows"
            value="47 hours"
            subtitle="Monthly time saved"
          />
          <InnovationMetric
            title="Content Velocity"
            value="385%"
            subtitle="Deployment speed increase"
          />
          <InnovationMetric
            title="Quality Assurance"
            value="100%"
            subtitle="Brand compliance rate"
          />
        </div>
      </Card>

      {/* Implementation Success */}
      <Card className="bg-white">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Technical Implementation Excellence
        </h2>
        <div className="space-y-6">
          <TechHighlight
            title="Modern Content Architecture"
            points={[
              "Headless CMS integration",
              "Automated deployment pipeline",
              "Real-time content updates",
              "Version control system"
            ]}
          />
          <TechHighlight
            title="Brand Consistency Tools"
            points={[
              "Automated style guide checking",
              "Asset management system",
              "Digital asset optimization",
              "Multi-channel distribution"
            ]}
          />
          <TechHighlight
            title="Performance Analytics"
            points={[
              "Real-time engagement tracking",
              "Automated reporting system",
              "A/B testing framework",
              "ROI calculation automation"
            ]}
          />
        </div>
      </Card>
    </div>
  );
}