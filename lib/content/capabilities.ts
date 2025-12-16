export type ExpertiseIcon = "brain" | "cpu" | "leaf" | "gauge" | "cloud" | "shield"

export type CapabilitySlug =
  | "ai"
  | "hpc"
  | "sustainability"
  | "performance"
  | "cloud-native"
  | "compliance"

export type CapabilitySummary = {
  slug: CapabilitySlug
  title: string
  summary: string
  icon: ExpertiseIcon
  highlights: string[]
  href: string
}

export type CapabilityPageSlug = Exclude<CapabilitySlug, "ai">

export type CapabilitySection = {
  heading: string
  items: string[]
}

export type CapabilityDetail = {
  slug: CapabilityPageSlug
  title: string
  summary: string
  heroTagline: string
  overview: string[]
  sections: CapabilitySection[]
  useCases: string[]
  heroBackground: string
  cta: {
    heading: string
    body: string
    action: string
  }
}

export const CAPABILITY_SUMMARIES: Record<CapabilitySlug, CapabilitySummary> = {
  ai: {
    slug: "ai",
    title: "Artificial Intelligence",
    summary: "Building enterprise-ready AI solutions that drive automation, insight, and scale.",
    icon: "brain",
    href: "/ai",
    highlights: [
      "Identify high-impact AI and ML use cases for every industry.",
      "Evaluate CPU, GPU, and accelerator stacks for performance and cost.",
      "Create GenAI applications, copilots, and multimodal chatbots with secure data lifecycles.",
      "Operationalize LLM benchmarking, optimization, and observability for production environments.",
    ],
  },
  hpc: {
    slug: "hpc",
    title: "High Performance Computing",
    summary: "Optimizing workloads for faster, more efficient computation across clusters and clouds.",
    icon: "cpu",
    href: "/hpc",
    highlights: [
      "Conduct rigorous performance benchmarking across bare-metal and cloud environments.",
      "Fine-tune compile and runtime settings for complex engineering workloads.",
      "Design and manage cluster infrastructure for CFD, FEA, and scientific computing.",
      "Port and optimize software stacks across AMD, Intel, and NVIDIA ecosystems.",
    ],
  },
  sustainability: {
    slug: "sustainability",
    title: "Carbon Footprint and Sustainability",
    summary: "Reducing emissions with automated observability, tailored FinOps, and energy-aware architectures.",
    icon: "leaf",
    href: "/sustainability",
    highlights: [
      "Leverage cloud and edge telemetry to track carbon intensity in real time.",
      "Automate carbon accounting workflows across hybrid environments.",
      "Integrate lifecycle assessments with FinOps reporting and policy compliance.",
      "Advise on greener infrastructure choices without sacrificing performance.",
    ],
  },
  performance: {
    slug: "performance",
    title: "Performance Engineering",
    summary: "Benchmarking, debugging, and tuning software stacks for repeatable, production-grade results.",
    icon: "gauge",
    href: "/performance",
    highlights: [
      "Publish industry-standard benchmarks across TPC, SPEC, and MLPerf suites.",
      "Uncover root causes with workload tracing, profiling, and automation frameworks.",
      "Optimize databases, big data, HPC, and AI workloads for CPUs and GPUs.",
      "Build CI/CD-ready performance harnesses for continuous validation.",
    ],
  },
  "cloud-native": {
    slug: "cloud-native",
    title: "Cloud Native Development and Migration",
    summary: "Designing full-stack platforms, modernizing monoliths, and automating delivery pipelines.",
    icon: "cloud",
    href: "/cloud-native",
    highlights: [
      "Architect Kubernetes-based platforms on OpenShift, EKS, AKS, and VMware.",
      "Re-platform legacy applications into resilient microservices with modern DevSecOps.",
      "Instrument applications for FinOps, security, and lifecycle governance from day one.",
      "Automate deployments, testing, and rollback strategies across multi-cloud targets.",
    ],
  },
  compliance: {
    slug: "compliance",
    title: "Compliance and Confidential Computing",
    summary: "Protecting data, workloads, and regulated workflows with confidential computing patterns.",
    icon: "shield",
    href: "/compliance",
    highlights: [
      "Automate evidence gathering for SOC 2, ISO 27001, and industry frameworks.",
      "Implement confidential computing with AMD SEV, Intel TDX, and secure enclaves.",
      "Deploy controlled sandboxes for joint performance and security evaluations.",
      "Integrate policy engines directly into DevSecOps and data pipelines.",
    ],
  },
}

