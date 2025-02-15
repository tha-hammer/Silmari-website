import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="w-full bg-[#00F37E] text-black py-2 px-4 text-center">
        <p className="text-sm font-medium">Transform Your Content Operations with Expert-Supervised AI</p>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#00F37E]">Silmari</span>
          </Link>
          <nav className="ml-auto flex gap-6 items-center">
            <Link href="/enterprise-marketing" className="text-sm font-medium hover:text-[#00F37E] transition-colors">
              Enterprise Marketing
            </Link>
            <Link href="/agency-owners" className="text-sm font-medium hover:text-[#00F37E] transition-colors">
              Agency Owners
            </Link>
            <Link
              href="/corporate-communications"
              className="text-sm font-medium hover:text-[#00F37E] transition-colors"
            >
              Corporate Communications
            </Link>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-6xl font-bold tracking-tight">
            Transform Enterprise Content with Expert-Supervised AI
          </h1>
          <p className="mb-12 text-xl text-gray-400">
            Stop compromising between scale and quality. Our expert-supervised AI system delivers enterprise-grade
            content with guaranteed performance.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/schedule-demo">Schedule Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-24 border-t border-gray-800">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#00F37E] mb-4">3-5X</h3>
            <p className="text-gray-400">Better performance than standard AI tools</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#00F37E] mb-4">99.9%</h3>
            <p className="text-gray-400">Compliance rate across channels</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#00F37E] mb-4">52%</h3>
            <p className="text-gray-400">Increase in content production</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#00F37E] mb-4">100%</h3>
            <p className="text-gray-400">Quality maintained at scale</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 border-t border-gray-800">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transform Your Content Operations</h2>
          <p className="text-gray-400">
            Stop letting unreliable AI tools put your brand at risk. Our expert-supervised system combines AI efficiency
            with human expertise from industry veterans who have generated over $100M in proven results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 border border-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Scale content production 3X</h3>
            <p className="text-gray-400">Increase your content output without sacrificing quality</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Maintain 99.9% compliance</h3>
            <p className="text-gray-400">Ensure brand safety and regulatory compliance</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Reduce costs by 52%</h3>
            <p className="text-gray-400">Lower your content production costs significantly</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Guarantee quality at scale</h3>
            <p className="text-gray-400">Maintain consistent quality across all content</p>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="container py-24 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16">Two Powerful Service Tiers</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-8 border border-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#00F37E]">✓</span>
                Custom AI model training
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00F37E]">✓</span>
                Dedicated expert oversight
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00F37E]">✓</span>
                24/7 priority support
              </li>
            </ul>
            <Button size="lg" className="w-full" asChild>
              <Link href="/enterprise">Learn More</Link>
            </Button>
          </div>
          <div className="p-8 border border-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Agency</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#00F37E]">✓</span>
                White-label solutions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00F37E]">✓</span>
                Expert review system
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00F37E]">✓</span>
                Client management tools
              </li>
            </ul>
            <Button size="lg" className="w-full" asChild>
              <Link href="/agency">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

