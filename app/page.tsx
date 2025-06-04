import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smile, UtensilsCrossed } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm dark:bg-yellow-800">
                  Find your perfect food match
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Mood Food Matcher
                  <span className="ml-2 inline-flex">
                    <Smile className="h-10 w-10 text-yellow-500 animate-bounce" />
                    <UtensilsCrossed
                      className="h-10 w-10 text-orange-500 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover what foods will boost your mood based on how you're feeling right now. Our science-backed
                  recommendations help you eat for your emotions.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/quiz/start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                  >
                    Start Your Mood Journey
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-yellow-100 px-3 py-1 text-sm dark:bg-yellow-800">
                  <span>How It Works</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Food for Every Feeling</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our quiz analyzes your current emotional state through a series of questions. Based on your responses,
                  we'll recommend foods scientifically shown to help with your specific mood.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4 rounded-lg border p-6 shadow-sm">
                  <div className="text-4xl">😊</div>
                  <div>
                    <h3 className="font-bold">Happy</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Celebrate your good mood with foods that maintain your positive energy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-6 shadow-sm">
                  <div className="text-4xl">😔</div>
                  <div>
                    <h3 className="font-bold">Sad</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Boost your spirits with foods that increase serotonin and dopamine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-6 shadow-sm">
                  <div className="text-4xl">😤</div>
                  <div>
                    <h3 className="font-bold">Stressed</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Calm your mind with foods that reduce cortisol and promote relaxation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © 2024 Mood Food Matcher. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