export const CAPABILITY_DETAILS: Record<CapabilityPageSlug, CapabilityDetail> = {
  hpc: {
    slug: "hpc",
    title: CAPABILITY_SUMMARIES.hpc.title,
    summary: CAPABILITY_SUMMARIES.hpc.summary,
    heroTagline: "Benchmark. Optimize. Scale fearless compute.",
    heroBackground: "from-indigo-600/20 via-background to-background",
    overview: [
      "Infobell’s HPC engineering teams combine benchmark rigor with real-world deployment expertise. We help silicon vendors, OEMs, hyperscalers, and enterprise labs squeeze every ounce of performance from their CPU, GPU, and accelerator investments.",
      "From compiler customization to scaled cluster orchestration, we translate proof points into sustained production gains. Each engagement includes reproducible configurations, automation playbooks, and knowledge transfer for your internal teams.",
    ],
    sections: [
      {
        heading: "Benchmarking & Optimization",
        items: [
          "SPECCPU, SPECworkstation, MLPerf, and customer-specific workloads tuned for AMD, Intel, and NVIDIA stacks.",
          "Compiler, library, and firmware optimization for CFD, FEA, seismic, genomics, and financial risk workloads.",
          "Performance regression harnesses that plug into CI/CD so labs can track drift over time.",
        ],
      },
      {
        heading: "Platform Engineering",
        items: [
          "Reference architectures for bare-metal clusters, cloud-native HPC, and hybrid bursting.",
          "Scheduling and orchestration with Slurm, Kubernetes, PBS, and cloud batch services.",
          "Advanced telemetry to correlate power, thermals, and workload efficiency.",
        ],
      },
      {
        heading: "Software Modernization",
        items: [
          "Porting legacy MPI/OpenMP codebases to modern toolchains and accelerators.",
          "Profiling and refactoring kernels to exploit CDNA, CUDA, ROCm, and oneAPI features.",
          "Hardening automation for provisioning, upgrades, and secure access.",
        ],
      },
    ],
    useCases: [
      "Hybrid HPC modernization for an industrial engineering firm migrating CFD workloads to AMD EPYC clusters.",
      "End-to-end MLPerf audit for a cloud provider validating MI300 accelerators before launch.",
      "Compiler retuning and automation that cut simulation runtimes by 38% for a semiconductor customer.",
    ],
    cta: {
      heading: "Need to benchmark or modernize your HPC estate?",
      body: "Infobell’s performance guild delivers turnkey assessments, automation, and knowledge transfer so your teams can move faster with confidence.",
      action: "Talk to our HPC team",
    },
  },
  sustainability: {
    slug: "sustainability",
    title: CAPABILITY_SUMMARIES.sustainability.title,
    summary: CAPABILITY_SUMMARIES.sustainability.summary,
    heroTagline: "Make every workload measurable—and accountable.",
    heroBackground: "from-emerald-500/15 via-background to-background",
    overview: [
      "Sustainability is now a board-level metric. Infobell connects engineering telemetry, FinOps data, and compliance workflows so you can measure, report, and reduce emissions without disrupting delivery velocity.",
      "We blend custom automation with off-the-shelf tooling, integrating the output into executive scorecards and regulatory templates for effortless audits.",
    ],
    sections: [
      {
        heading: "Carbon Intelligence Platform",
        items: [
          "Streaming data collectors for Kubernetes, VMs, and edge devices to normalize energy and carbon metrics.",
          "Automated emission factor lookups and regional intensity adjustments.",
          "Dashboards and alerts for engineering, finance, and ESG teams.",
        ],
      },
      {
        heading: "Process & Policy Integration",
        items: [
          "Workflow automation for sustainability reviews inside change-management pipelines.",
          "Tight coupling between FinOps, cost allocation, and sustainability KPIs.",
          "Supply-chain and partner data ingestion to complete your scope 3 view.",
        ],
      },
      {
        heading: "Advisory & Enablement",
        items: [
          "Cloud architecture reviews focused on greener defaults and carbon-aware scheduling.",
          "Workshops for engineering and operations teams on sustainable coding patterns.",
          "Playbooks for regulatory reporting (CSRD, SECR, SEC climate disclosures).",
        ],
      },
    ],
    useCases: [
      "Carbon calculator rollout that unified emissions and FinOps data for a global SaaS platform.",
      "Sustainability guardrails embedded into Terraform pipelines for a telco modernizing its edge footprint.",
      "Executive dashboards translating engineering metrics into ESG disclosures for a financial services firm.",
    ],
    cta: {
      heading: "Ready to operationalize sustainability?",
      body: "Bring engineering, finance, and ESG teams around a single source of truth powered by Infobell’s carbon intelligence playbooks.",
      action: "Schedule a sustainability review",
    },
  },
  performance: {
    slug: "performance",
    title: CAPABILITY_SUMMARIES.performance.title,
    summary: CAPABILITY_SUMMARIES.performance.summary,
    heroTagline: "Every release, benchmark-proven.",
    heroBackground: "from-amber-500/15 via-background to-background",
    overview: [
      "Performance engineering is more than a report—it’s a lifecycle. Our specialists embed with your product squads to design workloads, automate test harnesses, and translate findings into backlog-ready fixes.",
      "We align benchmarks with business KPIs, ensuring executive stakeholders understand the impact of tuning efforts.",
    ],
    sections: [
      {
        heading: "Benchmark Strategy",
        items: [
          "Customized benchmark suites across databases, analytics, storage, and AI pipelines.",
          "Capacity modeling and TCO comparisons for multi-tenant SaaS and platform products.",
          "Competitive analysis packages ready for marketing and sales enablement.",
        ],
      },
      {
        heading: "Engineering Enablement",
        items: [
          "Deep dive tracing and profiling with eBPF, perf, Flamegraphs, and vendor tools.",
          "Automation frameworks for provisioning, workload replay, and regression detection.",
          "Playbooks that link findings to Jira/ADO work items for rapid remediation.",
        ],
      },
      {
        heading: "Operations & Validation",
        items: [
          "Production telemetry correlation to validate lab outcomes post-deployment.",
          "Performance SLOs and governance models for platform teams.",
          "24/7 support for launch events and executive demos.",
        ],
      },
    ],
    useCases: [
      "Multi-region database scaling program that doubled throughput for a fintech platform.",
      "Performance bill of materials enabling a chip vendor to showcase OEM-ready benchmarks.",
      "Continuous regression lab for an ISV, cutting triage time from days to hours.",
    ],
    cta: {
      heading: "Interested in AI engineering or performance benchmarking?",
      body: "From lab design to launch readiness, Infobell keeps your workloads fast, predictable, and auditable.",
      action: "Connect with performance engineering",
    },
  },
  "cloud-native": {
    slug: "cloud-native",
    title: CAPABILITY_SUMMARIES["cloud-native"].title,
    summary: CAPABILITY_SUMMARIES["cloud-native"].summary,
    heroTagline: "Ship faster with resilient, observable platforms.",
    heroBackground: "from-sky-500/15 via-background to-background",
    overview: [
      "Infobell designs and operates cloud-native platforms that balance speed with governance. Whether you need a turnkey developer platform or a roadmap for gradual modernization, we bring repeatable patterns informed by dozens of production launches.",
      "Our squads pair application engineers with platform SREs so product roadmaps and operational excellence evolve together.",
    ],
    sections: [
      {
        heading: "Platform Engineering",
        items: [
          "Golden clusters on OpenShift, EKS, AKS, GKE, and VMware Tanzu with baked-in compliance.",
          "Secure multi-tenant networking, service mesh, and API gateways.",
          "Observability stacks that blend logs, metrics, traces, and cost telemetry.",
        ],
      },
      {
        heading: "Application Modernization",
        items: [
          "Domain-driven decomposition of monoliths into manageable services.",
          "Event-driven and streaming architectures leveraging Kafka, Pulsar, or cloud-native equivalents.",
          "Blueprints for shared UI libraries, design systems, and accessibility compliance.",
        ],
      },
      {
        heading: "Automation & Operations",
        items: [
          "GitOps pipelines with policy-as-code, security scanning, and automated rollbacks.",
          "FinOps and GreenOps instrumentation to keep budgets and carbon goals on track.",
          "Incident response and chaos drills tailored to regulated industries.",
        ],
      },
    ],
    useCases: [
      "Built a developer platform that onboards new product squads in under a day for a banking client.",
      "Modernized a legacy telco provisioning system into event-driven microservices with full observability.",
      "Deployed shared OpenShift foundations across three regions with automated compliance evidence collection.",
    ],
    cta: {
      heading: "Need to accelerate your cloud-native roadmap?",
      body: "Infobell’s platform, application, and SRE specialists deliver production-ready outcomes with governance included.",
      action: "Discuss your cloud-native goals",
    },
  },
  compliance: {
    slug: "compliance",
    title: CAPABILITY_SUMMARIES.compliance.title,
    summary: CAPABILITY_SUMMARIES.compliance.summary,
    heroTagline: "Secure by design, auditable by default.",
    heroBackground: "from-purple-600/20 via-background to-background",
    overview: [
      "Regulated workloads demand more than checklists. Infobell layers confidential computing, automated evidence capture, and policy-driven pipelines so teams can innovate without waiting on manual reviews.",
      "We work closely with legal, risk, and product stakeholders to codify controls into tooling—reducing approval cycles and audit fatigue.",
    ],
    sections: [
      {
        heading: "Confidential Computing",
        items: [
          "Architecture patterns using AMD SEV-SNP, Intel TDX, and Nitro Enclaves.",
          "Secure enclaves for ML inference, analytics, and multi-party workloads.",
          "Attestation workflows integrated with workload orchestration.",
        ],
      },
      {
        heading: "Compliance Automation",
        items: [
          "Infrastructure as code modules aligned to SOC 2, ISO 27001, PCI, and HIPAA.",
          "Automated evidence collection and control testing piped into GRC systems.",
          "Sandbox environments for regulators, customers, and partners to validate workloads safely.",
        ],
      },
      {
        heading: "Security Engineering",
        items: [
          "DevSecOps guardrails, supply-chain security, and SBOM management.",
          "Data protection strategies covering tokenization, masking, and retention policies.",
          "Red-teaming and tabletop exercises to validate incident runbooks.",
        ],
      },
    ],
    useCases: [
      "Designed a confidential AI inference environment for a healthcare provider needing HIPAA-grade assurances.",
      "Automated SOC 2 evidence gathering across 200+ controls for a SaaS scale-up.",
      "Built a regulator-observable sandbox so a financial services firm could validate performance improvements safely.",
    ],
    cta: {
      heading: "Need to prove security and compliance without slowing delivery?",
      body: "Infobell embeds compliance automation and confidential computing patterns directly into your platforms.",
      action: "Engage our security & compliance team",
    },
  },
}
