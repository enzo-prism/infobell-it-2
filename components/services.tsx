import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code, Database, Lock, Smartphone, Workflow, BarChart3, Headphones } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions built with modern technologies to solve your business challenges and drive growth.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture design and implementation for AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, threat detection, and protection strategies to safeguard your digital assets.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Workflow,
    title: "DevOps & Automation",
    description: "Streamline your development pipeline with CI/CD, infrastructure as code, and automation tools.",
  },
  {
    icon: BarChart3,
    title: "IT Consulting",
    description: "Strategic technology consulting to align your IT infrastructure with business objectives.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive IT Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            From strategy to implementation, we provide end-to-end technology solutions that empower your business to
            thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
