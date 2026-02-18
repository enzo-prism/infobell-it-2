import type { NavItem } from "./site"
import {
  CAPABILITY_DETAILS,
  CAPABILITY_SUMMARIES,
  type CapabilitySlug,
  type ExpertiseIcon,
} from "./capabilities"

export const HERO_CONTENT = {
  heading: "Empowering the Future Through Innovative IT Solutions for the AI Era",
  description:
    "Infobell IT is a technology company dedicated to product development and advanced services, specializing in artificial intelligence, high-performance computing, modernization and cloud migration, and performance benchmarking and optimization. We offer a portfolio of customizable product frameworks for end-to-end automation, AI-powered recommendation engines, and advanced pricing and sustainability analytics.",
  video: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_RZ2IuXf5KJySpZYoJ79PRYLLui8A/7yZSHesO25omcOT0E7bwkb/public/media/Infobell-at-AMD-AI-Day-2025.mp4",
    title: "Infobell IT at AMD Advancing AI 2025",
    caption: "Infobell IT AI Solutions",
  },
}

export const IFX_HIGHLIGHT = {
  image: "/images/products/IFX.png",
  title: "Introducing Infobell IT Inference Framework eXpress (IFX)",
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
  "performance",
  "hpc",
  "cloud-native",
  "compliance",
  "sustainability",
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

export type HeroCenterSlide = {
  slug: CapabilitySlug
  title: string
  tagline: string
  summary: string
  href: string
  hoverImageSrc: string
}

const AI_HERO_TAGLINE = "Identify. Implement. Optimize Enterprise AI"
const PERFORMANCE_HERO_TAGLINE = "Every release. Benchmark-proven"
const HPC_HERO_TAGLINE = "Benchmark. Optimize. Scale with Confidence."
const CLOUD_NATIVE_HERO_TAGLINE = "Ship Faster with Resilient, Observable Platforms."
const COMPLIANCE_HERO_TAGLINE = "Secure by Design, Auditable by Default."
const SUSTAINABILITY_HERO_TAGLINE = "Make every workload measurable—and accountable."

const HERO_CENTER_TITLE_OVERRIDES: Partial<Record<CapabilitySlug, string>> = {
  hpc: "High-Performance Computing Services",
  performance: "Enterprise Performance Engineering",
  "cloud-native": "Cloud-Native Development and Migration Services",
  compliance: "Compliance and Confidential Computing Solutions",
  sustainability: "Carbon Footprint and Sustainability Services",
}

const HERO_CENTER_SUMMARY_OVERRIDES: Partial<Record<CapabilitySlug, string>> = {
  ai: "Building enterprise-ready AI solutions that drive automation, intelligence, and scalability.",
  hpc: "Optimizing workloads for faster, more efficient computation across clusters and cloud platforms.",
  "cloud-native": "Designing full-stack platforms, modernizing monoliths, and automating delivery pipelines.",
  compliance:
    "Protecting sensitive data, workloads, and regulated workflows through confidential computing architectures.",
  sustainability:
    "Enabling low-carbon operations and reducing emissions through automated observability, tailored FinOps, and energy-aware architectures.",
  performance:
    "Optimizing software stacks through benchmarking, debugging, and tuning to deliver repeatable, production-grade results.",
}

const HERO_CENTER_TAGLINES: Record<CapabilitySlug, string> = {
  ai: AI_HERO_TAGLINE,
  hpc: HPC_HERO_TAGLINE,
  sustainability: SUSTAINABILITY_HERO_TAGLINE,
  performance: PERFORMANCE_HERO_TAGLINE,
  "cloud-native": CLOUD_NATIVE_HERO_TAGLINE,
  compliance: COMPLIANCE_HERO_TAGLINE,
}

const HERO_CENTER_HOVER_IMAGES: Record<CapabilitySlug, string> = {
  ai: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765941122/ai_clbw4l.webp",
  performance:
    "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765941122/performance_engineering_olh47v.webp",
  compliance:
    "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765941122/compliance_and_confidential_computing_ndspjs.webp",
  hpc: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765941121/high-performance-computing_fnnjat.webp",
  sustainability:
    "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765941122/carbon_footprint_and_sustainability_yqihpa.webp",
  "cloud-native":
    "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765941122/cloud_native_development_and_migration_jnbfxu.webp",
}

export const HERO_CENTER_SLIDES: HeroCenterSlide[] = HOME_CAPABILITY_ORDER.map((slug) => {
  const capability = CAPABILITY_SUMMARIES[slug]

  return {
    slug,
    title: HERO_CENTER_TITLE_OVERRIDES[slug] ?? `${capability.title} Services`,
    tagline: HERO_CENTER_TAGLINES[slug],
    summary: HERO_CENTER_SUMMARY_OVERRIDES[slug] ?? capability.summary,
    href: capability.href,
    hoverImageSrc: HERO_CENTER_HOVER_IMAGES[slug],
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
  {
    label: "Angular JS",
    logo: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1771444517/Angular_nvgq6j_1_v8ifcg.webp",
    href: "https://angularjs.org",
  },
  { label: "Vue JS", logo: "/images/tech/vuejs.png", href: "https://vuejs.org" },
  {
    label: "Node.js",
    logo: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1771444517/nodejs_1_wns5yc.webp",
    href: "https://nodejs.org",
  },
  {
    label: "Java",
    logo: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1771444517/java_1_f5hgpy.webp",
    href: "https://www.java.com",
  },
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
    logo: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1771444628/openshift_1_i1lp3i.webp",
    href: "https://www.redhat.com/en/technologies/cloud-computing/openshift",
  },
]
