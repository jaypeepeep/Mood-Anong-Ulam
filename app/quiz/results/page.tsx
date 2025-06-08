"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type MoodResult = {
  mood: string
  emoji: string
  description: string
  foods: {
    name: string
    emoji: string
    benefit: string
  }[]
}

export default function Results() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState<MoodResult | null>(null)
  const [loading, setLoading] = useState(true)

 useEffect(() => {
  const answers = {
    1: searchParams.get("1") || "",
    2: searchParams.get("2") || "",
    3: searchParams.get("3") || "",
    4: searchParams.get("4") || "",
    5: searchParams.get("5") || "",
    6: searchParams.get("6") || "",
    7: searchParams.get("7") || "",
    8: searchParams.get("8") || "",
    9: searchParams.get("9") || "",
    10: searchParams.get("10") || "",
  }

   // Skip if all empty
  if (Object.values(answers).every(value => value === "")) {
    setLoading(false)
    return
  }

const fetchResult = async () => {
  try {
    const res = await fetch("/api/analyze-mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    })
    const data = await res.json()

    if (data?.mood) {
      setResult(data)
    } else {
      console.error("Invalid result from API:", data)
      setResult(null)
    }
  } catch (err) {
    console.error("Error calling Gemini API", err)
    setResult(null)
  } finally {
    setLoading(false)
  }
}


  fetchResult()
}, [])

  if (loading) {
    return (
      <div className="container max-w-md py-12 flex justify-center">
        <div className="text-center">
          <div className="text-4xl animate-bounce mb-4">🔍</div>
          <p>Analyzing your mood...</p>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="container max-w-md py-12">
        <Card>
          <CardHeader>
            <CardTitle>Something went wrong</CardTitle>
            <CardDescription>We couldn't determine your mood</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/quiz/start">
              <Button>Try Again</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-md py-12">
      <Card>
        <CardHeader>
          <div className="flex justify-center mb-2">
            <span className="text-5xl">{result.emoji}</span>
          </div>
          <CardTitle className="text-center text-2xl">{result.mood}</CardTitle>
          <CardDescription className="text-center">{result.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-medium text-lg mb-4">Recommended Foods</h3>
          <div className="space-y-4">
            {result.foods.map((food, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-2xl">{food.emoji}</div>
                <div>
                  <h4 className="font-medium">{food.name}</h4>
                  <p className="text-sm text-muted-foreground">{food.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between pt-6">
          <Link href="/quiz/start">
            <Button variant="outline">Take Quiz Again</Button>
          </Link>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
