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
    // Get individual search parameter values to avoid infinite re-renders
    const energy = searchParams.get("1") || ""
    const mood = searchParams.get("2") || ""
    const sleep = searchParams.get("3") || ""
    const timeOfDay = searchParams.get("4") || ""
    const goal = searchParams.get("5") || ""

    // Only proceed if we have at least some answers
    if (!energy && !mood && !sleep && !timeOfDay && !goal) {
      setLoading(false)
      return
    }

    // Determine the primary mood based on answers
    let primaryMood: string
    let moodEmoji: string

    if (mood === "sad") {
      primaryMood = "sad"
      moodEmoji = "😔"
    } else if (mood === "anxious" || energy === "low") {
      primaryMood = "anxious"
      moodEmoji = "😰"
    } else if (mood === "angry") {
      primaryMood = "angry"
      moodEmoji = "😠"
    } else if (sleep === "poor" && goal === "relax") {
      primaryMood = "tired"
      moodEmoji = "😴"
    } else if (goal === "focus") {
      primaryMood = "unfocused"
      moodEmoji = "🧠"
    } else {
      primaryMood = "happy"
      moodEmoji = "😊"
    }

    // Get food recommendations based on mood
    const moodResults: Record<string, MoodResult> = {
      sad: {
        mood: "Feeling Down",
        emoji: "😔",
        description: "Foods that can boost serotonin and improve your mood",
        foods: [
          { name: "Dark Chocolate", emoji: "🍫", benefit: "Contains compounds that boost endorphins" },
          { name: "Bananas", emoji: "🍌", benefit: "Rich in vitamin B6 which helps produce serotonin" },
          { name: "Salmon", emoji: "🐟", benefit: "Omega-3 fatty acids support brain health" },
          { name: "Nuts and Seeds", emoji: "🥜", benefit: "Provide tryptophan, a precursor to serotonin" },
        ],
      },
      anxious: {
        mood: "Anxious or Stressed",
        emoji: "😰",
        description: "Foods that can help reduce stress and promote calmness",
        foods: [
          { name: "Green Tea", emoji: "🍵", benefit: "Contains L-theanine which promotes relaxation" },
          { name: "Avocados", emoji: "🥑", benefit: "Rich in B vitamins that help reduce stress" },
          { name: "Yogurt", emoji: "🥛", benefit: "Probiotics may reduce anxiety and stress" },
          { name: "Blueberries", emoji: "🫐", benefit: "Antioxidants help manage stress response" },
        ],
      },
      angry: {
        mood: "Irritable or Angry",
        emoji: "😠",
        description: "Foods that can help calm irritability and reduce inflammation",
        foods: [
          { name: "Chamomile Tea", emoji: "🍵", benefit: "Has calming effects that may reduce irritability" },
          { name: "Spinach", emoji: "🥬", benefit: "Magnesium helps regulate emotions" },
          { name: "Oranges", emoji: "🍊", benefit: "Vitamin C helps reduce stress hormones" },
          { name: "Whole Grains", emoji: "🌾", benefit: "Stabilize blood sugar to prevent mood swings" },
        ],
      },
      tired: {
        mood: "Tired or Fatigued",
        emoji: "😴",
        description: "Foods that can boost your energy naturally",
        foods: [
          { name: "Oatmeal", emoji: "🥣", benefit: "Provides steady energy release" },
          { name: "Eggs", emoji: "🥚", benefit: "Protein and B vitamins for sustained energy" },
          { name: "Sweet Potatoes", emoji: "🍠", benefit: "Complex carbs for lasting energy" },
          { name: "Water", emoji: "💧", benefit: "Hydration is essential for energy levels" },
        ],
      },
      unfocused: {
        mood: "Distracted or Unfocused",
        emoji: "🧠",
        description: "Foods that can help improve concentration and focus",
        foods: [
          { name: "Blueberries", emoji: "🫐", benefit: "Antioxidants improve brain function" },
          { name: "Fatty Fish", emoji: "🐟", benefit: "Omega-3s enhance brain health and focus" },
          { name: "Pumpkin Seeds", emoji: "🎃", benefit: "Zinc and magnesium support cognition" },
          { name: "Broccoli", emoji: "🥦", benefit: "Vitamin K helps with brain function" },
        ],
      },
      happy: {
        mood: "Content or Happy",
        emoji: "😊",
        description: "Foods that can help maintain your positive mood",
        foods: [
          { name: "Fermented Foods", emoji: "🥒", benefit: "Support gut health which affects mood" },
          { name: "Berries", emoji: "🍓", benefit: "Antioxidants fight inflammation" },
          { name: "Leafy Greens", emoji: "🥬", benefit: "Folate supports serotonin production" },
          { name: "Turmeric", emoji: "🟡", benefit: "Anti-inflammatory properties support brain health" },
        ],
      },
    }

    setResult(moodResults[primaryMood])
    setLoading(false)
  }, []) // Empty dependency array since we're reading searchParams directly inside the effect

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
