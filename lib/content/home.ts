import type { NavItem } from "./site"

export const HERO_CONTENT = {
  heading: "Empowering the future through innovative IT solutions.",
  description:
    "Infobell IT is a company dedicated to product development and advanced services, specializing in artificial intelligence, high-performance computing, modernization and cloud migration, and performance benchmarking and optimization. We offer a dozen customizable product frameworks for end-to-end automation, AI recommendation engines, and pricing and sustainability analysis.",
  pressAnnouncement: {
    label: "New! Press Release: Infobell Expands Collaboration with AMD to Accelerate Enterprise-Ready AI Innovation",
    href: "/press-releases/prease-release-amd-2025",
  },
  video: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_RZ2IuXf5KJySpZYoJ79PRYLLui8A/7yZSHesO25omcOT0E7bwkb/public/media/Infobell-at-AMD-AI-Day-2025.mp4",
    title: "Infobell IT at AMD Advancing AI 2025",
    caption: "Infobell IT AI Solutions",
  },
}

export const IFX_HIGHLIGHT = {
  image: "/images/products/IFX.png",
  title: "Introducing Infobell Inference Framework eXpress (IFX)",
  description:
    "Inference Framework eXpress is a scalable, open-source LLM inference stack engineered for performance, transparency, and enterprise readiness.",
  href: "/ai/ifx",
}

export type ExpertiseItem = {
  title: string
  description: string
}

export const CORE_EXPERTISE: ExpertiseItem[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Identifying use cases and deploying AI and ML solutions for enterprises; evaluating CPU and GPU technologies, creating Gen AI model applications and chatbots for sectors like IT operations, retail, healthcare, and real estate; overseeing data lifecycle management; conducting performance characterization for LLM systems; developing scalable tools and frameworks for natural language processing and image classification; partnering with industry leaders such as NVIDIA, AMD, and Intel.",
  },
  {
    title: "High Performance Computing",
    description:
      "Conducting rigorous performance benchmarking across bare-metal and cloud environments; fine-tuning compile time and runtime for applications; proficiency in porting and optimizing software; comprehensive support for designing and managing cluster infrastructure; specializing in computational fluid dynamics, finite element analysis, and tailored vertical solutions to meet diverse computational challenges.",
  },
  {
    title: "Carbon Footprint and Sustainability",
    description:
      "Leveraging innovative technologies for energy-efficient infrastructure and sustainable practices; monitoring and reducing carbon footprints through automation and continuous monitoring for improved performance and energy efficiency in cloud environments; integration with cloud cost analysis and lifecycle management tools; experience in energy efficiency standard benchmarks with a commitment to driving change toward a greener future.",
  },
  {
    title: "Performance Engineering",
    description:
      "Application performance analysis and characterization in on-premise and cloud environments; publishing industry-standard benchmarks (TPC, SPEC, MLPerf, etc.); fine-tuning workloads like databases, big data, high performance computing, and artificial intelligence for end customers; extensive experience in evaluating CPU, GPU, and system performance; automation framework for provisioning, management, and continuous monitoring; experience in root-cause analysis and multi-party resolution.",
  },
  {
    title: "Cloud Native Development",
    description:
      "Designing and deploying full-stack cloud native applications; migrating and modernizing legacy applications; experience in compliance and implementing high availability and business continuity strategies; specializing in cloud cost monitoring and optimization; tooling and end-to-end automation from deployment to lifecycle management; extensive expertise in Red Hat OpenShift Container Platform, VMware, and Nutanix HCI solutions.",
  },
  {
    title: "Compliance and Confidential Computing",
    description:
      "Assisting compliance teams in saving time and mitigating risks through automation and integrating digital compliance regulations into critical workflows; expertise across confidential computing technologies from industry leaders such as AMD, Intel, and ARM; employing specialized services to uphold the integrity of applications and workloads in cloud environments; experience in setting up controlled environments (sandboxes) for conducting performance evaluations of industry-vertical workloads.",
  },
]

export type ProductOffering = ExpertiseItem & {
  image: string
  cta?: NavItem
}

export const SERVICE_PRODUCTS: ProductOffering[] = [
  {
    title: "ConvoGene",
    description: "Customizable ChatBot for enterprises.",
    image: "/images/products/ConvoGene.jpeg",
    cta: { label: "Live Demo", href: "https://convogene.ai", external: true },
  },
  {
    title: "Transcribe",
    description:
      "A software solution intelligent enough to comprehend and record multi-person conversations across meetings or support calls.",
    image: "/images/products/SpeechRecognition.png",
  },
  {
    title: "Cloud Migration Advisor",
    description:
      "A solution to calculate cloud management costs and suggest ways to reduce expenditure by optimizing processes.",
    image: "/images/products/CloudMigration.png",
  },
  {
    title: "Carbon Calculator",
    description: "Track and analyze cloud carbon emissions, minimizing environmental impact.",
    image: "/images/products/CarbonFootprint.png",
  },
  {
    title: "Cloud Control",
    description: "Optimizing private cloud infrastructure with advanced analytics.",
    image: "/images/products/cloudcontrol.png",
  },
  {
    title: "EchoSwift",
    description: "An inference benchmark for Large Language Models (LLMs).",
    image: "/images/products/EchoSwift.png",
  },
  {
    title: "DocPrep for RAG",
    description:
      "Enable LLM-based Retrieval Augmented Generation pipelines for large scale document discovery and transformation.",
    image: "/images/products/DocPrep.png",
  },
  {
    title: "VAST",
    description: "Convert video and audio into multilingual, citation-backed text summaries.",
    image: "/images/products/vast.png",
  },
  {
    title: "SmartE",
    description:
      "Evaluate images for fast and explainable deformity assessments, enabling business analysis swiftly.",
    image: "/images/products/smarte.png",
  },
]

export const TECH_STACK = [
  "React JS",
  "Angular JS",
  "Vue JS",
  "Node Js",
  "Java",
  "Golang",
  "Python",
  "C",
  "Kubernetes",
  "Tanzu Kubernetes",
  "Docker",
  "Big Data",
  "Linux kernel",
  "VMware",
  "OpenShift",
]
