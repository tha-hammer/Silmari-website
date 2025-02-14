import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function EmailSequence() {
  const emails = [
    {
      title: "Your Enterprise Content Costs Analysis",
      content: "Personalized calculator results showing potential savings and efficiency gains.",
    },
    {
      title: "How [Similar Company] Reduced Content Costs by 52%",
      content: "Case study highlighting a success story relevant to the prospect's industry.",
    },
    {
      title: "Expert Oversight: The $100M+ Difference",
      content: "Detailed explanation of our expert supervision process and its impact on quality and compliance.",
    },
    {
      title: "Your Custom Implementation Plan",
      content: "Tailored roadmap for integrating our solution into the prospect's existing workflow.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Email Sequence</h1>
      <div className="space-y-6">
        {emails.map((email, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Email {index + 1}: {email.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{email.content}</p>
              <Button variant="outline" className="mt-4">
                Preview Email
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button size="lg">
          Start Email Sequence
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

