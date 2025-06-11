"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
         <img src="/images/branding/moodAnongUlamLogoWithoutText.png" alt="Mood! Anong Ulam? Logo" className="w-8 h-8" />
          <span className="hidden sm:inline-block">Mood! Anong Ulam?</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/quiz/start" className="text-sm font-medium hover:underline underline-offset-4">
            Start Quiz
          </Link>
          <ModeToggle />
        </nav>
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 pb-6">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/quiz/start"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Quiz
            </Link>
            <div className="pt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
