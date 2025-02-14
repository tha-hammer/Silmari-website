import { ArrowRight, CheckCircle2, ChevronRight, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function CorporateCommunications() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">Corporate Communications VPs</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Enterprise-Grade AI with Built-in Compliance
            </h1>
            <p className="text-xl text-muted-foreground">
              Finally, an AI copywriting solution that truly understands enterprise compliance. Our expert-supervised
              system guarantees consistent brand voice and messaging across global teams, with built-in risk mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Enterprise Compliance Metrics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">89%</span>
                    <span className="text-sm text-muted-foreground">Consistency</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Consistency score across global teams</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">Zero</span>
                    <span className="text-sm text-muted-foreground">Incidents</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Compliance incidents reported</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">99.9%</span>
                    <span className="text-sm text-muted-foreground">Accuracy</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Brand voice accuracy maintained</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Risk Mitigation */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Enterprise Risk Mitigation</h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Built on comprehensive enterprise compliance frameworks:
                </p>
                <div className="space-y-4">
                  {[
                    "Global compliance automation",
                    "Brand voice protection",
                    "Risk mitigation protocols",
                    "Real-time monitoring",
                    "Performance tracking",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Compliance Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Learn how our expert-supervised AI system can ensure perfect compliance across your global
                    operations.
                  </p>
                  <Button className="w-full">
                    Book Compliance Review
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Proprietary Compliance Frameworks</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="global">
                <AccordionTrigger>Global Compliance Framework</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Regulatory compliance</li>
                    <li>Brand guidelines integration</li>
                    <li>Legal requirements</li>
                    <li>Risk assessment</li>
                    <li>Violation prevention</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="brand">
                <AccordionTrigger>Brand Voice Matrix</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Global consistency</li>
                    <li>Local market adaptation</li>
                    <li>Tone alignment</li>
                    <li>Message coherence</li>
                    <li>Cultural sensitivity</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="risk">
                <AccordionTrigger>Risk Mitigation System</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Compliance automation</li>
                    <li>Real-time monitoring</li>
                    <li>Violation prevention</li>
                    <li>Audit trails</li>
                    <li>Performance tracking</li>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Enterprise Implementation Process</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </span>
                    <span className="ml-4">Compliance Assessment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Current risk analysis</p>
                  <p>• Compliance audit</p>
                  <p>• Gap identification</p>
                  <p>• Requirements mapping</p>
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
                  <p>• Brand voice alignment</p>
                  <p>• Compliance parameters</p>
                  <p>• Quality standards</p>
                  <p>• Monitoring protocols</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    <span className="ml-4">Global Team Alignment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Training protocols</p>
                  <p>• Workflow integration</p>
                  <p>• Quality assurance</p>
                  <p>• Performance metrics</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </span>
                    <span className="ml-4">Continuous Monitoring</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Real-time compliance</p>
                  <p>• Performance tracking</p>
                  <p>• Risk mitigation</p>
                  <p>• ROI measurement</p>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Enterprise Success Stories</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      "First AI system I've seen that truly understands enterprise compliance needs. Game-changer for
                      our global operations."
                    </p>
                    <footer>
                      <div className="font-semibold">Robert Chen</div>
                      <div className="text-sm text-muted-foreground">VP Corporate Communications, Fortune 100</div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      "The consistency across our global operations is remarkable. Finally, true enterprise-grade AI."
                    </p>
                    <footer>
                      <div className="font-semibold">Sarah Williams</div>
                      <div className="text-sm text-muted-foreground">Global Communications VP</div>
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
                  <CardTitle>Enterprise Excellence</CardTitle>
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
                      Compliance frameworks
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
                  <CardTitle>Enterprise Mastery</CardTitle>
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
                      Custom compliance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Direct expert access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Advanced monitoring
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Why Enterprises Trust Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Mitigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Compliance automation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Real-time monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Violation prevention
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Perfect accuracy
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Global Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Brand voice protection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Message alignment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Cultural adaptation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality control
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Team Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Workflow optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Productivity gains
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Quality assurance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance tracking
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
            <h2 className="mb-4 text-3xl font-bold">Limited Q1 Enterprise Slots Available</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              We're accepting a limited number of enterprise partners. Schedule your compliance consultation now to
              secure your slot.
            </p>
            <Button size="lg">
              Book Compliance Review
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

