export type ProductSlug =
  | "convogene"
  | "transcribe"
  | "cloud-migration-advisor"
  | "carbon-calculator"
  | "cloud-control"
  | "echoswift"
  | "docprep-for-rag"
  | "vast"
  | "smarte"

export type ProductDetail = {
  slug: ProductSlug
  title: string
  tagline: string
  description: string
  image: string
  heroGradient?: string
  features: string[]
  cta: {
    label: string
    href: string
    external?: boolean
  }
  secondaryCta?: {
    label: string
    href: string
    external?: boolean
  }
}

export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    slug: "convogene",
    title: "ConvoGene",
    tagline: "Customizable enterprise chatbot for regulated industries.",
    description:
      "ConvoGene accelerates the launch of conversational copilots with reusable intents, domain adapters, and governance built in. Deploy it inside your environment or as a managed service, and bring your own LLM or connect to Infobell IFX.",
    image: "/images/products/ConvoGene.jpeg",
    features: [
      "Pre-built blueprints for IT ops, HR, support, and commerce use cases.",
      "Bring-your-own-model architecture with guardrails and prompt controls.",
      "Agent handoff, analytics, and multilingual support baked in.",
      "Security reviews and compliance accelerators for highly regulated clients.",
    ],
    cta: { label: "Live Demo", href: "https://convogene.ai", external: true },
    secondaryCta: { label: "Contact us", href: "/contact?subject=ConvoGene" },
  },
  {
    slug: "transcribe",
    title: "Transcribe",
    tagline: "Meeting intelligence that captures every voice.",
    description:
      "Transcribe records and understands multi-speaker conversations across meetings, support calls, and field operations. It delivers structured insights, speaker tagging, and instant summaries so teams can act faster.",
    image: "/images/products/SpeechRecognition.png",
    features: [
      "Real-time and batch transcription across dozens of languages.",
      "Domain dictionaries to boost accuracy for technical jargon.",
      "Redaction, sentiment, and action-item extraction out of the box.",
      "Secure deployments in customer VPCs or Infobell-managed cloud.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=Transcribe" },
  },
  {
    slug: "cloud-migration-advisor",
    title: "Cloud Migration Advisor",
    tagline: "Data-driven guidance for cost-smart migrations.",
    description:
      "Cloud Migration Advisor evaluates applications, infrastructure, and spend to recommend the optimal landing zone. It surfaces modernization waves, FinOps opportunities, and environmental impact to guide exec decisions.",
    image: "/images/products/CloudMigration.png",
    features: [
      "Automated discovery of app dependencies, utilization, and compliance needs.",
      "Scenario modeling for lift-and-shift, refactor, and SaaS replacement paths.",
      "Integrated TCO, carbon, and staffing impact dashboards.",
      "Templates for board updates and transformation playbooks.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=Cloud%20Migration%20Advisor" },
  },
  {
    slug: "carbon-calculator",
    title: "Carbon Calculator",
    tagline: "Continuous carbon intelligence for hybrid cloud.",
    description:
      "Infobell’s Carbon Calculator unifies telemetry, emission factors, and FinOps data so engineering, finance, and ESG leaders can see the footprint of every workload and make greener choices without guesswork.",
    image: "/images/products/CarbonFootprint.png",
    features: [
      "Granular carbon scoring for clusters, regions, and applications.",
      "Automated reporting packs for CSRD, SECR, and internal goals.",
      "Recommendations that align savings with performance guardrails.",
      "APIs to enrich existing dashboards or sustainability platforms.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=Carbon%20Calculator" },
  },
  {
    slug: "cloud-control",
    title: "Cloud Control",
    tagline: "AI-powered analytics for private and hybrid clouds.",
    description:
      "Cloud Control provides observability, cost, and performance insights for on-prem and hybrid environments. It highlights hotspots and optimization opportunities so platform teams can deliver SLOs and savings together.",
    image: "/images/products/cloudcontrol.png",
    features: [
      "Unified dashboards across VMware, OpenStack, and bare-metal estates.",
      "Anomaly detection and remediation playbooks fueled by ML.",
      "Capacity forecasting tied to spend, carbon, and resiliency targets.",
      "Role-based views for infra, finance, and business stakeholders.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=Cloud%20Control" },
  },
  {
    slug: "echoswift",
    title: "EchoSwift",
    tagline: "LLM benchmarking engineered for fairness and speed.",
    description:
      "EchoSwift is Infobell’s benchmark harness for Large Language Models. It measures latency, throughput, and cost under realistic prompts across CPUs, GPUs, and accelerators, helping teams prove enterprise readiness.",
    image: "/images/products/EchoSwift.png",
    features: [
      "Supports open-source and proprietary models, including IFX and Triton baselines.",
      "Workload templates for chat, summarization, retrieval, and coding tasks.",
      "Side-by-side comparisons across hardware generations and clouds.",
      "Automated report generation for leadership and marketing teams.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=EchoSwift" },
  },
  {
    slug: "docprep-for-rag",
    title: "DocPrep for RAG",
    tagline: "Enterprise document pipelines for Retrieval-Augmented Generation.",
    description:
      "DocPrep for RAG ingests, cleans, and enriches massive document corpora so LLM-powered copilots can retrieve trustworthy answers. It includes connectors, chunking strategies, and quality controls tailored to regulated data.",
    image: "/images/products/DocPrep.png",
    features: [
      "Built-in connectors for file shares, ECMs, knowledge bases, and data lakes.",
      "Content classification, redaction, and metadata tagging pipelines.",
      "Chunking, embedding, and validation recipes for multiple vector stores.",
      "Operational dashboards to monitor freshness, gaps, and user feedback.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=DocPrep%20for%20RAG" },
  },
  {
    slug: "vast",
    title: "VAST",
    tagline: "Video-Audio Summarization Toolkit for explainable narratives.",
    description:
      "VAST transforms long-form video and audio into multilingual, citation-backed summaries that legal, compliance, and operations teams can trust. It pairs speech-to-text, translation, and LLM summarization with human-friendly outputs.",
    image: "/images/products/vast.png",
    heroGradient: "from-sky-100 via-indigo-100 to-teal-100",
    features: [
      "Speaker detection and diarization for interviews, board meetings, and broadcasts.",
      "Multilingual translation with references back to source timestamps.",
      "Configurable summary styles (bullet, narrative, call-to-action).",
      "Review workflows so subject-matter experts can approve before publishing.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=VAST" },
  },
  {
    slug: "smarte",
    title: "SmartE",
    tagline: "Vision AI for fast, explainable deformity assessments.",
    description:
      "SmartE analyzes imagery from manufacturing, logistics, and healthcare to spot anomalies in seconds. It delivers explainable overlays, scoring, and workflow integrations so experts can approve or escalate with confidence.",
    image: "/images/products/smarte.png",
    heroGradient: "from-fuchsia-100 via-rose-100 to-amber-100",
    features: [
      "Supports 2D images, video frames, and multi-angle inspections.",
      "Explainable AI heatmaps and annotations for auditors and regulators.",
      "Integrations with MES, LIMS, and ticketing systems.",
      "Retraining pipelines that incorporate expert feedback.",
    ],
    cta: { label: "Contact us", href: "/contact?subject=SmartE" },
  },
]

export function getProductBySlug(slug: string) {
  return PRODUCT_DETAILS.find((product) => product.slug === slug)
}
