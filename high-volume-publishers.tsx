"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function HighVolumePublishers() {
  const [monthlyVolume, setMonthlyVolume] = useState("")
  const [reviewTime, setReviewTime] = useState("")
  const [complianceCosts, setComplianceCosts] = useState("")
  const [revisionTeamSize, setRevisionTeamSize] = useState("")
  const [calculatedResults, setCalculatedResults] = useState({
    reviewTimeReduction: 0,
    teamEfficiencyGain: 0,
    costSavings: 0,
    revenueOpportunity: 0,
  })

  const calculateROI = () => {
    const volume = Number.parseFloat(monthlyVolume)
    const time = Number.parseFloat(reviewTime)
    const costs = Number.parseFloat(complianceCosts)
    const teamSize = Number.parseFloat(revisionTeamSize)

    const reviewTimeReduction = time * 0.66 * volume
    const teamEfficiencyGain = teamSize * 0.73
    const costSavings = costs * 0.66
    const revenueOpportunity = volume * 1.5 // Assuming 50% increase in content production leads to 50% revenue increase

    setCalculatedResults({
      reviewTimeReduction: Math.round(reviewTimeReduction),
      teamEfficiencyGain: Math.round(teamEfficiencyGain),
      costSavings: Math.round(costSavings),
      revenueOpportunity: Math.round(revenueOpportunity),
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">High-Volume Publishers</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Scale to 1000+ Articles Monthly with 85%+ Accuracy and Perfect Compliance
            </h1>
            <p className="text-xl text-muted-foreground">The Only AI System Built for High-Volume Publishers</p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                85-88.3% accuracy guaranteed
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                66% less compliance review time
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                73% fewer revision cycles
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                94% brand voice consistency
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Stop Struggling With:</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "75-80% of AI content needing rewrites",
              "4-5 hours per piece in compliance review",
              "$180+ per article in review costs",
              "Inconsistent brand voice across channels",
              "Quality control nightmares at scale",
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

      {/* Compliance Framework Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              The Editorial Control Framework™ That Changes Everything
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="compliance">
                <AccordionTrigger>1. Compliance Architecture</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 font-semibold">Built for Complex Industries:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Regulatory requirement mapping</li>
                    <li>Industry standard integration</li>
                    <li>Risk factor analysis</li>
                    <li>Validation protocols</li>
                    <li>Automatic compliance checking</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="brand">
                <AccordionTrigger>2. Brand Voice Protection</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 font-semibold">Maintain Perfect Consistency:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Tone matrix development</li>
                    <li>Style guide automation</li>
                    <li>Voice consistency triggers</li>
                    <li>Language pattern protection</li>
                    <li>Multi-channel alignment</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality">
                <AccordionTrigger>3. Quality Control System</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 font-semibold">Enterprise-Grade Assurance:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Framework compliance checking</li>
                    <li>Performance prediction</li>
                    <li>Error pattern detection</li>
                    <li>Optimization protocols</li>
                    <li>Scale protection</li>
                  </ul>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Real Publisher Results:</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Publisher</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>100 pieces monthly</li>
                        <li>31% compliance issues</li>
                        <li>4-5 revision cycles</li>
                        <li>$42K monthly review costs</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>1000+ pieces monthly</li>
                        <li>99.4% compliance rate</li>
                        <li>Single revision cycle</li>
                        <li>$12K monthly review costs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Health Publisher</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Before:</h3>
                      <ul className="ml-6 list-disc">
                        <li>200 pieces monthly</li>
                        <li>5 editors</li>
                        <li>3 compliance reviewers</li>
                        <li>$45K monthly costs</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold">After 90 Days:</h3>
                      <ul className="ml-6 list-disc">
                        <li>1000+ pieces monthly</li>
                        <li>Same team size</li>
                        <li>85%+ accuracy</li>
                        <li>$27K monthly costs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Protocol */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              How We Scale Your Content Operation:
            </h2>
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
                    <li>Editorial audit</li>
                    <li>Framework calibration</li>
                    <li>System integration</li>
                    <li>Team alignment</li>
                  </ul>
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
                  <p className="text-sm text-muted-foreground">Week 3-4</p>
                  <ul className="ml-6 list-disc">
                    <li>Production scaling</li>
                    <li>Quality assurance</li>
                    <li>Performance tracking</li>
                    <li>Optimization protocols</li>
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
                  <p className="text-sm text-muted-foreground">Week 5-6</p>
                  <ul className="ml-6 list-disc">
                    <li>Scale protection</li>
                    <li>Enhanced efficiency</li>
                    <li>Framework refinement</li>
                    <li>Growth acceleration</li>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Built Specifically for Publishers:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Content Scaling Matrix™</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Workflow optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Resource allocation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Bottleneck elimination
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
                  <CardTitle>Multi-Channel Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Platform optimization
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
                      Performance tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Real-time checking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Error detection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Correction protocols
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance validation
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Calculate Your Current Content Costs:
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="monthlyVolume" className="block text-sm font-medium text-muted-foreground">
                  Monthly content volume:
                </label>
                <Input
                  id="monthlyVolume"
                  type="number"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="reviewTime" className="block text-sm font-medium text-muted-foreground">
                  Average review time per piece (hours):
                </label>
                <Input
                  id="reviewTime"
                  type="number"
                  value={reviewTime}
                  onChange={(e) => setReviewTime(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="complianceCosts" className="block text-sm font-medium text-muted-foreground">
                  Current compliance costs ($):
                </label>
                <Input
                  id="complianceCosts"
                  type="number"
                  value={complianceCosts}
                  onChange={(e) => setComplianceCosts(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="revisionTeamSize" className="block text-sm font-medium text-muted-foreground">
                  Revision team size:
                </label>
                <Input
                  id="revisionTeamSize"
                  type="number"
                  value={revisionTeamSize}
                  onChange={(e) => setRevisionTeamSize(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <Button onClick={calculateROI} className="w-full">
                Calculate ROI
              </Button>
            </div>
            {calculatedResults.reviewTimeReduction > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Your Potential Savings:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Review time reduction:</span>
                    <span className="font-bold">{calculatedResults.reviewTimeReduction} hours</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Team efficiency gain:</span>
                    <span className="font-bold">{calculatedResults.teamEfficiencyGain} FTEs</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Cost savings:</span>
                    <span className="font-bold">${calculatedResults.costSavings}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Revenue opportunity:</span>
                    <span className="font-bold">${calculatedResults.revenueOpportunity}</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Implementation Protocol */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Enterprise Publishing Integration:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>1. Framework Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Compliance system setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Voice protection integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality control implementation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance baseline
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Team Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Workflow redesign
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Training programs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Efficiency protocols
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
                  <CardTitle>3. Growth Acceleration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Production scaling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Continuous optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Publisher Testimonials */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">What Publishers Say:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "We went from 100 to 1000 pieces monthly with the same team size. The ROI was immediate."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Financial Publishing Group</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Compliance review time dropped 66% in the first week. Game-changer for our operation."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Health Publisher</cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Finally, AI that understands regulatory requirements and brand voice simultaneously."
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">Lifestyle Media Group</cite>
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
            <h2 className="mb-8 text-3xl font-bold">The Publisher's Triple Guarantee:</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">85%+ accuracy rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">66% faster compliance review</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-2 font-bold">94% brand voice consistency</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Why Publishers Choose Our System:</h2>
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
                      Manual compliance review
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Inconsistent voice
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      Limited scalability
                    </li>
                    <li className="flex items-center">
                      <XCircle className="mr-2 h-4 w-4 text-destructive" />
                      High costs
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
                      Automated compliance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Perfect consistency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Unlimited scaling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Cost reduction
                    </li>
                  </ul>
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
            <h2 className="mb-4 text-3xl font-bold">
              Limited Availability: 3 Enterprise Publishing Slots Open Next Week
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">Schedule Your Publishing Framework Call</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Custom scaling plan
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                ROI projection
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Compliance audit
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                Priority access
              </li>
            </ul>
            <Button size="lg">
              Schedule Your Publishing Framework Call
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
              Don't let another month of broken AI content drain your resources. Transform your publishing operation
              with proven frameworks and 85%+ accuracy.
            </p>
            <Button size="lg" variant="outline">
              Get Your Custom Publishing Framework
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

