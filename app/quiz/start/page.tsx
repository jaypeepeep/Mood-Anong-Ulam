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
    question: "Kamusta energy mo ngayon?",
    options: [
      { text: "Sagad na, parang lowbat", emoji: "🔋", value: "low" },
      { text: "Sakto lang, kayang-kaya pa", emoji: "⚡", value: "moderate" },
      { text: "Full charge, ready to go!", emoji: "⚡⚡", value: "high" },
    ],
  },
  {
    question: "Anong vibe mo ngayon?",
    options: [
      { text: "Medyo malungkot", emoji: "😔", value: "sad" },
      { text: "Kabado o stressed", emoji: "😰", value: "anxious" },
      { text: "Chill lang, masaya", emoji: "😊", value: "happy" },
      { text: "Mainit ang ulo", emoji: "😠", value: "angry" },
    ],
  },
  {
    question: "Kamusta tulog mo lately?",
    options: [
      { text: "Wasak, kulang sa tulog", emoji: "😴", value: "poor" },
      { text: "Pwede na, sakto lang", emoji: "💤", value: "average" },
      { text: "Solid, well-rested", emoji: "🛌", value: "good" },
    ],
  },
  {
    question: "Anong oras na diyan?",
    options: [
      { text: "Umaga", emoji: "🌅", value: "morning" },
      { text: "Tanghali", emoji: "☀️", value: "afternoon" },
      { text: "Gabi na", emoji: "🌆", value: "evening" },
      { text: "Dis-oras na ng gabi", emoji: "🌙", value: "night" },
    ],
  },
  {
    question: "Anong gusto mong ma-achieve sa pagkain ngayon?",
    options: [
      { text: "Dagdag energy", emoji: "🔋", value: "energy" },
      { text: "Ayusin mood ko", emoji: "😊", value: "mood" },
      { text: "Pampakalma lang", emoji: "😌", value: "relax" },
      { text: "Makafocus sana", emoji: "🧠", value: "focus" },
    ],
  },
  {
    question: "Kamusta connection mo sa ibang tao ngayon?",
    options: [
      { text: "Parang ako lang mag-isa", emoji: "😶", value: "isolated" },
      { text: "May kausap kahit papano", emoji: "👥", value: "somewhat_connected" },
      { text: "Connected and thriving", emoji: "🤝", value: "connected" },
    ],
  },
  {
    question: "Anong takbo ng isip mo ngayon?",
    options: [
      { text: "Sobrang bilis ng thoughts", emoji: "💭💨", value: "racing" },
      { text: "Kalma lang", emoji: "💭", value: "calm" },
      { text: "Di makafocus", emoji: "😵‍💫", value: "unfocused" },
    ],
  },
  {
    question: "May motivation ka ba today?",
    options: [
      { text: "Wala, parang ayoko gumalaw", emoji: "🛑", value: "no_motivation" },
      { text: "Keri lang, konti lang", emoji: "⚙️", value: "some_motivation" },
      { text: "Motivated and inspired", emoji: "🚀", value: "high_motivation" },
    ],
  },
  {
    question: "Kamusta katawan mo — tense ba o relax?",
    options: [
      { text: "Ang bigat ng pakiramdam", emoji: "💢", value: "tense" },
      { text: "Wala lang, normal lang", emoji: "😐", value: "neutral" },
      { text: "Relax na relax", emoji: "🧘‍♂️", value: "relaxed" },
    ],
  },
  {
    question: "May tawa o ngiti ka ba today?",
    options: [
      { text: "Walang tawa, seryoso day", emoji: "😶", value: "no_laugh" },
      { text: "Mga isa o dalawang beses", emoji: "🙂", value: "some_laugh" },
      { text: "Madami! Good vibes day", emoji: "😄", value: "lots_laugh" },
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
          <CardDescription className="text-center">Alamin natin kung anong mood trip mo today</CardDescription>
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
