import { ArrowRight, CheckCircle2, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function AgencyOwners() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">Agency Owners</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Win Bigger Clients: Enterprise-Grade AI Copywriting for Agencies
            </h1>
            <p className="text-xl text-muted-foreground">
              Level up your agency with the only expert-supervised AI system that gives you Fortune 500 capabilities at
              a fraction of the cost. Built on $100M+ proven sales frameworks, our system helps you win and retain
              larger clients.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Proven Agency Results</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">3X</span>
                    <span className="text-sm text-muted-foreground">Client Retention</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Improvement in client retention rates</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">67%</span>
                    <span className="text-sm text-muted-foreground">Faster</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Content production speed increase</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">41%</span>
                    <span className="text-sm text-muted-foreground">Higher Margins</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Increase in project profit margins</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert System Advantage */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Expert System Advantage</h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Stop losing premium clients to bigger agencies. Our system is built on direct training from industry
                  legends:
                </p>
                <div className="space-y-4">
                  {[
                    "John Carlton (Legendary copywriter)",
                    "Gary Halbert (Copy legend)",
                    "Kenrick Cleveland (Godfather of Persuasion)",
                    "David Gordon (Original NLP developer)",
                  ].map((expert) => (
                    <div key={expert} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <span>{expert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Agency Transformation Call</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Learn how our expert-supervised AI system can elevate your agency to compete with the big players.
                  </p>
                  <Button className="w-full">
                    Book Agency Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Proprietary Agency Frameworks</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="market">
                <AccordionTrigger>Market Mastery Framework</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Client industry analysis</li>
                    <li>Competitor content audit</li>
                    <li>Customer language mapping</li>
                    <li>Performance metrics</li>
                    <li>ROI tracking</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="influence">
                <AccordionTrigger>Deep Influence Matrix</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Psychological trigger mapping</li>
                    <li>Decision point analysis</li>
                    <li>Conversion optimization</li>
                    <li>Performance measurement</li>
                    <li>Client results tracking</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="power">
                <AccordionTrigger>Power Dynamics System</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Premium positioning</li>
                    <li>Authority building</li>
                    <li>Client acquisition</li>
                    <li>Retention strategies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Agency Implementation Process</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </span>
                    <span className="ml-4">Agency Assessment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Current capabilities audit</p>
                  <p>• Client portfolio analysis</p>
                  <p>• Opportunity mapping</p>
                  <p>• Growth strategy development</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </span>
                    <span className="ml-4">Framework Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Custom implementation</p>
                  <p>• Team training</p>
                  <p>• Client onboarding process</p>
                  <p>• Quality protocols</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    <span className="ml-4">Client Acquisition System</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Premium positioning</p>
                  <p>• Pitch materials</p>
                  <p>• Case studies</p>
                  <p>• ROI documentation</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </span>
                    <span className="ml-4">Scaling Operations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Workflow optimization</p>
                  <p>• Team efficiency</p>
                  <p>• Quality control</p>
                  <p>• Performance tracking</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Agency Success Stories</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      "We landed three enterprise clients in the first month. The ROI is incredible."
                    </p>
                    <footer>
                      <div className="font-semibold">David Martinez</div>
                      <div className="text-sm text-muted-foreground">Agency CEO</div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      "We're competing with agencies 10X our size - and winning. This system is a game-changer."
                    </p>
                    <footer>
                      <div className="font-semibold">Rachel Kim</div>
                      <div className="text-sm text-muted-foreground">Agency Founder</div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Investment Options</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Agency Excellence</CardTitle>
                  <div className="text-3xl font-bold">$5K/Month</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      AI system access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Framework implementation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Group support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance tracking
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Agency Mastery</CardTitle>
                  <div className="text-3xl font-bold">$15K/Month</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Everything in Excellence
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Strategic guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Custom frameworks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Direct expert access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Advanced optimization
                    </li>
                  </ul>
                  <Button className="w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Why Agencies Choose Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Premium Positioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Enterprise-grade capabilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Expert supervision
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Proven frameworks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality guarantees
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Scalable Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      AI-powered efficiency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Framework-based processes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality control
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
                  <CardTitle>Competitive Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Enterprise capabilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Premium positioning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Proven results
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Market differentiation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Limited Q1 Partnership Slots Available</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              We're accepting a limited number of agency partners. Schedule your agency transformation call now to
              secure your slot.
            </p>
            <Button size="lg">
              Book Agency Call
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

