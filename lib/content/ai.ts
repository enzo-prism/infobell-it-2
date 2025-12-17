export const AI_HERO = {
  title: "Artificial Intelligence Solutions and Services",
  description:
    "Infobell helps enterprises identify high-impact AI and ML use cases, evaluate CPU and GPU architectures for performance, and build production-grade Generative AI/ML applications, Agentic-AI, and RAG applications. We deliver AI solutions across industries, including IT operations, Telco, Retail, Healthcare, and Real Estate. From data lifecycle management to performance benchmarking for AI infrastructure and LLM systems, we develop scalable tools and implementation frameworks for various AI/ML use cases like natural language processing, computer vision, and multimodal AI workloads, partnering closely with industry leaders such as NVIDIA, AMD, and Intel.",
}

export type AiPartner = {
  name: string
  description: string
  href: string
  logo: string
}

export const AI_PARTNERS: AiPartner[] = [
  {
    name: "NVIDIA",
    href: "/ai/nvidia",
    logo: "/images/clients/ni.jpeg",
    description:
      "Infobell is a trusted NVIDIA partner helping enterprises identify high-impact AI and ML use cases, and build and deploy GenAI applications and chatbots using the NVIDIA accelerated computing stack—including GPUs, CUDA, TensorRT, and NVIDIA NIMs. We specialize in performance characterization for LLMs, computer vision, and agentic AI workflows across sectors like IT operations, retail, healthcare, and real estate. From data pipeline design to scalable deployment, Infobell leverages the full NVIDIA ecosystem to deliver state-of-the-art AI solutions at scale.",
  },
  {
    name: "AMD",
    href: "/ai/amd",
    logo: "/images/clients/a.png",
    description:
      "Infobell is an AMD engineering and solutions partner helping enterprises unlock GenAI and ML opportunities with AMD’s open, flexible infrastructure—including Instinct GPUs, EPYC CPUs, and the ROCm software stack. We specialize in performance benchmarking, LLM inference frameworks (like IFX), and customized AI solutions such as chatbots, RAG pipelines, and domain-specific model tuning. Sectors served include retail, healthcare, manufacturing, and energy.",
  },
  {
    name: "Intel",
    href: "/ai/intel",
    logo: "/images/clients/in.png",
    description:
      "Infobell partners with Intel to deliver robust enterprise AI and ML solutions leveraging Intel Xeon, Gaudi processors, and the OpenVINO toolkit. We help customers identify use cases, design architecture, and deploy GenAI applications like internal copilots, RAG pipelines, and industry-specific LLMs—with a focus on performance tuning, cost-efficiency, and secure deployment.",
  },
]

export type AiServiceSection = {
  heading: string
  description?: string
  bullets?: string[]
}

export const AI_SERVICE_SECTIONS: AiServiceSection[] = [
  {
    heading: "AgenticFlow - Agentic AI Solutions",
    description:
      "AgenticFlow empowers enterprises to seamlessly design, develop, and deploy intelligent AI agents and end-to-end workflows. From orchestrating autonomous decision-making to integrating multi-agent systems into real-world applications, it provides a unified foundation for building adaptive, scalable AI solutions—enhancing productivity, automation, and responsiveness at scale.",
    bullets: ["AI Agents – Automate queries with human interface"],
  },
  {
    heading: "AI Infrastructure and Software Development Services",
    bullets: [
      "On Prem K8S – Red Hat OpenShift, VMware Private AI, Nutanix GPT-in-a-Box",
      "Cloud – EKS, GKE, and leading managed Kubernetes platforms",
      "Showcase near-real scaling, LLMOps, deployment on CPU and GPU (NVIDIA and AMD)",
    ],
  },
  {
    heading: "Performance & Architecture Services",
    description: "TCO analysis, sizing, scaling, reference architectures, benchmarking.",
    bullets: [
      "TCO analysis for customer solutions",
      "Sizing and reference architecture for customer use cases",
      "Benchmarking-as-a-Service",
      "Scale testing and architectural bottleneck analysis for production deployments",
    ],
  },
  {
    heading: "Accelerate AI Go To Market – Ease of Adoption",
    description: "AI apps research and development backed by production-ready best practices.",
    bullets: [
      "Research and investigations on models, training, and fine-tuning",
      "Software and environment bring-up for comparative analysis",
      "AI performance and scale tests for inferencing and training workloads",
      "Benchmark development across heterogeneous infrastructure (e.g., EchoSwift)",
      "Dataset generation and curation for domain-specific AI",
      "Guides, reference architectures, and TCO analysis for customers",
      "DIY templates, live demos, and GTM showcases across verticals (chatbots, co-pilots)",
      "Support for customer PoCs with 24/7 engineering coverage",
    ],
  },
]

