import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AgencyPartner() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Agency Partner Portal</h1>
      <h2 className="text-2xl mb-8">Compete with Big Agency Quality and Output</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Fortune 500 Case Studies Library</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Tech Giant Content Scaling</li>
            <li>Global FMCG Brand Consistency</li>
            <li>Financial Services Compliance Success</li>
          </ul>
          <Button className="mt-4">Access Case Studies</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">White-label Presentation Templates</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-Powered Content Strategy Deck</li>
            <li>Enterprise-Grade Quality Showcase</li>
            <li>Speed and Efficiency Comparison</li>
          </ul>
          <Button className="mt-4">Download Templates</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Implementation Playbook</h3>
          <p className="mb-4">Step-by-step guide to integrate our AI system into your agency workflow:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Initial Setup and Configuration</li>
            <li>Team Training and Onboarding</li>
            <li>Client Project Integration</li>
            <li>Quality Assurance and Optimization</li>
          </ol>
          <Button className="mt-4">Access Playbook</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Expert Oversight Access System</h3>
          <p className="mb-4">Connect with our team of industry experts for guidance and quality assurance:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>On-demand expert consultations</li>
            <li>Project review and feedback</li>
            <li>Industry-specific best practices</li>
          </ul>
          <Button className="mt-4">Schedule Expert Session</Button>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Client Pitch Kit</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Competitive Analysis Template",
            "Quality Comparison Framework",
            "Speed Improvement Calculator",
            "White-label Case Studies",
          ].map((item) => (
            <div key={item} className="border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{item}</h4>
              <p>Equip your team with powerful tools to showcase our AI advantage.</p>
              <Button className="mt-2" variant="outline">
                Access Tool
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Elevate Your Agency?</h3>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Demo</Link>
        </Button>
      </div>
    </div>
  )
}

