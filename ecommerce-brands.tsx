"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function EcommerceBrands() {
  const [monthlyAdSpend, setMonthlyAdSpend] = useState("")
  const [currentROAS, setCurrentROAS] = useState("")
  const [averageCAC, setAverageCAC] = useState("")
  const [conversionRate, setConversionRate] = useState("")
  const [calculatedResults, setCalculatedResults] = useState({
    roasImprovement: 0,
    cacReduction: 0,
    revenueIncrease: 0,
    costSavings: 0,
  })

  const calculateROI = () => {
    const adSpend = Number.parseFloat(monthlyAdSpend)
    const roas = Number.parseFloat(currentROAS)
    const cac = Number.parseFloat(averageCAC)
    const convRate = Number.parseFloat(conversionRate) / 100

    const newROAS = 4.2
    const newCAC = cac * 0.33
    const newConvRate = convRate * 3.12

    const roasImprovement = newROAS - roas
    const cacReduction = cac - newCAC
    const revenueIncrease = adSpend * newROAS - adSpend * roas
    const costSavings = adSpend * (1 - newCAC / cac)

    setCalculatedResults({
      roasImprovement: Number.parseFloat(roasImprovement.toFixed(2)),
      cacReduction: Number.parseFloat(cacReduction.toFixed(2)),
      revenueIncrease: Number.parseInt(revenueIncrease.toFixed(0)),
      costSavings: Number.parseInt(costSavings.toFixed(0)),
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">E-commerce Brands</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Transform Your E-commerce Copy: From 1.2 to 4.2 ROAS
            </h1>
            <p className="text-xl text-muted-foreground">
              The Only AI Copywriting System Built for $5M+ E-commerce Brands
            </p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                312% higher conversion rates
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                4.2x ROAS improvement
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                67% lower customer acquisition costs
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                85%+ copy accuracy guaranteed
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
            Stop Wasting Ad Spend on Broken AI Copy:
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "82% of your ad budget lost to poor copy",
              "$41,000+ wasted monthly on non-converting ads",
              "Endless A/B testing cycles",
              "Weak product differentiation",
              "Inconsistent brand voice",
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

      {/* Framework Breakdown */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Three Core Frameworks That Drive E-commerce Sales:
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="purchase">
                <AccordionTrigger>Purchase Acceleration Framework™</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">1. Desire Amplification Matrix</h4>
                      <ul className="ml-6 list-disc">
                        <li>Deep psychological triggers</li>
                        <li>Buying pattern recognition</li>
                        <li>Decision acceleration points</li>
                        <li>Resistance elimination</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">2. Trust Architecture</h4>
                      <ul className="ml-6 list-disc">
                        <li>Credibility building blocks</li>
                        <li>Social proof integration</li>
                        <li>Risk reversal systems</li>
                        <li>Confidence amplifiers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">3. Conversion Optimization</h4>
                      <ul className="ml-6 list-disc">
                        <li>Path optimization</li>
                        <li>Friction removal</li>
                        <li>Action triggers</li>
                        <li>Purchase momentum</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="product">
                <AccordionTrigger>Deep Product Matrix™</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">1. Product Architecture</h4>
                      <ul className="ml-6 list-disc">
                        <li>Benefit crystallization</li>
                        <li>Value stack development</li>
                        <li>USP amplification</li>
                        <li>Desire mapping</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold">2. Market Position System</h4>
                      <ul className="ml-6 list-disc">
                        <li>Competition neutralization</li>
                        <li>Differentiation triggers</li>
                        <li>Value elevation</li>
                        <li>Barrier removal</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="roas">
                <AccordionTrigger>ROAS Protection Framework™</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <h4 className="font-bold">1. Ad Performance Matrix</h4>
                    <ul className="ml-6 list-disc">
                      <li>Cost efficiency triggers</li>
                      <li>Conversion acceleration</li>
                      <li>Waste elimination</li>
                      <li>Performance protection</li>
                    </ul>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Real Brand Results:</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Beauty Brand</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>1.2 ROAS</li>
                        <li>$87 CAC</li>
                        <li>18% copy accuracy</li>
                        <li>High ad waste</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>4.2 ROAS</li>
                        <li>$29 CAC</li>
                        <li>85% copy accuracy</li>
                        <li>Minimal waste</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Supplement Brand</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>$50K monthly revenue</li>
                        <li>1.8% conversion rate</li>
                        <li>Endless testing</li>
                        <li>Poor differentiation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>$250K monthly revenue</li>
                        <li>5.6% conversion rate</li>
                        <li>Minimal testing</li>
                        <li>Strong positioning</li>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">90-Day E-commerce Transformation:</h2>
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
                    <li>Copy audit</li>
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
                    <li>ROAS improvement</li>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Built for E-commerce Performance:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Framework-driven copy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance prediction
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      A/B test automation
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
                  <CardTitle>Channel Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Platform-specific copy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Format adaptation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Voice consistency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      ROAS protection
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Scale Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Growth protection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality assurance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Cost control
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Calculate Your Current Ad Waste:</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="monthlyAdSpend" className="block text-sm font-medium text-muted-foreground">
                  Monthly ad spend ($):
                </label>
                <Input
                  id="monthlyAdSpend"
                  type="number"
                  value={monthlyAdSpend}
                  onChange={(e) => setMonthlyAdSpend(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="currentROAS" className="block text-sm font-medium text-muted-foreground">
                  Current ROAS:
                </label>
                <Input
                  id="currentROAS"
                  type="number"
                  value={currentROAS}
                  onChange={(e) => setCurrentROAS(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="averageCAC" className="block text-sm font-medium text-muted-foreground">
                  Average CAC ($):
                </label>
                <Input
                  id="averageCAC"
                  type="number"
                  value={averageCAC}
                  onChange={(e) => setAverageCAC(e.target.value)}
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
              <Button onClick={calculateROI} className="w-full">
                Calculate Potential Growth
              </Button>
            </div>
            {calculatedResults.roasImprovement > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Your Potential Growth:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>ROAS improvement:</span>
                    <span className="font-bold">{calculatedResults.roasImprovement}x</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>CAC reduction:</span>
                    <span className="font-bold">${calculatedResults.cacReduction}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Revenue increase:</span>
                    <span className="font-bold">${calculatedResults.revenueIncrease}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Cost savings:</span>
                    <span className="font-bold">${calculatedResults.costSavings}</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* E-commerce Testimonials */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">What E-commerce Brands Say:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "We cut ad spend by 43% while increasing sales. The frameworks actually work."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Beauty Brand CEO</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Customer acquisition costs dropped 67% in 30 days. Game-changing ROI."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Supplement Company CMO</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">"Finally, AI copy that converts cold traffic consistently."</p>
                    <footer className="text-sm">
                      <cite className="font-medium">Lifestyle Brand Director</cite>
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
            <h2 className="mb-8 text-3xl font-bold">The E-commerce Triple Guarantee:</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">4.2x ROAS or we fix it free</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">67% lower CAC guaranteed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">85%+ copy accuracy assured</p>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Why Brands Choose Our System:</h2>
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
                      High ad waste
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Poor conversion
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
                      Minimal waste
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      312% conversion lift
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Unlimited scaling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Custom copy
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
            <h2 className="mb-4 text-3xl font-bold">
              Limited Availability: 5 Brand Implementation Slots Open Next Week
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">Schedule Your Framework Implementation Call</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Custom ROAS plan
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
              Don't let another month of wasted ad spend drain your profits. Transform your e-commerce copy with proven
              frameworks and 4.2x ROAS potential.
            </p>
            <Button size="lg" variant="outline">
              Get Your Custom ROAS Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