export type IfxSection = {
  heading: string
  bullets?: string[]
  paragraphs?: string[]
}

export const IFX_SECTIONS: IfxSection[] = [
  {
    heading: "Overview",
    paragraphs: [
      "Infobell IFX is an open, scalable inferencing stack designed to unlock enterprise-grade LLM deployments using AMD’s next-generation CDNA 3/4 architecture, MI300X GPUs, and EPYC CPUs. Engineered for speed, flexibility, and transparency, IFX eliminates proprietary dependencies by building on open technologies like vLLM, FastAPI, and Kubernetes-native services. Whether you're deploying multi-modal chatbots, domain-specific copilots, or large-scale media summarization, IFX delivers cost-effective, high-throughput AI with zero vendor lock-in.",
    ],
  },
  {
    heading: "Why IFX?",
    bullets: [
      "Open and Flexible: Built on open-source components and AMD-compatible optimizations.",
      "High Throughput: Leverages AMD CDNA 4 architecture with FP8/FP16 acceleration and HBM3E memory.",
      "Enterprise Ready: REST APIs, modular design, logging, monitoring, and secure multi-tenant support.",
      "No Lock-in: Replaces proprietary NVIDIA Triton/CuDNN stack with open equivalents like vLLM and MIOpen.",
      "Optimized for Service Kits based on key enterprise AI use cases.",
    ],
  },
  {
    heading: "Technical Highlights",
    bullets: [
      "Core Inferencing Engine: vLLM for high-speed, low-latency LLM execution.",
      "Executor & API Gateway: FastAPI-based IFX Executor container with rate limiting, batching, and model routing.",
      "Accelerator Stack: ROCm, HIP, MIOpen, and CDNA 4 MFMA for GPU compute acceleration.",
      "Kubernetes Deployment: Helm chart-based deployment with autoscaling, Prometheus integration, and logging.",
      "Compatible Models: Open LLMs like LLaMA 2, Mistral, Falcon, Gemma, and more.",
    ],
  },
  {
    heading: "Primary Use Cases",
    bullets: [
      "Enterprise Chatbots: Real-time multimodal LLM-based assistants for knowledge retrieval and customer service.",
      "Internal LLM Copilots integrated into enterprise workflows.",
      "Automated insurance claim and damage assessments combining vision and text inference.",
      "Healthcare and compliance assistants for regulatory document processing and explanation.",
      "Media and knowledge summarization pipelines converting video and audio into transparent summaries.",
    ],
  },
  {
    heading: "Customer Benefits",
    bullets: [
      "20%+ LLM Throughput Improvement benchmarked against Triton/CPU baselines.",
      "Zero licensing cost through an open-source foundation.",
      "Scalability with containerized services that autoscale on Kubernetes.",
      "Security and compliance with multi-tenant aware access controls and observability.",
      "Multi-cloud compatibility across AMD-powered clouds and on-prem HPC clusters.",
    ],
  },
]

export const IFX_SERVICE_KITS = [
  {
    title: "DocPrep for RAG",
    description:
      "Prepare documents for Retrieval-Augmented Generation pipelines at scale—discover, parse, and transform large datasets for LLM consumption.",
  },
  {
    title: "ConvoGene",
    description: "A customizable enterprise chatbot framework with live demo support, optimized for secure deployment.",
  },
  {
    title: "Transcribe",
    description:
      "A conversational AI platform intelligent enough to comprehend and record multi-person conversations across meetings or support calls.",
  },
  {
    title: "VAST",
    description:
      "Video-Audio-Summarization Toolkit converts media into multilingual, citation-backed summaries for compliance and knowledge workflows.",
  },
  {
    title: "SmartE",
    description:
      "Computer vision assessments for fast, explainable deformity or damage detection across insurance and service use cases.",
  },
]

