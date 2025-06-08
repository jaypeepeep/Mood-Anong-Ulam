"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function QuizStart() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 10

  const questions = [
  {
    question: "How would you describe your current energy level?",
    options: [
      { text: "Very low, I feel drained", emoji: "🔋", value: "low" },
      { text: "Moderate, I'm okay", emoji: "⚡", value: "moderate" },
      { text: "High, I feel energetic", emoji: "⚡⚡", value: "high" },
    ],
  },
  {
    question: "How would you describe your current mood?",
    options: [
      { text: "Sad or down", emoji: "😔", value: "sad" },
      { text: "Anxious or stressed", emoji: "😰", value: "anxious" },
      { text: "Content or happy", emoji: "😊", value: "happy" },
      { text: "Irritable or angry", emoji: "😠", value: "angry" },
    ],
  },
  {
    question: "How has your sleep been recently?",
    options: [
      { text: "Poor, I'm not sleeping well", emoji: "😴", value: "poor" },
      { text: "Average, could be better", emoji: "💤", value: "average" },
      { text: "Good, I'm well-rested", emoji: "🛌", value: "good" },
    ],
  },
  {
    question: "What time of day is it for you?",
    options: [
      { text: "Morning", emoji: "🌅", value: "morning" },
      { text: "Afternoon", emoji: "☀️", value: "afternoon" },
      { text: "Evening", emoji: "🌆", value: "evening" },
      { text: "Night", emoji: "🌙", value: "night" },
    ],
  },
  {
    question: "What are you looking to achieve with food right now?",
    options: [
      { text: "Boost my energy", emoji: "🔋", value: "energy" },
      { text: "Improve my mood", emoji: "😊", value: "mood" },
      { text: "Relax and calm down", emoji: "😌", value: "relax" },
      { text: "Help me focus", emoji: "🧠", value: "focus" },
    ],
  },
  {
    question: "Have you felt socially connected today?",
    options: [
      { text: "Very disconnected", emoji: "😶", value: "isolated" },
      { text: "Somewhat connected", emoji: "👥", value: "somewhat_connected" },
      { text: "Very connected", emoji: "🤝", value: "connected" },
    ],
  },
  {
    question: "What best describes your current thinking pattern?",
    options: [
      { text: "Racing thoughts", emoji: "💭💨", value: "racing" },
      { text: "Mostly calm", emoji: "💭", value: "calm" },
      { text: "Hard to focus", emoji: "😵‍💫", value: "unfocused" },
    ],
  },
  {
    question: "Have you felt a sense of purpose or motivation today?",
    options: [
      { text: "Not at all", emoji: "🛑", value: "no_motivation" },
      { text: "A little", emoji: "⚙️", value: "some_motivation" },
      { text: "Very motivated", emoji: "🚀", value: "high_motivation" },
    ],
  },
  {
    question: "How tense or relaxed does your body feel?",
    options: [
      { text: "Very tense or tight", emoji: "💢", value: "tense" },
      { text: "Neutral", emoji: "😐", value: "neutral" },
      { text: "Loose and relaxed", emoji: "🧘‍♂️", value: "relaxed" },
    ],
  },
  {
    question: "How often have you laughed or smiled today?",
    options: [
      { text: "Not at all", emoji: "😶", value: "no_laugh" },
      { text: "Once or twice", emoji: "🙂", value: "some_laugh" },
      { text: "Multiple times", emoji: "😄", value: "lots_laugh" },
    ],
  },
]


  const [answers, setAnswers] = useState<Record<number, string>>({})

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [step]: value })

    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Calculate mood based on answers
      router.push(`/quiz/results?${new URLSearchParams(answers as Record<string, string>).toString()}`)
    }
  }

  const currentQuestion = questions[step - 1]

  return (
    <div className="container max-w-md py-12">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">
            Question {step} of {totalSteps}
          </CardTitle>
          <CardDescription className="text-center">Let's figure out your mood</CardDescription>
          <Progress value={(step / totalSteps) * 100} className="h-2" />
        </CardHeader>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-6 text-center">{currentQuestion.question}</h2>
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-4 px-6 justify-start text-left flex items-center gap-3 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                onClick={() => handleOptionSelect(option.value)}
              >
                <span className="text-2xl">{option.emoji}</span>
                <span>{option.text}</span>
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          {step === 1 && <div />}
          <div className="text-sm text-muted-foreground">
            {step} of {totalSteps}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
