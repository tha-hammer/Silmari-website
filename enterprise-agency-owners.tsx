"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function EnterpriseAgencyOwners() {
  const [monthlyRevisionHours, setMonthlyRevisionHours] = useState("")
  const [averageHourlyCost, setAverageHourlyCost] = useState("")
  const [currentAIAccuracyRate, setCurrentAIAccuracyRate] = useState("")
  const [monthlyContentVolume, setMonthlyContentVolume] = useState("")
  const [calculatedResults, setCalculatedResults] = useState({
    revisionCostReduction: 0,
    teamEfficiencyGain: 0,
    revenueOpportunity: 0,
  })

  const calculateROI = () => {
    const revisionHours = Number.parseFloat(monthlyRevisionHours)
    const hourlyCost = Number.parseFloat(averageHourlyCost)
    const accuracyRate = Number.parseFloat(currentAIAccuracyRate) / 100
    const contentVolume = Number.parseFloat(monthlyContentVolume)

    const currentCost = revisionHours * hourlyCost
    const improvedAccuracyRate = 0.85 // 85% accuracy guaranteed
    const improvedRevisionHours = (revisionHours * (1 - improvedAccuracyRate)) / (1 - accuracyRate)
    const improvedCost = improvedRevisionHours * hourlyCost

    const revisionCostReduction = currentCost - improvedCost
    const teamEfficiencyGain = ((revisionHours - improvedRevisionHours) / revisionHours) * 100
    const revenueOpportunity = contentVolume * 3.12 // 312% higher conversion rates

    setCalculatedResults({
      revisionCostReduction: Math.round(revisionCostReduction),
      teamEfficiencyGain: Math.round(teamEfficiencyGain),
      revenueOpportunity: Math.round(revenueOpportunity),
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">Enterprise Agency Owners</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Transform Your Agency's AI Copy: 85%+ Accuracy Guaranteed
            </h1>
            <p className="text-xl text-muted-foreground">Finally: AI Copywriting Built for Enterprise Agencies</p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                85-88.3% accuracy rate
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                73% fewer revision cycles
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                312% higher conversion rates
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Framework-driven results
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Are You Tired of:</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Wasting $12,000+ monthly fixing broken AI copy",
              "Endless revision cycles killing team productivity",
              "Inconsistent results damaging client trust",
              "Commercial AI tools hitting only 18-25% accuracy",
              "Generic copy that misses market positioning",
            ].map((pain, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    <p>{pain}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Introducing the Enterprise AI Copywriting System Built by a $100M+ Copywriter
            </h2>
            <p className="text-xl text-muted-foreground">
              We completely rebuilt AI copywriting from scratch - not tweaked, not modified, rebuilt - specifically for
              agencies scaling past $2M. The result? The only AI system that consistently delivers 85%+ accuracy through
              proven frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Breakdown */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Three Core Frameworks That Drive Results:</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="market">
                <AccordionTrigger>1. Market Mastery Framework</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Deep competitive positioning</li>
                    <li>Prospect pain point mapping</li>
                    <li>Response trigger hierarchy</li>
                    <li>Market maturity indicators</li>
                    <li>Value stack optimization</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="influence">
                <AccordionTrigger>2. Deep Influence Matrix</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Primary desire mapping</li>
                    <li>Secondary motivation chains</li>
                    <li>Resistance pattern analysis</li>
                    <li>Decision acceleration points</li>
                    <li>Psychological trigger integration</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="power">
                <AccordionTrigger>3. Power Dynamics Architecture</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Authority establishment protocols</li>
                    <li>Trust acceleration systems</li>
                    <li>Credibility amplification</li>
                    <li>Social proof integration</li>
                    <li>Market force dominance</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Real Agency Transformations:</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Case Study #1: $3.2M Agency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>$15,000 monthly revision costs</li>
                        <li>12-15 revision cycles per piece</li>
                        <li>3 full-time copy editors</li>
                        <li>Constant client complaints</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>Zero revision team needed</li>
                        <li>Single revision cycle</li>
                        <li>$4.2M new business generated</li>
                        <li>94% client satisfaction</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Case Study #2: $5M Agency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>22% copy accuracy</li>
                        <li>$27,000 monthly waste</li>
                        <li>Low client retention</li>
                        <li>Limited scalability</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>85.7% copy accuracy</li>
                        <li>67% cost reduction</li>
                        <li>89% client retention</li>
                        <li>312% revenue increase</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Enterprise Implementation Protocol:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </span>
                    <span className="ml-4">Framework Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Market force analysis</p>
                  <p>• Competition mapping</p>
                  <p>• Response architecture setup</p>
                  <p>• Performance baseline establishment</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </span>
                    <span className="ml-4">System Calibration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Framework alignment</p>
                  <p>• Industry optimization</p>
                  <p>• Team training</p>
                  <p>• Quality assurance setup</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    <span className="ml-4">Performance Optimization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Response tracking</p>
                  <p>• Framework compliance</p>
                  <p>• Adjustment protocols</p>
                  <p>• Scale protection</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Why Our System Is Different:</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Built from scratch by a $100M+ copywriter",
                "Framework-first architecture (not bolt-on)",
                "Industry-specific optimization",
                "Enterprise-grade quality control",
                "Proven implementation protocol",
              ].map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <p>{value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Calculate Your Agency's Current Waste:
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="monthlyRevisionHours" className="block text-sm font-medium text-muted-foreground">
                  Monthly revision hours:
                </label>
                <Input
                  id="monthlyRevisionHours"
                  type="number"
                  value={monthlyRevisionHours}
                  onChange={(e) => setMonthlyRevisionHours(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="averageHourlyCost" className="block text-sm font-medium text-muted-foreground">
                  Average hourly cost:
                </label>
                <Input
                  id="averageHourlyCost"
                  type="number"
                  value={averageHourlyCost}
                  onChange={(e) => setAverageHourlyCost(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="currentAIAccuracyRate" className="block text-sm font-medium text-muted-foreground">
                  Current AI accuracy rate (%):
                </label>
                <Input
                  id="currentAIAccuracyRate"
                  type="number"
                  value={currentAIAccuracyRate}
                  onChange={(e) => setCurrentAIAccuracyRate(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="monthlyContentVolume" className="block text-sm font-medium text-muted-foreground">
                  Monthly content volume:
                </label>
                <Input
                  id="monthlyContentVolume"
                  type="number"
                  value={monthlyContentVolume}
                  onChange={(e) => setMonthlyContentVolume(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <Button onClick={calculateROI} className="w-full">
                Calculate ROI
              </Button>
            </div>
            {calculatedResults.revisionCostReduction > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Your Potential Savings:</h3>
                <p>Revision cost reduction: ${calculatedResults.revisionCostReduction}</p>
                <p>Team efficiency gain: {calculatedResults.teamEfficiencyGain}%</p>
                <p>Revenue opportunity: ${calculatedResults.revenueOpportunity}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">What Agency Leaders Say:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "We eliminated our revision team completely. The system pays for itself every 3 days."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">John M., $4M Agency</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Our client satisfaction scores jumped 31% in the first month."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Sarah L., $2.8M Agency</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">"We're scaling 3x faster with half the headaches."</p>
                    <footer className="text-sm">
                      <cite className="font-medium">Mike R., $3.5M Agency</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Our Enterprise Guarantee:</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">85%+ accuracy rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">73% fewer revisions</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">94% client satisfaction</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">Framework compliance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Limited Availability: Only 5 Enterprise Implementation Slots Opening Next Week
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">Schedule Your Framework Implementation Call</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Custom implementation plan
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                ROI projection
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Framework alignment audit
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Priority access guarantee
              </li>
            </ul>
            <Button size="lg">
              Schedule Implementation Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency Close */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-bold">
              Don't let another month of broken AI copy waste $12,000+ in revision costs. Transform your agency's copy
              production with proven frameworks and 85%+ accuracy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

