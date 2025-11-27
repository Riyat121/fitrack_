import { Zap, Target, TrendingUp } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Workouts",
      description: "30-minute sessions designed for maximum results. No equipment needed, any time, anywhere.",
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "AI-powered workout recommendations tailored to your goals, fitness level, and preferences.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Progress",
      description: "Track your performance with instant metrics and celebrate milestones along your journey.",
    },
  ]

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Why Choose Our Platform</h2>
        <p className="text-lg text-muted-foreground">Everything you need to transform your fitness journey</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div
              key={index}
              className="flex flex-col items-start p-8 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-300"
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-lg">
                <IconComponent className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>

              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