export const IFX_ADDITIONAL_KITS = [
  {
    title: "EchoSwift – LLM Performance Tool",
    description: "An inference benchmarking suite for Large Language Models, enabling cross-platform performance analysis.",
  },
  {
    title: "Carbon Calculator",
    description: "Track and analyze cloud carbon emissions to minimize environmental impact.",
  },
  {
    title: "Cloud Control",
    description: "Optimize private cloud infrastructure using advanced analytics for performance and cost efficiency.",
  },
  {
    title: "Cloud Migration Advisor",
    description: "Assess cloud management costs and recommend optimization strategies through process analysis.",
  },
]

export const IFX_CTA = [
  "Ready to deploy with Infobell IFX? Infobell offers turnkey IFX solution integration including benchmarking, fine-tuning, training, and managed inferencing.",
  "Contact us to schedule a demo or PoC today at info@infobellit.com. Together with AMD, Infobell IFX accelerates enterprise AI.",
]

export type PartnerPageContent = {
  partner: {
    name: string
    logo: string
    logoAlt: string
    contactSubject: string
  }
  title: string
  intro: string
  spotlight?: {
    heading: string
    paragraphs: string[]
    bullets?: string[]
  }
  expertise: string[]
  offerings?: {
    heading: string
    items: string[]
  }[]
  sections?: {
    heading: string
    bullets: string[]
  }[]
  closing?: string
}

export const AMD_PAGE: PartnerPageContent = {
  partner: {
    name: "AMD",
    logo: "/images/clients/a.png",
    logoAlt: "AMD logo",
    contactSubject: "AI Solutions - AMD",
  },
  title: "Infobell AI Solutions powered by AMD",
  intro:
    "Infobell brings deep product engineering and AI infrastructure expertise to help enterprises and cloud providers accelerate their AI transformation. We showcase our AI Factory Platform powered by AMD Instinct MI350X GPUs and the ROCm stack, offering industry-leading performance and sustainability.",
  spotlight: {
    heading: "Spotlight: Infobell IT sponsored AMD Advancing AI 2025",
    paragraphs: [
      "Join Infobell IT Solutions at AMD’s Advancing AI 2025 — the marquee AI industry event showcasing cutting-edge advancements in enterprise AI, high-performance computing (HPC), and cloud innovation.",
      "Contact our CTO, Karthik Krishna, and our Growth Strategy Officer, Lax Sakalkale, to explore how we can help you innovate with AI at scale, performance, and security.",
    ],
    bullets: [
      "Event: AMD Advancing AI 2025",
      "Date: Thursday, June 12, 2025",
      "Location: San Jose Convention Center, San Jose, CA",
      "Live Demo: Infobell’s ConvoGene chatbot leveraging MI350X GPUs with real-time RAG-based retrieval.",
      "Performance Showcase: EchoSwift delivering 20%+ optimized LLM inference on AMD infrastructure.",
      "IFX: Optimized for AMD EPYC CPUs and Instinct GPUs for scalable AI deployment and inferencing.",
      "Domain-specific LLMs: Secure, private model fine-tuning and deployment for enterprise workloads.",
    ],
  },
  expertise: [
    "AI/ML implementation & domain-specific LLMs",
    "Performance engineering and benchmarking",
    "Confidential computing & security compliance",
    "HPC and carbon-aware cloud optimization",
    "Enterprise AI applications development",
  ],
  closing:
    "Whether you are attending AMD Advancing AI or want to learn more, reach out to schedule a meeting with our team or explore partnership opportunities.",
}

