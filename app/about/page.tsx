import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Mood Food Matcher</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Discover how your food choices can impact your emotional wellbeing.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            At Mood Food Matcher, we believe that food is more than just fuel for your body—it's also fuel for your mind
            and emotions. Our mission is to help people understand the connection between what they eat and how they
            feel, and to provide personalized food recommendations based on their current emotional state.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">The Science Behind Food and Mood</h2>
          <p>
            The connection between food and mood is well-established in scientific research. Certain foods can influence
            the production of neurotransmitters like serotonin and dopamine, which play crucial roles in regulating
            mood, sleep, and stress levels.
          </p>
          <p>
            For example, foods rich in omega-3 fatty acids, such as fatty fish, have been linked to lower rates of
            depression. Similarly, foods high in tryptophan, like turkey and bananas, can boost serotonin production,
            which can help improve mood and promote better sleep.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How Our Quiz Works</h2>
          <p>
            Our mood assessment quiz asks a series of questions about your current emotional state, energy levels, sleep
            quality, and other factors that can influence your mood. Based on your responses, our algorithm determines
            your current mood profile and recommends specific foods that research suggests may help improve or maintain
            your emotional wellbeing.
          </p>
          <p>
            While our recommendations are based on scientific research, they are not intended to replace professional
            medical advice. If you're experiencing persistent mood issues, we encourage you to speak with a healthcare
            provider.
          </p>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/quiz/start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            >
              Start Your Mood Journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
