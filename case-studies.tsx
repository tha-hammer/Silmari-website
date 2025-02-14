import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">DR Marketers</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium hover:underline">
              Case Studies
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Case Studies</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover how our AI-powered frameworks have transformed businesses and driven unprecedented growth.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Info Product Company</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Achieved a 312% increase in monthly revenue, from $83K to $412K.</p>
                  <ul className="space-y-2 mb-4">
                    <li>Conversion rate: 1.8% to 5.6%</li>
                    <li>Acquisition cost: $247 to $82</li>
                    <li>Sequence completion: 22% to 89%</li>
                  </ul>
                  <Button variant="outline">Read Full Case Study</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Coaching Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Broke the 7-figure monthly revenue barrier for the first time.</p>
                  <ul className="space-y-2 mb-4">
                    <li>Emotional engagement: 89%</li>
                    <li>Response rate increase: 312%</li>
                    <li>Sequence completion: 94%</li>
                  </ul>
                  <Button variant="outline">Read Full Case Study</Button>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/contact">
                  Start Your Success Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