export const INTEL_PAGE: PartnerPageContent = {
  partner: {
    name: "Intel",
    logo: "/images/clients/in.png",
    logoAlt: "Intel logo",
    contactSubject: "AI Solutions - Intel",
  },
  title: "Intel Powered AI Solutions by Infobell",
  intro:
    "Infobell partners with Intel to deliver robust enterprise AI and ML solutions leveraging Intel Xeon, Gaudi processors, and the OpenVINO toolkit. We help customers identify use cases, design architecture, and deploy GenAI applications like internal copilots, RAG pipelines, and industry-specific LLMs—with a focus on performance tuning, cost-efficiency, and secure deployment.",
  expertise: [
    "AI/ML implementation & domain-specific LLMs",
    "Performance engineering and benchmarking",
    "Confidential computing & security compliance",
    "HPC and carbon-aware cloud optimization",
    "Enterprise AI applications development",
  ],
  closing:
    "Whether you are attending the event or want to learn more, we’d love to connect with you. Reach out to schedule a meeting with our team or explore partnership opportunities.",
}

export const NVIDIA_PAGE: PartnerPageContent = {
  partner: {
    name: "NVIDIA",
    logo: "/images/clients/ni.jpeg",
    logoAlt: "NVIDIA Inception Program logo",
    contactSubject: "AI Solutions - NVIDIA",
  },
  title: "NVIDIA Powered AI Solutions by Infobell",
  intro:
    "Infobell is a trusted NVIDIA partner helping enterprises identify high-impact AI and ML use cases, and build and deploy GenAI applications and chatbots using the NVIDIA accelerated computing stack — including GPUs, CUDA, TensorRT, and NVIDIA NIMs. We specialize in performance characterization for LLMs, computer vision, and agentic AI workflows across sectors like IT operations, retail, healthcare, and real estate.",
  expertise: [
    "AI/ML implementation & domain-specific LLMs",
    "Performance engineering and benchmarking",
    "Confidential computing & security compliance",
    "HPC and carbon-aware cloud optimization",
    "Enterprise AI applications development",
  ],
  offerings: [
    {
      heading: "NVIDIA-Powered AI and ML Services",
      items: [
        "Generative AI & LLMs: Design, fine-tune, and deploy models with CUDA, TensorRT, and vLLM on NVIDIA GPUs.",
        "Inference Optimization: Use Triton Inference Server and NVIDIA NIMs for real-time inferencing and efficient batching.",
        "Computer Vision & Multi-Modal AI: Build visual AI pipelines for object detection, video analytics, and multimodal workloads.",
        "Agentic AI Workflows: Develop AI agents, co-pilots, and digital workers leveraging NVIDIA’s ecosystem for reasoning and autonomy.",
        "Performance Engineering: Benchmark LLMs, tune models, and run performance characterization using Infobell’s EchoSwift tool.",
        "Security & Confidential AI: Design confidential computing environments with NVIDIA GPUs for compliant AI operations.",
      ],
    },
    {
      heading: "Sample Use Cases",
      items: [
        "Enterprise conversational chatbots with RAG pipelines.",
        "Domain-specific copilots for IT operations, retail, and healthcare.",
        "Computer vision models for industrial inspection and smart surveillance.",
        "Batch embeddings and search applications for large knowledge bases.",
        "Multimodal Q&A integrating text, voice, and visual inputs.",
      ],
    },
  ],
  sections: [
    {
      heading: "Why Infobell + NVIDIA — Strategic Partnership",
      bullets: [
        "Certified NVIDIA partner with deep GPU engineering expertise.",
        "Proven experience with CUDA, TensorRT, Triton, and NVIDIA NIMs.",
        "Proprietary benchmarking and optimization frameworks.",
      ],
    },
    {
      heading: "Performance at Scale",
      bullets: [
        "Accelerated AI/ML pipelines on NVIDIA GPUs.",
        "Enterprise-ready deployment models across hybrid and multi-cloud environments.",
        "Open-source driven with best-in-class DevOps and MLOps integration.",
      ],
    },
  ],
  closing:
    "Whether you are attending upcoming NVIDIA events or want to learn more, connect with our team to explore partnership opportunities.",
}
