import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About DR Marketers
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We are the leading experts in direct response marketing, helping businesses achieve unprecedented growth
                through our AI-powered frameworks.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 mt-12">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p>
                At DR Marketers, our mission is to revolutionize direct response marketing through cutting-edge AI
                technology and proven psychological frameworks. We aim to empower businesses to achieve unparalleled
                growth and success in their marketing efforts.
              </p>
              <h2 className="text-2xl font-bold">Our Expertise</h2>
              <p>
                With over a decade of experience and $100M+ in proven sales results, our team of experts has developed
                proprietary frameworks that consistently deliver outstanding results for our clients. Our AI-powered
                system combines the best of human expertise with advanced technology to create marketing strategies that
                truly convert.
              </p>
              <div className="flex justify-center mt-8">
                <Button asChild>
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

