import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Database, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground">Trusted by 500+ businesses worldwide</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Transform Your Business with <span className="text-primary">Modern IT Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            We deliver cutting-edge technology solutions that drive innovation, enhance security, and accelerate your
            digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Custom Development</h3>
              <p className="text-sm text-muted-foreground text-center">Tailored solutions for your unique needs</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground text-center">Enterprise-grade security protection</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Cloud Solutions</h3>
              <p className="text-sm text-muted-foreground text-center">Scalable infrastructure for growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
