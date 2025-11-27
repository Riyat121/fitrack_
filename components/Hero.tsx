"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export  default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
              Transform Your Body, <span className="text-primary">Transform Your Life</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Join thousands of people achieving their fitness goals with personalized workouts, expert guidance, and a
              supportive community.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8 h-12 text-base"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-muted-foreground text-foreground hover:bg-card rounded-full px-8 h-12 text-base bg-transparent"
            >
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-8 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/40 border border-primary/20 flex items-center justify-center text-xs font-semibold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">50K+</span> active members
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">4.9★</span> rated by members
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
