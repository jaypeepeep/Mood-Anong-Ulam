// /app/api/analyze-mood/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const answers = body.answers // { "1": "low", "2": "sad", ..., "10": "no_laugh" }

const prompt = `
You are a friendly and caring Filipino Gen Z mood analyzer.

You will be given a complete list of quiz answers from a user. Use this data to:
1. Analyze their emotional state based on all inputs.
2. Determine their primary mood.
3. Give a fun, lighthearted description using Filipino Gen Z humor — make it feel like advice or comfort from a friend, not a roast.
4. Suggest exactly 10 Filipino or locally available foods that match BOTH their current mood and the time of day.

⚠️ DO NOT ignore the time of day. It’s very important for choosing the right type of food (breakfast vs. lunch vs. pang-puyat, etc.)

Return a JSON object in this **exact format**:

{
  "mood": "short label like 'sad' or 'anxious'",
  "emoji": "emoji that matches the mood",
  "description": "a short, brutally honest roast in Gen Z tone — be witty, over-the-top, and shameless but relatable. Parang tropa mong nang-aasar pero may malasakit.",
  "foods": [
    {
      "name": "Filipino or locally available food",
      "emoji": "🍲",
      "benefit": "short benefit of why this food helps with the mood"
    }
    // exactly 10 items total
  ]
}

🧠 Things to consider when analyzing their mood:
- Energy level (Question 1)
- Mood/vibe (Question 2)
- Sleep quality (Question 3)
- Time of day (Question 4)
- Goal for food (Question 5)
- Social connection (Question 6)
- Thinking pattern (Question 7)
- Motivation (Question 8)
- Physical tension (Question 9)
- Laughter level (Question 10)

📅 Time of day (Question 4) must influence the types of food you suggest:
- "Umaga" – light or breakfast-type food (ex: taho, pan de sal, kape, champorado)
- "Tanghali" – heavier meals (ex: sinigang, adobo, tilapia, gulay)
- "Gabi na" – comforting sabaw or light dinner food (ex: tinola, arroz caldo, pancit)
- "Dis-oras na ng gabi" – pang-puyat or midnight cravings (ex: chichirya, pancit canton, leftover ulam, mainit na sabaw)

❌ Do not use brand names
✅ Use only realistic Pinoy foods — carinderia staples, lutong bahay, or snacks you'd find in a sari-sari store

Now here are the user’s answers to the quiz:

${JSON.stringify(answers)}
`;


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
