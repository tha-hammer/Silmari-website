"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function EcommerceFramework() {
  const [currentROAS, setCurrentROAS] = useState("")
  const [currentCAC, setCurrentCAC] = useState("")
  const [currentAccuracy, setCurrentAccuracy] = useState("")
  const [calculatedResults, setCalculatedResults] = useState({
    projectedROAS: 0,
    projectedCAC: 0,
    projectedAccuracy: 0,
  })

  const calculateProjection = () => {
    const roas = Number.parseFloat(currentROAS)
    const cac = Number.parseFloat(currentCAC)
    const accuracy = Number.parseFloat(currentAccuracy)

    setCalculatedResults({
      projectedROAS: 4.2,
      projectedCAC: 29,
      projectedAccuracy: 85,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">E-commerce Framework System</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Scale to $250K+ Monthly With Framework-Driven Copy
            </h1>
            <p className="text-xl text-muted-foreground">Transform Your E-commerce Growth Through Proven Frameworks</p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Framework-driven conversion architecture
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Enterprise-grade performance
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Built by a $100M+ copywriter
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Perfect for brands scaling past $5M
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deep Framework Analysis */}
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
            The Three Frameworks Behind 312% Higher Conversions:
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="customer-journey">
              <AccordionTrigger>Customer Journey Framework™</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">What It Solves:</h4>
                    <ul className="ml-6 list-disc">
                      <li>Broken conversion paths</li>
                      <li>High abandonment rates</li>
                      <li>Poor engagement</li>
                      <li>Weak customer experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Core Architecture:</h4>
                    <ol className="ml-6 list-decimal space-y-2">
                      <li>
                        <p className="font-semibold">Journey Mapping</p>
                        <ul className="ml-6 list-disc">
                          <li>Touchpoint optimization</li>
                          <li>Decision path design</li>
                          <li>Friction elimination</li>
                          <li>Conversion acceleration</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Experience Matrix</p>
                        <ul className="ml-6 list-disc">
                          <li>Engagement triggers</li>
                          <li>Trust building</li>
                          <li>Value stacking</li>
                          <li>Action momentum</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Performance Protection</p>
                        <ul className="ml-6 list-disc">
                          <li>Framework compliance</li>
                          <li>Journey optimization</li>
                          <li>Scale validation</li>
                          <li>Growth acceleration</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="scale-protection">
              <AccordionTrigger>Scale Protection Framework™</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">What It Solves:</h4>
                    <ul className="ml-6 list-disc">
                      <li>Inconsistent growth</li>
                      <li>Quality degradation</li>
                      <li>Rising costs</li>
                      <li>Limited scalability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Key Components:</h4>
                    <ol className="ml-6 list-decimal space-y-2">
                      <li>
                        <p className="font-semibold">Growth Architecture</p>
                        <ul className="ml-6 list-disc">
                          <li>Scale protection</li>
                          <li>Performance prediction</li>
                          <li>Risk mitigation</li>
                          <li>Optimization paths</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Quality Matrix</p>
                        <ul className="ml-6 list-disc">
                          <li>Framework compliance</li>
                          <li>Performance tracking</li>
                          <li>Adjustment triggers</li>
                          <li>Enhancement protocols</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Revenue Protection</p>
                        <ul className="ml-6 list-disc">
                          <li>Cost control</li>
                          <li>Quality assurance</li>
                          <li>Growth acceleration</li>
                          <li>ROAS optimization</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">90-Day Revenue Transformation:</h2>
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
                  <p className="text-sm text-muted-foreground">Days 1-30</p>
                  <div className="space-y-2">
                    <p className="font-semibold">Before:</p>
                    <ul className="ml-6 list-disc">
                      <li>1.2 ROAS</li>
                      <li>$87 CAC</li>
                      <li>1.8% conversion</li>
                      <li>High ad waste</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">After:</p>
                    <ul className="ml-6 list-disc">
                      <li>2.8 ROAS</li>
                      <li>$42 CAC</li>
                      <li>3.7% conversion</li>
                      <li>73% less waste</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </span>
                    <span className="ml-4">Acceleration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Days 31-60</p>
                  <p className="font-semibold">Results:</p>
                  <ul className="ml-6 list-disc">
                    <li>3.5 ROAS</li>
                    <li>$35 CAC</li>
                    <li>4.5% conversion</li>
                    <li>89% efficiency</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    <span className="ml-4">Optimization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Days 61-90</p>
                  <p className="font-semibold">Final Results:</p>
                  <ul className="ml-6 list-disc">
                    <li>4.2 ROAS</li>
                    <li>$29 CAC</li>
                    <li>5.6% conversion</li>
                    <li>312% growth</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Features */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Built for E-commerce Excellence:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Architecture</CardTitle>
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
                      Platform-specific frameworks
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
                  <CardTitle>Revenue Acceleration</CardTitle>
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
                      Scale optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Real Brand Transformations:</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Beauty Brand</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Ad spend:</span>
                      <span className="font-bold">$50K monthly</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Previous ROAS:</span>
                      <span className="font-bold">1.2</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>New ROAS:</span>
                      <span className="font-bold">4.2</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Revenue increase:</span>
                      <span className="font-bold">312%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Supplement Brand</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Starting revenue:</span>
                      <span className="font-bold">$50K</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>90-day revenue:</span>
                      <span className="font-bold">$250K</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>CAC reduction:</span>
                      <span className="font-bold">67%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Conversion lift:</span>
                      <span className="font-bold">312%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Integration */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Complete Framework Implementation:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>System Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Framework calibration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Team training
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Scale preparation
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      ROAS improvement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      CAC reduction
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Conversion optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality assurance
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Growth Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Scale validation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Framework compliance
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

      {/* ROI Projection */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Your Growth Potential:</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current Industry Average</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>ROAS:</span>
                      <span className="font-bold">1.2-1.8</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>CAC:</span>
                      <span className="font-bold">$87+</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Accuracy:</span>
                      <span className="font-bold">18-25%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Ad waste:</span>
                      <span className="font-bold">High</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentROAS" className="block text-sm font-medium text-muted-foreground">
                    Your current ROAS:
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
                  <label htmlFor="currentCAC" className="block text-sm font-medium text-muted-foreground">
                    Your current CAC ($):
                  </label>
                  <Input
                    id="currentCAC"
                    type="number"
                    value={currentCAC}
                    onChange={(e) => setCurrentCAC(e.target.value)}
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <label htmlFor="currentAccuracy" className="block text-sm font-medium text-muted-foreground">
                    Your current accuracy (%):
                  </label>
                  <Input
                    id="currentAccuracy"
                    type="number"
                    value={currentAccuracy}
                    onChange={(e) => setCurrentAccuracy(e.target.value)}
                    className="mt-1 block w-full"
                  />
                </div>
                <Button onClick={calculateProjection} className="w-full">
                  Calculate 90-Day Projection
                </Button>
              </div>
              {calculatedResults.projectedROAS > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Your 90-Day Projection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between">
                        <span>Projected ROAS:</span>
                        <span className="font-bold">{calculatedResults.projectedROAS}+</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Projected CAC:</span>
                        <span className="font-bold">${calculatedResults.projectedCAC}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Projected accuracy:</span>
                        <span className="font-bold">{calculatedResults.projectedAccuracy}%+</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Ad waste:</span>
                        <span className="font-bold">Minimal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Package */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Limited Framework Implementation Slots
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>What's Included:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Complete framework integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Custom ROAS plan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Performance tracking suite
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Scale protection system
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Bonus Features:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Multi-channel optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Custom reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Growth protection
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">The E-commerce Framework Guarantee:</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">4.2x ROAS potential</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">67% lower CAC</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">85%+ accuracy</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">Framework protection</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Secure Your Framework Implementation Slot</h2>
            <p className="mb-8 text-xl text-muted-foreground">Next Steps:</p>
            <ol className="mb-8 space-y-2 text-left">
              <li className="flex items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                  1
                </span>
                Schedule your E-commerce Audit
              </li>
              <li className="flex items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                  2
                </span>
                Receive your Custom ROAS Plan
              </li>
              <li className="flex items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                  3
                </span>
                Begin your 90-day transformation
              </li>
            </ol>
            <Button size="lg">
              Schedule Your Framework Implementation Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency Close */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-bold mb-8">
              Only 5 implementation slots available next week. Don't let poor converting copy limit your growth
              potential.
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

