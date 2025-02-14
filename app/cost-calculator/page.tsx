"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CostCalculator() {
  const [inputs, setInputs] = useState({
    contentPieces: 100,
    avgWordCount: 1000,
    inHouseWriterSalary: 60000,
    freelanceWriterRate: 0.1,
    editorSalary: 75000,
    toolsCost: 500,
  })

  const [results, setResults] = useState({
    currentCost: 0,
    projectedCost: 0,
    savings: 0,
    savingsPercentage: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: Number.parseFloat(value) || 0 }))
  }

  const calculateCosts = () => {
    const { contentPieces, avgWordCount, inHouseWriterSalary, freelanceWriterRate, editorSalary, toolsCost } = inputs

    const totalWords = contentPieces * avgWordCount
    const inHouseCost = (inHouseWriterSalary / 2000) * (totalWords / 500) // Assuming 2000 working hours per year and 500 words per hour
    const freelanceCost = totalWords * freelanceWriterRate
    const editingCost = (editorSalary / 2000) * (totalWords / 1000) // Assuming 1000 words edited per hour

    const currentCost = inHouseCost + freelanceCost + editingCost + toolsCost
    const projectedCost = currentCost * 0.48 // 52% reduction
    const savings = currentCost - projectedCost
    const savingsPercentage = (savings / currentCost) * 100

    setResults({
      currentCost,
      projectedCost,
      savings,
      savingsPercentage,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Enterprise Content Cost Calculator</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Input Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="contentPieces">Number of Content Pieces per Month</Label>
                <Input
                  id="contentPieces"
                  name="contentPieces"
                  type="number"
                  value={inputs.contentPieces}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="avgWordCount">Average Word Count per Piece</Label>
                <Input
                  id="avgWordCount"
                  name="avgWordCount"
                  type="number"
                  value={inputs.avgWordCount}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="inHouseWriterSalary">In-House Writer Annual Salary ($)</Label>
                <Input
                  id="inHouseWriterSalary"
                  name="inHouseWriterSalary"
                  type="number"
                  value={inputs.inHouseWriterSalary}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="freelanceWriterRate">Freelance Writer Rate ($ per word)</Label>
                <Input
                  id="freelanceWriterRate"
                  name="freelanceWriterRate"
                  type="number"
                  step="0.01"
                  value={inputs.freelanceWriterRate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="editorSalary">Editor Annual Salary ($)</Label>
                <Input
                  id="editorSalary"
                  name="editorSalary"
                  type="number"
                  value={inputs.editorSalary}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="toolsCost">Monthly Tools and Software Cost ($)</Label>
                <Input
                  id="toolsCost"
                  name="toolsCost"
                  type="number"
                  value={inputs.toolsCost}
                  onChange={handleInputChange}
                />
              </div>
              <Button onClick={calculateCosts}>Calculate Savings</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cost Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Current Monthly Cost</Label>
                <p className="text-2xl font-bold">${results.currentCost.toFixed(2)}</p>
              </div>
              <div>
                <Label>Projected Monthly Cost with Our Solution</Label>
                <p className="text-2xl font-bold text-green-600">${results.projectedCost.toFixed(2)}</p>
              </div>
              <div>
                <Label>Monthly Savings</Label>
                <p className="text-2xl font-bold text-blue-600">${results.savings.toFixed(2)}</p>
              </div>
              <div>
                <Label>Savings Percentage</Label>
                <p className="text-2xl font-bold text-purple-600">{results.savingsPercentage.toFixed(2)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

