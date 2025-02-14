import Link from "next/link"
import { ArrowRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Promo Banner */}
      <div className="relative bg-black text-white p-2 text-center text-sm">
        <p className="text-emerald-400">Never Struggle With Copy or Content Again!</p>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Silmari Ai</span>
          </Link>
          <nav className="ml-auto flex gap-6 items-center">
            <Link href="/enterprise-marketing" className="text-sm font-medium hover:underline">
              Enterprise Marketing
            </Link>
            <Link href="/agency-owners" className="text-sm font-medium hover:underline">
              Agency Owners
            </Link>
            <Link href="/corporate-communications" className="text-sm font-medium hover:underline">
              Corporate Communications
            </Link>
            <Link href="/market-mastery-framework" className="text-sm font-medium hover:underline">
              Market Mastery
            </Link>
            <Link href="/enterprise-agency-owners" className="text-sm font-medium hover:underline">
              Enterprise Agency
            </Link>
            <Link href="/high-volume-publishers" className="text-sm font-medium hover:underline">
              Publishers
            </Link>
            <Link href="/ecommerce-brands" className="text-sm font-medium hover:underline">
              E-commerce
            </Link>
            <Link href="/direct-response-marketers" className="text-sm font-medium hover:underline">
              Direct Response
            </Link>
          </nav>
          {/*<nav className="ml-auto flex gap-6 items-center">
            <Link href="#" className="text-sm font-medium hover:underline">
              Model Library
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              GPUs
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Docs
            </Link>
            <Button variant="ghost">Log In</Button>
            <Button>Get Started</Button>
          </nav>*/}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24">
          <div className="container flex flex-col items-center text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transform Enterprise Content with Expert-Supervised AI
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stop compromising between scale and quality. Our expert-supervised AI system delivers enterprise-grade
                content with guaranteed performance.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button size="lg">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="border-t py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold">3-5X</div>
                  <p className="text-sm text-muted-foreground">Better performance than standard AI tools</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold">99.9%</div>
                  <p className="text-sm text-muted-foreground">Compliance rate across channels</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold">52%</div>
                  <p className="text-sm text-muted-foreground">Increase in content production</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold">100%</div>
                  <p className="text-sm text-muted-foreground">Quality maintained at scale</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="border-t py-24">
          <div className="container">
            <Tabs defaultValue="enterprise" className="space-y-8">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="enterprise">For Enterprise Leaders</TabsTrigger>
                <TabsTrigger value="agency">For Agency Leaders</TabsTrigger>
                <TabsTrigger value="communications">For Corporate Communications</TabsTrigger>
              </TabsList>
              <TabsContent value="enterprise" className="space-y-4">
                <h2 className="text-3xl font-bold">Transform Your Content Operations</h2>
                <p className="text-muted-foreground">
                  Stop letting unreliable AI tools put your brand at risk. Our expert-supervised system combines AI
                  efficiency with human expertise from industry veterans who have generated over $100M in proven
                  results.
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">Scale content production 3X</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">Maintain 99.9% compliance</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">Reduce costs by 52%</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">Guarantee quality at scale</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="agency" className="space-y-4">
                <h2 className="text-3xl font-bold">Win and Retain Larger Clients</h2>
                <p className="text-muted-foreground">
                  Compete with agencies 10X your size using our enterprise-grade AI system. Deliver premium quality at
                  scale while maintaining higher margins.
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">67% faster production</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">3X client retention</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">41% higher margins</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">Enterprise-grade quality</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="communications" className="space-y-4">
                <h2 className="text-3xl font-bold">Perfect Global Compliance</h2>
                <p className="text-muted-foreground">
                  Finally, an AI solution that understands enterprise compliance. Ensure consistent brand voice and
                  messaging across global teams with built-in risk mitigation.
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">89% consistency score</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">Zero compliance incidents</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">99.9% brand accuracy</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-bold">2x team productivity</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="border-t py-24">
          <div className="container space-y-12 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Two Powerful Service Tiers</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Choose the perfect plan for your enterprise needs with our flexible pricing options.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">AI Excellence</h3>
                    <div className="text-4xl font-bold">$5K/Month</div>
                    <ul className="space-y-2 text-left">
                      <li>✓ Access to AI system with proven frameworks</li>
                      <li>✓ Group support and optimization</li>
                      <li>✓ Regular framework updates</li>
                      <li>✓ Performance benchmarking</li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">AI Mastery</h3>
                    <div className="text-4xl font-bold">$15K/Month</div>
                    <ul className="space-y-2 text-left">
                      <li>✓ Everything in AI Excellence</li>
                      <li>✓ 1-on-1 strategic guidance</li>
                      <li>✓ Custom framework adaptation</li>
                      <li>✓ Direct access to expertise</li>
                      <li>✓ Advanced optimization</li>
                    </ul>
                    <Button className="w-full">Contact Sales</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

