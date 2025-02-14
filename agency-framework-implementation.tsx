"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function AgencyFrameworkImplementation() {
  const [monthlyWaste, setMonthlyWaste] = useState("")
  const [revisionRate, setRevisionRate] = useState("")
  const [currentAccuracy, setCurrentAccuracy] = useState("")
  const [calculatedResults, setCalculatedResults] = useState({
    costReduction: 0,
    revisionsReduction: 0,
    accuracyImprovement: 0,
  })

  const calculateROI = () => {
    const waste = Number.parseFloat(monthlyWaste)
    const revisionRate = Number.parseFloat(revisionRate)
    const accuracy = Number.parseFloat(currentAccuracy)

    const costReduction = waste * 0.67
    const revisionsReduction = revisionRate * 0.73
    const accuracyImprovement = 85 - accuracy

    setCalculatedResults({
      costReduction: Math.round(costReduction),
      revisionsReduction: Math.round(revisionsReduction),
      accuracyImprovement: Math.round(accuracyImprovement),
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
              Agency Framework Implementation System: From 18% to 85%+ Copy Accuracy
            </h1>
            <p className="text-xl text-muted-foreground">Stop Fixing Broken AI Copy. Start Scaling Your Agency.</p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Framework-driven AI architecture
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Enterprise-grade consistency
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Proven across $100M+ in sales
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                312% higher conversion rates
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Framework Mastery Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
            The Three Frameworks That Transform Agency Copy:
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="market">
              <AccordionTrigger>Market Mastery Framework™</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">What It Solves:</h4>
                    <ul className="ml-6 list-disc">
                      <li>Weak market positioning</li>
                      <li>Generic value propositions</li>
                      <li>Poor competitive differentiation</li>
                      <li>Low response rates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">How It Works:</h4>
                    <ol className="ml-6 list-decimal space-y-2">
                      <li>
                        <p className="font-semibold">Market Force Analysis</p>
                        <ul className="ml-6 list-disc">
                          <li>Deep competitive positioning</li>
                          <li>Prospect pain point mapping</li>
                          <li>Response trigger hierarchy</li>
                          <li>Market maturity indicators</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Competition Neutralization</p>
                        <ul className="ml-6 list-disc">
                          <li>Unique positioning architecture</li>
                          <li>Differentiation matrices</li>
                          <li>Value stack optimization</li>
                          <li>Barrier removal systems</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Response Architecture</p>
                        <ul className="ml-6 list-disc">
                          <li>Decision pathway mapping</li>
                          <li>Conversion acceleration points</li>
                          <li>Risk reversal integration</li>
                          <li>Action trigger sequencing</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="influence">
              <AccordionTrigger>Deep Influence Matrix™</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">What It Solves:</h4>
                    <ul className="ml-6 list-disc">
                      <li>Weak psychological engagement</li>
                      <li>Poor emotional connection</li>
                      <li>Low conversion rates</li>
                      <li>High resistance rates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Core Components:</h4>
                    <ol className="ml-6 list-decimal space-y-2">
                      <li>
                        <p className="font-semibold">Psychological Trigger System</p>
                        <ul className="ml-6 list-disc">
                          <li>Primary desire mapping</li>
                          <li>Secondary motivation chains</li>
                          <li>Resistance pattern analysis</li>
                          <li>Decision acceleration points</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Power Dynamic Integration</p>
                        <ul className="ml-6 list-disc">
                          <li>Authority establishment</li>
                          <li>Trust acceleration</li>
                          <li>Credibility amplification</li>
                          <li>Social proof architecture</li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold">Freedom Framework</p>
                        <ul className="ml-6 list-disc">
                          <li>Choice architecture design</li>
                          <li>Control trigger activation</li>
                          <li>Autonomy reinforcement</li>
                          <li>Decision ownership paths</li>
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

      {/* Implementation Protocol */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">How We Transform Your Agency:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </span>
                    <span className="ml-4">Framework Audit & Alignment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Week 1-2</p>
                  <ul className="ml-6 list-disc">
                    <li>Current performance analysis</li>
                    <li>Framework gap identification</li>
                    <li>Implementation roadmap</li>
                    <li>Team alignment sessions</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </span>
                    <span className="ml-4">System Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Week 3-4</p>
                  <ul className="ml-6 list-disc">
                    <li>Framework calibration</li>
                    <li>Quality control setup</li>
                    <li>Performance tracking</li>
                    <li>Team training initiation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    <span className="ml-4">Optimization & Scale</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Week 5-6</p>
                  <ul className="ml-6 list-disc">
                    <li>Performance validation</li>
                    <li>Framework optimization</li>
                    <li>Scale protection</li>
                    <li>Growth acceleration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Metrics */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Real Agency Results:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Copy Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Accuracy:</span>
                      <span className="font-bold">From 18% to 85%+</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Revisions:</span>
                      <span className="font-bold">Reduced by 73%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Quality:</span>
                      <span className="font-bold">Enterprise-grade</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Consistency:</span>
                      <span className="font-bold">94% maintained</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Cost Reduction:</span>
                      <span className="font-bold">67%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Revenue Growth:</span>
                      <span className="font-bold">+312%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Client Retention:</span>
                      <span className="font-bold">+89%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Team Efficiency:</span>
                      <span className="font-bold">+400%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Response Rates:</span>
                      <span className="font-bold">+312%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Satisfaction:</span>
                      <span className="font-bold">94%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Referrals:</span>
                      <span className="font-bold">+67%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>LTV:</span>
                      <span className="font-bold">4.2x increase</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Built Specifically for $2M+ Agencies:
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Framework Protection System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Automatic framework compliance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality assurance protocols
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance validation
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
                  <CardTitle>Team Integration Protocol</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Workflow optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Training modules
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Efficiency metrics
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client Management Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      White-label capabilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Custom reporting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Brand voice protection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Multi-account management
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Why Frameworks Matter:</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Commercial AI Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      18-25% accuracy
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      No built-in frameworks
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Generic outputs
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      High revision needs
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Limited scalability
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Our Framework-First System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      85%+ accuracy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Integrated frameworks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Custom outputs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Minimal revisions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Unlimited scaling
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Your Agency's Growth Potential:</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current State Average</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>Monthly waste:</span>
                      <span className="font-bold">$12,347</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Revision rate:</span>
                      <span className="font-bold">67%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Accuracy:</span>
                      <span className="font-bold">18-25%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Scalability:</span>
                      <span className="font-bold">Limited</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <div>
                  <label htmlFor="monthlyWaste" className="block text-sm font-medium text-muted-foreground">
                    Your monthly waste ($):
                  </label>
                  <Input
                    id="monthlyWaste"
                    type="number"
                    value={monthlyWaste}
                    onChange={(e) => setMonthlyWaste(e.target.value)}
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <label htmlFor="revisionRate" className="block text-sm font-medium text-muted-foreground">
                    Your revision rate (%):
                  </label>
                  <Input
                    id="revisionRate"
                    type="number"
                    value={revisionRate}
                    onChange={(e) => setRevisionRate(e.target.value)}
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
                <Button onClick={calculateROI} className="w-full">
                  Calculate 90-Day Projection
                </Button>
              </div>
              {calculatedResults.costReduction > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Your 90-Day Projection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between">
                        <span>Cost reduction:</span>
                        <span className="font-bold">${calculatedResults.costReduction}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Revisions reduction:</span>
                        <span className="font-bold">{calculatedResults.revisionsReduction}%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Accuracy improvement:</span>
                        <span className="font-bold">{calculatedResults.accuracyImprovement}%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Scalability:</span>
                        <span className="font-bold">Unlimited</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Offer */}
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
                    Team training program
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Custom implementation plan
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
                    White-label capabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Multi-account management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Custom reporting suite
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Priority support access
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
            <h2 className="mb-8 text-3xl font-bold">The Enterprise Framework Guarantee:</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">85%+ accuracy or we fix it free</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">Framework compliance assured</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">Team efficiency guaranteed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">ROI protection built-in</p>
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
                Schedule your Framework Audit
              </li>
              <li className="flex items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                  2
                </span>
                Receive your Custom Implementation Plan
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
              Only 5 implementation slots available next week. Don't let another month of broken AI copy waste your
              agency's resources.
            </p>
            <Button size="lg" variant="outline">
              Get Your Custom Framework Integration Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

