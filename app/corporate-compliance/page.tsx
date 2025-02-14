import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function CorporateCompliance() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Corporate Compliance Solution</h1>
      <h2 className="text-2xl mb-8">99.9% Compliance Rates Across All Markets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Compliance Framework Overview</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered content analysis</li>
            <li>Real-time expert oversight</li>
            <li>Multi-market regulation tracking</li>
            <li>Automated compliance reporting</li>
          </ul>
          <Button className="mt-4">Download Framework Details</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Compliance Rate Tracking</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Overall Compliance</span>
                <span>99.9%</span>
              </div>
              <Progress value={99.9} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Brand Voice Consistency</span>
                <span>98.5%</span>
              </div>
              <Progress value={98.5} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Regulatory Adherence</span>
                <span>100%</span>
              </div>
              <Progress value={100} className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Implementation Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Step 1: Compliance Audit",
              items: ["Document current compliance processes", "Identify risk areas", "Map brand voice requirements"],
            },
            {
              title: "Step 2: System Setup",
              items: [
                "Configure compliance parameters",
                "Set up expert oversight workflow",
                "Implement tracking systems",
              ],
            },
            {
              title: "Step 3: Training",
              items: ["Compliance team training", "Content team onboarding", "Monitoring system training"],
            },
          ].map((step) => (
            <div key={step.title} className="border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <ul className="list-disc list-inside space-y-1">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Success Metrics</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Track 99.9% compliance rate across all content</li>
          <li>Measure and improve brand voice consistency</li>
          <li>Document and analyze risk reduction over time</li>
          <li>Compare performance to regulated industry benchmarks</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Safeguard Your Brand?</h3>
        <Button size="lg">Schedule a Compliance Consultation</Button>
      </div>
    </div>
  )
}

