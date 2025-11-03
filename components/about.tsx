import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const achievements = [
  "500+ successful projects delivered",
  "98% client satisfaction rate",
  "15+ years of industry experience",
  "ISO 27001 certified security",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-foreground">About Infobell IT</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Building the Future of Technology
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Infobell IT, we combine deep technical expertise with innovative thinking to deliver solutions that
              transform businesses. Our team of certified professionals is dedicated to helping you navigate the
              complexities of modern technology.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in building long-term partnerships with our clients, understanding their unique challenges, and
              crafting solutions that drive measurable results.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg">Learn More About Us</Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                <img
                  src="/modern-technology-workspace-with-computers-and-tea.jpg"
                  alt="Infobell IT team workspace"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
