"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function DirectResponseMarketers() {
  const [monthlyRevenue, setMonthlyRevenue] = useState("")
  const [conversionRate, setConversionRate] = useState("")
  const [averageSaleValue, setAverageSaleValue] = useState("")
  const [sequenceCompletion, setSequenceCompletion] = useState("")
  const [calculatedResults, setCalculatedResults] = useState({
    revenueIncrease: 0,
    conversionLift: 0,
    cacReduction: 0,
    completionImprovement: 0,
  })

  const calculateROI = () => {
    const revenue = Number.parseFloat(monthlyRevenue)
    const conversion = Number.parseFloat(conversionRate)
    const saleValue = Number.parseFloat(averageSaleValue)
    const completion = Number.parseFloat(sequenceCompletion)

    const newRevenue = revenue * 4.12
    const newConversion = conversion * 3.12
    const newCompletion = Math.min(completion * 4, 100)

    setCalculatedResults({
      revenueIncrease: Math.round(newRevenue - revenue),
      conversionLift: Math.round((newConversion - conversion) * 100) / 100,
      cacReduction: 67,
      completionImprovement: Math.round(newCompletion - completion),
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">Direct Response Marketers</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Transform Your Direct Response Copy: From 1.8% to 5.6% Conversion Rate
            </h1>
            <p className="text-xl text-muted-foreground">The Only AI System Built for $3M+ Direct Response Marketers</p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                312% higher conversion rates
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                89% sequence completion
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                67% lower acquisition costs
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                85%+ framework accuracy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Stop Losing Sales to Broken AI Copy:</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "82% of potential sales lost",
              "$127,000+ monthly in missed revenue",
              "Weak psychological triggers",
              "Broken sales sequences",
              "Poor emotional engagement",
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

      {/* Framework Mastery */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Three Core Frameworks That Drive Direct Response:
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="direct-response">
                <AccordionTrigger>Direct Response Sequencing Framework™</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">1. Response Matrix</h4>
                      <ul className="ml-6 list-disc">
                        <li>Psychological trigger sequencing</li>
                        <li>Emotional engagement mapping</li>
                        <li>Decision acceleration points</li>
                        <li>Action momentum builders</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">2. Sequence Protection</h4>
                      <ul className="ml-6 list-disc">
                        <li>Framework compliance</li>
                        <li>Performance tracking</li>
                        <li>Adjustment triggers</li>
                        <li>Optimization paths</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">3. Scale Architecture</h4>
                      <ul className="ml-6 list-disc">
                        <li>Response prediction</li>
                        <li>Quality assurance</li>
                        <li>Cost control</li>
                        <li>Growth acceleration</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="psychological-trigger">
                <AccordionTrigger>Psychological Trigger Matrix™</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">1. Deep Psychology Architecture</h4>
                      <ul className="ml-6 list-disc">
                        <li>Core desire mapping</li>
                        <li>Emotional trigger sequencing</li>
                        <li>Decision pattern recognition</li>
                        <li>Response acceleration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">2. Engagement Framework</h4>
                      <ul className="ml-6 list-disc">
                        <li>Emotional connection points</li>
                        <li>Trust acceleration</li>
                        <li>Value amplification</li>
                        <li>Action momentum</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="high-ticket">
                <AccordionTrigger>High-Ticket Sales Framework™</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">1. Value Architecture</h4>
                      <ul className="ml-6 list-disc">
                        <li>Premium positioning</li>
                        <li>Authority establishment</li>
                        <li>Trust acceleration</li>
                        <li>Decision facilitation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">2. Sales Matrix</h4>
                      <ul className="ml-6 list-disc">
                        <li>Deep psychological triggers</li>
                        <li>Objection neutralization</li>
                        <li>Value stack optimization</li>
                        <li>Close acceleration</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Transformation Metrics */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Real Marketing Results:</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Info Product Company</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>$83K monthly revenue</li>
                        <li>1.8% conversion rate</li>
                        <li>$247 acquisition cost</li>
                        <li>22% sequence completion</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>$412K monthly revenue</li>
                        <li>5.6% conversion rate</li>
                        <li>$82 acquisition cost</li>
                        <li>89% sequence completion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Coaching Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>Weak emotional engagement</li>
                        <li>Low response rates</li>
                        <li>Poor sequence completion</li>
                        <li>High acquisition costs</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>89% emotional engagement</li>
                        <li>312% higher response</li>
                        <li>94% sequence completion</li>
                        <li>67% lower CAC</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Protocol */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">90-Day Sales Transformation:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </span>
                    <span className="ml-4">Foundation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Week 1-2</p>
                  <ul className="ml-6 list-disc">
                    <li>Framework integration</li>
                    <li>Sequence audit</li>
                    <li>Performance baseline</li>
                    <li>System calibration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </span>
                    <span className="ml-4">Optimization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Week 3-4</p>
                  <ul className="ml-6 list-disc">
                    <li>Conversion improvement</li>
                    <li>CAC reduction</li>
                    <li>Framework refinement</li>
                    <li>Performance tracking</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    <span className="ml-4">Scale</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Week 5-6</p>
                  <ul className="ml-6 list-disc">
                    <li>Growth acceleration</li>
                    <li>Framework protection</li>
                    <li>Quality assurance</li>
                    <li>Revenue optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Technology */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Built for Direct Response Performance:
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Response Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Framework-driven copy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Emotional engagement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Sequence optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Scale protection
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Psychological triggers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Value stack development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Objection handling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Close acceleration
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Scale Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Growth assurance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality control
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Cost optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Revenue acceleration
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Calculate Your Revenue Potential:</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-muted-foreground">
                  Current monthly revenue:
                </label>
                <Input
                  id="monthlyRevenue"
                  type="number"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="conversionRate" className="block text-sm font-medium text-muted-foreground">
                  Conversion rate (%):
                </label>
                <Input
                  id="conversionRate"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="averageSaleValue" className="block text-sm font-medium text-muted-foreground">
                  Average sale value:
                </label>
                <Input
                  id="averageSaleValue"
                  type="number"
                  value={averageSaleValue}
                  onChange={(e) => setAverageSaleValue(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="sequenceCompletion" className="block text-sm font-medium text-muted-foreground">
                  Sequence completion (%):
                </label>
                <Input
                  id="sequenceCompletion"
                  type="number"
                  value={sequenceCompletion}
                  onChange={(e) => setSequenceCompletion(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <Button onClick={calculateROI} className="w-full">
                Calculate Growth Projection
              </Button>
            </div>
            {calculatedResults.revenueIncrease > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Your Growth Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Revenue increase:</span>
                      <span className="font-bold">${calculatedResults.revenueIncrease.toLocaleString()}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Conversion lift:</span>
                      <span className="font-bold">{calculatedResults.conversionLift}%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>CAC reduction:</span>
                      <span className="font-bold">{calculatedResults.cacReduction}%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Completion improvement:</span>
                      <span className="font-bold">{calculatedResults.completionImprovement}%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Marketer Testimonials */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">What Marketers Say:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "From $83K to $412K monthly using the same traffic. The frameworks actually work."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Info Product CEO</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Finally broke the 7-figure monthly barrier. Game-changing system."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Coaching Program Founder</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Our follow-up sequences convert like they used to. Pure gold."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Service Business Owner</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">The Direct Response Triple Guarantee:</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">312% higher conversion rates</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">89% sequence completion</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">85%+ framework accuracy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Why Marketers Choose Our System:</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Commercial AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      18-25% accuracy
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Weak psychology
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Broken sequences
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Limited scaling
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Generic copy
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Our System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      85%+ accuracy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Deep psychology
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Perfect sequences
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Unlimited scaling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Converting copy
                    </li>
                  </ul>
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
            <h2 className="mb-4 text-3xl font-bold">Limited Availability: 3 Implementation Slots Open Next Week</h2>
            <p className="mb-8 text-xl text-muted-foreground">Schedule Your Framework Implementation Call</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Custom sequence plan
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Growth projection
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Copy audit
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Priority access
              </li>
            </ul>
            <Button size="lg">
              Schedule Your Framework Implementation Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency Close */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-bold mb-8">
              Don't let another month of missed sales drain your potential. Transform your direct response copy with
              proven frameworks and 312% higher conversions.
            </p>
            <Button size="lg" variant="outline">
              Get Your Custom Sequence Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

