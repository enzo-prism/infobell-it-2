export type EducationItem = {
  institution: string
  program: string
  timeframe?: string
  details?: string[]
}

export type TeamMember = {
  name: string
  title: string
  image: string
  slug: string
  summary: string
  bio: string[]
  focusAreas: {
    label: string
    icon:
      | "cpu"
      | "cloud"
      | "lock"
      | "aperture"
      | "compass"
      | "network"
      | "layers"
      | "handshake"
      | "target"
      | "rocket"
  }[]
  highlights: { description: string; icon?: "target" | "rocket" | "workflow" | "building" | "star" }[]
  quote?: string
  location?: string
  education?: EducationItem[]
  socials?: { label: string; href: string }[]
}

export const TEAM_INTRO =
  "All companies face a dual challenge in today's fast-moving world. They must optimize their current IT solution while creating the future."

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: "Ramana Bandili",
    title: "CEO",
    image: "/images/team/RamanaBandili.jpeg",
    slug: "ramana-bandili",
    summary:
      "Ramana leads Infobell’s global strategy, pairing deep HPC expertise with a relentless focus on enterprise-ready AI outcomes.",
    bio: [
      "Ramana Bandili founded Infobell to help enterprises bridge the gap between research-grade innovation and production-grade reliability. He brings decades of experience across high-performance computing, infrastructure design, and advisory work for Fortune 500 engineering teams.",
      "Under his guidance, Infobell has scaled its AI factory approach—spanning benchmarking, LLM optimization, and sustainability strategy—while fostering close collaboration with silicon partners and enterprise CTO organizations.",
    ],
    focusAreas: [
      { label: "AI strategy", icon: "cpu" },
      { label: "Performance benchmarking", icon: "aperture" },
      { label: "Partner alliances", icon: "handshake" },
      { label: "Customer advisory", icon: "compass" },
    ],
    highlights: [
      { description: "Champions Infobell IFX and turnkey AI factory deployments in regulated industries.", icon: "target" },
      {
        description: "Trusted advisor to hyperscalers and semiconductor partners on HPC and AI infrastructure roadmaps.",
        icon: "workflow",
      },
      { description: "Speaker at AMD Advancing AI and performance forums worldwide.", icon: "star" },
    ],
    quote:
      "At Infobell, we don’t just build AI—we engineer it for performance, reliability, and enterprise scale.",
  },
  {
    name: "Karthik Krishna",
    title: "CTO",
    image: "/images/team/karthik.jpeg",
    slug: "karthik-krishna",
    summary:
      "Karthik architects Infobell’s platform capabilities, leading the engineering teams behind IFX, benchmarking labs, and AI-native services.",
    bio: [
      "With a background in systems engineering and product incubation, Karthik Krishna oversees Infobell’s technical roadmap—from silicon bring-up to cloud-native deployment blueprints.",
      "He directs multidisciplinary squads that ship reusable accelerators, sustaining toolchains, and RAG-ready data services for enterprise AI programs.",
    ],
    focusAreas: [
      { label: "Systems architecture", icon: "network" },
      { label: "Inference frameworks", icon: "layers" },
      { label: "DevEx tooling", icon: "aperture" },
      { label: "Observability", icon: "compass" },
    ],
    highlights: [
      { description: "Designed Infobell’s multi-cloud AI Factory reference architecture.", icon: "workflow" },
      { description: "Leads the ROCm and Kubernetes optimization workstreams for IFX.", icon: "rocket" },
      { description: "Mentors cross-functional guilds covering MLOps, FinOps, and sustainability.", icon: "target" },
    ],
  },
  {
    name: "Lax Sakalkale",
    title: "Chief Growth and Strategy Officer",
    image: "/images/team/lax.png",
    slug: "lax-sakalkale",
    location: "San Jose, California — Remote",
    summary:
      "Lax drives Infobell’s global expansion across AI, HPC, and cloud product engineering, pairing vision with go-to-market execution for chipmakers, cloud providers, and enterprise innovators.",
    bio: [
      "Lax Sakalkale is a visionary technology executive with 20+ years of leadership across AI, cloud, product strategy, and performance engineering. At Infobell he leads growth strategy, orchestrating AI-driven services, ISV performance engineering frameworks, and partner programs that connect innovation to measurable business outcomes.",
      "His teams help clients identify high-performing AI stacks, optimize LLM workloads, and adopt next-generation GPU/CPU and confidential computing architectures with confidence—accelerating time to value across regulated industries and hyperscale ecosystems.",
    ],
    focusAreas: [
      { label: "AI & Machine Learning", icon: "cpu" },
      { label: "Cloud Strategy", icon: "cloud" },
      { label: "Confidential Computing", icon: "lock" },
      { label: "GPU/CPU Performance Engineering", icon: "aperture" },
      { label: "Product Leadership", icon: "compass" },
      { label: "Multicloud Solutions", icon: "network" },
      { label: "SaaS Platforms", icon: "layers" },
      { label: "Strategic Partnerships", icon: "handshake" },
    ],
    highlights: [
      {
        description:
          "Executive Advisor at MarketEngine.ai—guided product strategy, fundraising narratives, and AI use-case validation for SMB-focused marketing automation.",
        icon: "target",
      },
      {
        description:
          "Executive Director, Cloud MDC Solutions at AMD—built the global Cloud Solutions Engineering team and launched 400+ AMD-powered offerings across major hyperscalers.",
        icon: "rocket",
      },
      {
        description:
          "Executive Director of Product Management at Cisco—defined the Cisco Multicloud Framework to simplify enterprise multicloud adoption.",
        icon: "workflow",
      },
      {
        description:
          "Senior Director of Product Management at CA Technologies—drove Big Data Analytics, SaaS innovation, and emerging tech strategy from the CTO’s office.",
        icon: "building",
      },
      {
        description:
          "Leadership roles at BEA Systems, Borland, Hewlett-Packard, and Unisys delivering foundational SOA, DevOps, and SaaS capabilities.",
        icon: "star",
      },
    ],
    education: [
      {
        institution: "MIT xPRO",
        program: "Designing and Building AI Products and Services",
        timeframe: "Oct 2023 – Dec 2023",
        details: [
          "Hands-on program taught by MIT professors covering AI-based product strategy, design, and delivery.",
          "Created an AI product proposal, applying machine learning and deep learning techniques across discovery, build, and deployment stages.",
          "Skills gained: AI ecosystem mapping, ML/DL, LLM workflows, AI infrastructure, business strategy, enterprise AI adoption.",
        ],
      },
      {
        institution: "Santa Clara University",
        program: "MBA, Marketing · Entrepreneurship · Management",
        timeframe: "May 1997 – May 2000",
        details: ["Won the university’s best business plan award."],
      },
      {
        institution: "University of Mumbai · S. P. College of Engineering",
        program: "BSEE, Electrical Engineering (Computer Software concentration)",
        timeframe: "1983 – 1987",
        details: ["Focused on electrical engineering fundamentals blended with early software systems design."],
      },
      {
        institution: "M.S. University, Baroda",
        program: "Electrical engineering coursework",
        details: ["Completed foundational studies prior to undergraduate specialization."],
      },
    ],
    socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/hilax/" }],
  },
  {
    name: "Malini Rao",
    title: "VP, Engineering",
    image: "/images/team/malini.jpeg",
    slug: "malini-rao",
    summary:
      "Malini leads delivery for Infobell’s AI, HPC, and modernization programs—ensuring each build is reliable, secure, and supportable.",
    bio: [
      "Malini Rao manages globally distributed delivery teams that execute modernization, data platform, and AI initiatives for enterprise clients.",
      "She established Infobell’s quality playbooks, blending compliance frameworks with agile release cadences to accelerate customer launches.",
    ],
    focusAreas: [
      { label: "Program delivery", icon: "network" },
      { label: "Quality engineering", icon: "aperture" },
      { label: "Cloud modernization", icon: "cloud" },
      { label: "People leadership", icon: "compass" },
    ],
    highlights: [
      { description: "Scaled Infobell’s delivery center of excellence spanning AI, cloud, and FinOps practices.", icon: "rocket" },
      { description: "Introduced reusable blueprints for secure, compliant deployment pipelines.", icon: "workflow" },
      { description: "Advocates for mentorship, inclusive teams, and continuous skills development.", icon: "target" },
    ],
  },
  {
    name: "Sharada Bose",
    title: "Sales and Strategy Advisor",
    image: "/images/team/Sharada.jpeg",
    slug: "sharada-bose",
    summary:
      "Sharada shapes Infobell’s market positioning, ensuring the portfolio resonates with customer challenges across regions and industries.",
    bio: [
      "Sharada Bose collaborates with Infobell leadership on long-range planning, pricing models, and strategic pursuits spanning AI, HPC, and sustainability.",
      "Her career includes executive roles in enterprise technology and consulting, where she launched global partner programs and AI transformation offerings.",
    ],
    focusAreas: [
      { label: "Sales strategy", icon: "target" },
      { label: "Market development", icon: "network" },
      { label: "Executive coaching", icon: "compass" },
      { label: "Demand generation", icon: "rocket" },
    ],
    highlights: [
      { description: "Advises on major pursuits across North America, Europe, and APAC.", icon: "target" },
      { description: "Guides solution packaging for Infobell’s AI and modernization kits.", icon: "workflow" },
      { description: "Supports board-level storytelling around ROI, governance, and resilience.", icon: "building" },
    ],
  },
]
