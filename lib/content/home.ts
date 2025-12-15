import type { NavItem } from "./site"
import {
  CAPABILITY_SUMMARIES,
  type CapabilitySlug,
  type ExpertiseIcon,
} from "./capabilities"

export const HERO_CONTENT = {
  heading: "Empowering the future through innovative IT solutions for AI Era.",
  description:
    "Infobell IT is a company dedicated to product development and advanced services, specializing in artificial intelligence, high-performance computing, modernization and cloud migration, and performance benchmarking and optimization. We offer a dozen customizable product frameworks for end-to-end automation, AI recommendation engines, and pricing and sustainability analysis.",
  video: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_RZ2IuXf5KJySpZYoJ79PRYLLui8A/7yZSHesO25omcOT0E7bwkb/public/media/Infobell-at-AMD-AI-Day-2025.mp4",
    title: "Infobell IT at AMD Advancing AI 2025",
    caption: "Infobell IT AI Solutions",
  },
}

export type HeroPillar = {
  title: string
  summary: string
  icon: ExpertiseIcon
  href: string
}

export const HERO_PILLARS: HeroPillar[] = [
  {
    title: "Product Development & Services",
    summary: "Global teams delivering product engineering and advanced IT services.",
    icon: "shield",
    href: "/contact",
  },
  {
    title: "Artificial Intelligence",
    summary: "Enterprise AI programs built for speed, scale, and measurable business value.",
    icon: "brain",
    href: "/ai",
  },
  {
    title: "High-Performance Computing",
    summary: "HPC expertise that accelerates compute-heavy workloads and benchmarking labs.",
    icon: "cpu",
    href: "/hpc",
  },
  {
    title: "Modernization & Cloud Migration",
    summary: "Cloud-native modernization and migration strategies across hybrid environments.",
    icon: "cloud",
    href: "/cloud-native",
  },
  {
    title: "Benchmarking & Optimization",
    summary: "Performance benchmarking and optimization across applications, infra, and AI stacks.",
    icon: "gauge",
    href: "/performance",
  },
  {
    title: "Product Framework Accelerators",
    summary: "Customizable frameworks for automation, recommendations, pricing, and sustainability analysis.",
    icon: "leaf",
    href: "/#products",
  },
]

export const IFX_HIGHLIGHT = {
  image: "/images/products/IFX.png",
  title: "Introducing Infobell Inference Framework eXpress (IFX)",
  description:
    "Inference Framework eXpress is a scalable, open-source LLM inference stack engineered for performance, transparency, and enterprise readiness.",
  href: "/ai/ifx",
}

type BaseContentItem = {
  title: string
  description: string
}

export type ExpertiseItem = BaseContentItem & {
  icon: ExpertiseIcon
  slug: CapabilitySlug
  summary: string
  href: string
}

const HOME_CAPABILITY_ORDER: CapabilitySlug[] = [
  "ai",
  "hpc",
  "sustainability",
  "performance",
  "cloud-native",
  "compliance",
]

export const CORE_EXPERTISE: ExpertiseItem[] = HOME_CAPABILITY_ORDER.map((slug) => {
  const capability = CAPABILITY_SUMMARIES[slug]
  return {
    title: capability.title,
    icon: capability.icon,
    slug: capability.slug,
    summary: capability.summary,
    href: capability.href,
    description: capability.highlights.join("; "),
  }
})

export type ProductOffering = BaseContentItem & {
  image: string
  cta?: NavItem
  slug: string
}

export const SERVICE_PRODUCTS: ProductOffering[] = [
  {
    title: "ConvoGene",
    description: "Customizable ChatBot for enterprises.",
    image: "/images/products/ConvoGene.jpeg",
    cta: { label: "Live Demo", href: "https://convogene.ai", external: true },
    slug: "convogene",
  },
  {
    title: "Transcribe",
    description:
      "A software solution intelligent enough to comprehend and record multi-person conversations across meetings or support calls.",
    image: "/images/products/SpeechRecognition.png",
    slug: "transcribe",
  },
  {
    title: "Cloud Migration Advisor",
    description:
      "A solution to calculate cloud management costs and suggest ways to reduce expenditure by optimizing processes.",
    image: "/images/products/CloudMigration.png",
    slug: "cloud-migration-advisor",
  },
  {
    title: "Carbon Calculator",
    description: "Track and analyze cloud carbon emissions, minimizing environmental impact.",
    image: "/images/products/CarbonFootprint.png",
    slug: "carbon-calculator",
  },
  {
    title: "Cloud Control",
    description: "Optimizing private cloud infrastructure with advanced analytics.",
    image: "/images/products/cloudcontrol.png",
    slug: "cloud-control",
  },
  {
    title: "EchoSwift",
    description: "An inference benchmark for Large Language Models (LLMs).",
    image: "/images/products/EchoSwift.png",
    slug: "echoswift",
  },
  {
    title: "DocPrep for RAG",
    description:
      "Enable LLM-based Retrieval Augmented Generation pipelines for large scale document discovery and transformation.",
    image: "/images/products/DocPrep.png",
    slug: "docprep-for-rag",
  },
  {
    title: "VAST",
    description: "Convert video and audio into multilingual, citation-backed text summaries.",
    image: "/images/products/vast.png",
    slug: "vast",
  },
  {
    title: "SmartE",
    description:
      "Evaluate images for fast and explainable deformity assessments, enabling business analysis swiftly.",
    image: "/images/products/smarte.png",
    slug: "smarte",
  },
]

export type TechStackItem = {
  label: string
  logo: string
  href: string
}

export const TECH_STACK: TechStackItem[] = [
  { label: "React JS", logo: "/images/tech/react.png", href: "https://react.dev" },
  { label: "Angular JS", logo: "/images/tech/angular.png", href: "https://angularjs.org" },
  { label: "Vue JS", logo: "/images/tech/vuejs.png", href: "https://vuejs.org" },
  { label: "Node.js", logo: "/images/tech/nodejs.png", href: "https://nodejs.org" },
  { label: "Java", logo: "/images/tech/java.png", href: "https://www.java.com" },
  { label: "Golang", logo: "/images/tech/golang.png", href: "https://go.dev" },
  { label: "Python", logo: "/images/tech/python.png", href: "https://www.python.org" },
  { label: "C Language", logo: "/images/tech/c.png", href: "https://en.cppreference.com/w/c" },
  { label: "Kubernetes", logo: "/images/tech/kubernetes.png", href: "https://kubernetes.io" },
  { label: "Tanzu Kubernetes Grid", logo: "/images/tech/tanzu.png", href: "https://tanzu.vmware.com/kubernetes-grid" },
  { label: "Docker", logo: "/images/tech/docker.png", href: "https://www.docker.com" },
  { label: "Big Data", logo: "/images/tech/bigdata.png", href: "https://hadoop.apache.org" },
  { label: "Linux Kernel", logo: "/images/tech/linux.png", href: "https://www.kernel.org" },
  { label: "VMware", logo: "/images/tech/vmware.png", href: "https://www.vmware.com" },
  {
    label: "OpenShift",
    logo: "/images/tech/openshift.png",
    href: "https://www.redhat.com/en/technologies/cloud-computing/openshift",
  },
]
