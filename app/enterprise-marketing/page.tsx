import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function EnterpriseMarketing() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge className="mb-4">Enterprise Marketing Directors</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Scale Without Sacrifice: Enterprise-Grade AI Copywriting
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your content operations with the only expert-supervised AI system built on $100M+ proven sales
              frameworks. Finally, achieve enterprise-scale content production without compromising quality or
              compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Why Leading Enterprises Trust Our System</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">3-5X</span>
                    <span className="text-sm text-muted-foreground">Better Performance</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Compared to standard AI tools</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">99.9%</span>
                    <span className="text-sm text-muted-foreground">Compliance</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Across all channels</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">52%</span>
                    <span className="text-sm text-muted-foreground">Increase</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">In content production</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Advantage Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">The Enterprise AI Advantage</h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Stop struggling with unreliable AI tools that put your brand at risk. Our system combines cutting-edge
                  AI with direct expert oversight from industry veterans.
                </p>
                <div className="space-y-4">
                  {[
                    "Personally mentored by John Carlton and Gary Halbert",
                    "1-on-1 training with Kenrick Cleveland",
                    "NLP training from David Gordon",
                    "$100M+ in proven sales copy results",
                    "$1.2B raised through persuasive copy",
                    "$36M in business acquisitions",
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Expert Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Learn how our expert-supervised AI system can transform your content operations.
                  </p>
                  <Button className="w-full">
                    Book Now
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Proprietary Enterprise Frameworks</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="market">
                <AccordionTrigger>Market Mastery Framework</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Competitor content audit</li>
                    <li>Customer language mapping</li>
                    <li>Pain point identification</li>
                    <li>Performance tracking</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="influence">
                <AccordionTrigger>Deep Influence Matrix</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Emotional driver identification</li>
                    <li>Decision point analysis</li>
                    <li>Conversion optimization</li>
                    <li>Real-time performance measurement</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="power">
                <AccordionTrigger>Power Dynamics System</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Brand voice protection</li>
                    <li>Authority positioning</li>
                    <li>Market leadership signals</li>
                    <li>Competitive differentiation</li>
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
                    <span className="ml-4">Initial Content Audit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Current content analysis</p>
                  <p>• Performance baseline</p>
                  <p>• Opportunity identification</p>
                  <p>• Gap analysis</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </span>
                    <span className="ml-4">Framework Customization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Brand voice integration</p>
                  <p>• Compliance parameters</p>
                  <p>• Quality standards</p>
                  <p>• Performance metrics</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </span>
                    <span className="ml-4">AI System Training</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Custom model adaptation</p>
                  <p>• Framework implementation</p>
                  <p>• Quality assurance protocols</p>
                  <p>• Performance validation</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </span>
                    <span className="ml-4">Ongoing Optimization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Real-time monitoring</p>
                  <p>• Performance tracking</p>
                  <p>• Continuous improvement</p>
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
            <h2 className="mb-12 text-3xl font-bold tracking-tight">What Enterprise Leaders Say</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      "We've transformed our content operations. 3X output with higher quality than our in-house team -
                      I didn't think it was possible."
                    </p>
                    <footer>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-sm text-muted-foreground">Marketing Director, Fortune 500 Tech Company</div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      "The ROI was immediate. We're producing more content than ever, with better quality and complete
                      compliance confidence."
                    </p>
                    <footer>
                      <div className="font-semibold">Jennifer Patel</div>
                      <div className="text-sm text-muted-foreground">Enterprise Marketing Director</div>
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
                  <CardTitle>AI Excellence Tier</CardTitle>
                  <div className="text-3xl font-bold">$5K/Month</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Access to AI system with proven frameworks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Group support and optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Regular framework updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Performance benchmarking
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI Mastery Tier</CardTitle>
                  <div className="text-3xl font-bold">$15K/Month</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Everything in AI Excellence
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      1-on-1 strategic guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Custom framework adaptation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Direct access to expertise
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

      {/* CTA Section */}
      <section className="border-t">
        <div className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Limited Q1 Implementation Slots Available</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              We're accepting a limited number of enterprise partners. Schedule your expert consultation now to secure
              your slot.
            </p>
            <Button size="lg">
              Schedule Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

