import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function SalesPresentation() {
  const slides = [
    {
      title: "Current Content Costs",
      content:
        "Analyze and present the prospect's current content production costs, including staff, tools, and outsourcing expenses.",
    },
    {
      title: "52% Cost Reduction Calculation",
      content:
        "Demonstrate how our solution can reduce their specific content costs by 52%, showing detailed breakdowns and projections.",
    },
    {
      title: "Expert Oversight Process",
      content:
        "Showcase our unique expert supervision system that ensures quality and compliance while maintaining efficiency.",
    },
    {
      title: "$100M+ Case Studies",
      content:
        "Present relevant case studies from the prospect's industry, highlighting ROI and specific improvements achieved.",
    },
    {
      title: "Implementation Timeline",
      content:
        "Outline a clear, step-by-step implementation plan tailored to the prospect's needs and current infrastructure.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sales Presentation Flow</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {slides.map((slide, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Slide {index + 1}: {slide.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{slide.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button size="lg">
          Start Presentation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

