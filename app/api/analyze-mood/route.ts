// /app/api/analyze-mood/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const answers = body.answers // { "1": "low", "2": "sad", ..., "10": "no_laugh" }

  const prompt = `
You are a mood analysis assistant. Based on the following quiz answers, determine the user's primary mood.

Respond with a JSON object in this exact format:
{
  "mood": "short label like 'sad' or 'anxious'",
  "emoji": "emoji that matches the mood",
   "description": "a short, brutally honest roast in Gen Z tone — be witty, over-the-top and shameless. Do not hold back.",
  "foods": [
    {
      "name": "Filipino or locally available food",
      "emoji": "🍲",
      "benefit": "short benefit of why this food helps with the mood"
    }
  ]
}

Important:
- Use only foods common in the Philippines or easy to find locally (e.g., sinigang, tuyo, manggang hilaw, Skyflakes, etc.)
- Include 3–5 items max
- You are a brutally honest Filipino Gen Z mood analyzer. Based on the quiz answers, give the user their current mood in the format below. Use Filipino humor and a tone that roasts them playfully but with love — like how friends bully each other.


Answers: ${JSON.stringify(answers)}
  `

const apiKey = process.env.GEMINI_API_KEY


const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ]
  })
})


  const data = await geminiResponse.json()

  console.log("Full Gemini response:", JSON.stringify(data, null, 2))


let aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}'
aiText = aiText.trim().replace(/^```json/, '').replace(/^```/, '').replace(/```$/, '').trim()

  console.log("Raw Gemini response:", aiText)
if (!aiText || aiText.trim()[0] !== "{") {
  return NextResponse.json({
    error: "Gemini did not return valid JSON",
    raw: aiText,
  }, { status: 500 })
}

try {
  const parsed = JSON.parse(aiText)

  // Optional safety check
  if (!parsed.mood || !parsed.emoji || !Array.isArray(parsed.foods)) {
    return NextResponse.json({ error: "Missing fields", raw: parsed }, { status: 500 })
  }

  return NextResponse.json(parsed)
} catch (err) {
  console.error("Parse error:", err)
  return NextResponse.json({ error: "Failed to parse Gemini response", raw: aiText }, { status: 500 })
}
}
