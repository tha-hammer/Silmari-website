"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function EnterpriseROI() {
  const [currentCost, setCurrentCost] = useState(100000)
  const [projectedSavings, setProjectedSavings] = useState(52000)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setProjectedSavings(currentCost * 0.52)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">52% Content Cost Reduction for Enterprise</h1>
      <h2 className="text-2xl mb-8">Expert-Supervised AI with $100M+ Proven Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Cost Calculator</h3>
          <form onSubmit={handleCalculate} className="space-y-4">
            <div>
              <label htmlFor="currentCost" className="block text-sm font-medium text-gray-700">
                Current Annual Content Cost
              </label>
              <Input
                type="number"
                id="currentCost"
                value={currentCost}
                onChange={(e) => setCurrentCost(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            <Button type="submit">Calculate Savings</Button>
          </form>
          <div className="mt-4">
            <p>Projected Annual Savings: ${projectedSavings.toFixed(2)}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Expert Oversight Process</h3>
          <video className="w-full aspect-video" controls poster="/placeholder.svg?height=200&width=300">
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="text-center">
        <Button asChild>
          <Link href="/enterprise-content-analysis.pdf" download>
            Download Enterprise Content Cost Analysis
          </Link>
        </Button>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Implementation Timeline</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Initial consultation and cost analysis (Week 1)</li>
          <li>Custom AI model training (Weeks 2-3)</li>
          <li>Expert oversight team onboarding (Week 4)</li>
          <li>Pilot project implementation (Weeks 5-6)</li>
          <li>Full-scale rollout and optimization (Weeks 7-8)</li>
        </ol>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Finance", "Healthcare", "Technology"].map((industry) => (
            <div key={industry} className="border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{industry} Industry Success</h4>
              <p>Learn how we achieved 52% cost reduction and 3x output for a leading {industry} company.</p>
              <Button className="mt-2" variant="outline">
                Read Case Study
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

