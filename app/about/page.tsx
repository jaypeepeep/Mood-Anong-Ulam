import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Mood! Anong Ulam?</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Minsan hindi natin alam kung anong gusto nating kainin lalo na kapag sabog ang mood. Dito pumapasok ang Mood! Anong Ulam? para tulungan kang pumili ng pagkain na bagay sa nararamdaman mo ngayon.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            Gusto naming gawing mas madali at mas masaya ang pagpili ng pagkain. Naniniwala kami na ang pagkain hindi lang para sa tiyan kundi para rin sa emosyon. Anuman ang vibe mo ngayon may pagkain na pwedeng tumulong magpasaya magpakalma o magbigay ng konting comfort.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Bakit Mood at Food?</h2>
          <p>
            Simple lang. Kapag masama ang pakiramdam, minsan masarap lang kumain ng bagay na swak sa mood. Kung pagod ka, baka isang manggang hilaw na may bagoong ang kailangan mo. Kung stressed ka, taho sa umaga o mainit na sabaw ng sinigang pwedeng magpakalma. Kung masaya ka, edi dagdagan pa natin ng halo-halo o inasal.
          </p>
          <p>
            Hindi ito tungkol sa diet o komplikadong konsepto. Gusto lang naming tulungan kang pumili ng makakain na makaka-boost ng araw mo kahit papaano.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How Our Quiz Works</h2>
          <p>
            Sagutan mo lang ang ilang tanong tungkol sa nararamdaman mo ngayon. Pagkatapos, bibigyan ka namin ng mga pagkain na bagay sa vibe mo. Syempre, mga pagkaing kilala at madaling makita sa kahit anong kanto o palengke sa Pinas.
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
              Start
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
