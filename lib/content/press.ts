export type PressSection = {
  heading: string
  paragraphs: string[]
}

export type PressRelease = {
  slug: string
  title: string
  subtitle: string
  dateline: string
  sections: PressSection[]
  contacts: string[]
}

export const PRESS_RELEASE_AMD: PressRelease = {
  slug: "prease-release-amd-2025",
  title: "Infobell IT Expands Collaboration with AMD to Accelerate Enterprise-Ready AI Innovation",
  subtitle:
    "Infobell IT delivers highly performant AI solutions with AMD Instinct™ GPUs and AMD EPYC™ CPUs, ensuring exceptional scalability within an open ecosystem to meet the evolving needs of AI innovation.",
  dateline:
    "SAN JOSE, Calif.--(BUSINESS WIRE)-- Infobell IT Solutions Pvt. Ltd. (“Infobell IT”), a global leader in product engineering and AI solutions, today announced an expanded collaboration with AMD (NASDAQ: AMD) to drive enterprise-ready AI innovation powered by AMD Instinct™ GPUs and AMD EPYC™ CPUs.",
  sections: [
    {
      heading: "",
      paragraphs: [
        "As a long-standing engineering and solutions partner to AMD, Infobell IT leverages the AMD CDNA architecture and ROCm™ software stack to deliver high-performance AI, cloud, and high-performance computing (HPC) solutions to leading enterprises and cloud service providers worldwide.",
        "Infobell IT is also a proud sponsor of the AMD Advancing AI 2025, underscoring its commitment to accelerating AI adoption with AMD technologies.",
      ],
    },
    {
      heading: "Delivering Real-World AI Impact",
      paragraphs: [
        "Infobell IT brings deep full-stack AI expertise to real-world enterprise and hybrid cloud environments. Its innovations—ranging from AI Inference Framework eXpress (IFX) platform, use case-based service products such as DocPrep RAG, Transcribe, ConvoGene™, VAST, SmartE, EchoSwift™ to advanced performance analysis and domain-specific LLM training—demonstrate the transformative potential of AI-in-action at scale.",
        "Through its engineering partnership with AMD, Infobell IT delivers AI that is faster to value and faster to train and infer. By leveraging ROCm-optimized performance across AMD Instinct GPUs and AMD EPYC CPUs, Infobell IT accelerates both training and inference cycles, enabling enterprises to adopt AI more rapidly and achieve better business outcomes.",
        "“The AMD Instinct MI350 series GPUs deliver industry-leading performance for next-generation Sovereign AI and hybrid HPC-AI architectures,” said Travis Karr, corporate vice president of business development, Data Center GPU Business, AMD. “Built on our advanced 4th Gen AMD CDNA architecture, the GPUs provide leadership memory capacity and robust support for both AI and HPC workloads, enabling our customers to meet the evolving demands of Sovereign AI and large-scale HPC deployments.”",
        "“At Infobell IT, we don’t just build AI—we engineer it for performance, reliability, and enterprise scale,” said Ramana Bandili, Chief Executive Officer at Infobell IT Solutions. “Leveraging AMD Instinct MI Series GPUs and the ROCm™ software stack, we fine-tune large language models, deliver seamless multimodal AI experiences, and optimize performance across the entire stack. Our collaboration with AMD enables us to bring transformative AI solutions to enterprise customers with exceptional speed, cost-efficiency, and sustainability.”",
        "“For over 40 years, Gallery Systems has developed collections management solutions for the world's leading museums and cultural institutions. We are dedicated to helping our clients continually improve how they manage and share their high-value collections,” said Paul Thyssen, GM of Gallery Systems Inc. “Our applications process massive volumes of archival and provenance data across global collections. As we modernized for enterprise scale, Infobell IT’s product engineering and performance optimization expertise proved invaluable—delivering over 90% performance boost by dramatically reducing our data processing time. Infobell IT's deep understanding of performance optimization of latest technologies, applications, and infrastructure stacks uniquely positions them to offer high-performing enterprise AI and enhance the overall customer experience.”",
        "“As energy and engineering sectors evolve, embracing AI is not just a choice—it’s a strategic imperative,” said S. Narayan Prasad, CEO, Triveni Turbines. “Our partnership with Infobell IT has enabled us to explore new possibilities in faster time to value and operational excellence.”",
      ],
    },
    {
      heading: "About Infobell IT",
      paragraphs: [
        "Infobell IT is a global product engineering and solutions company driving next-generation innovation in AI, performance engineering, cloud-native development, and sustainability. Backed by a team of over 400 engineers and domain experts worldwide, Infobell IT empowers enterprise transformation through end-to-end AI delivery—from design, validation, deployment and optimization.",
        "Learn more at: www.infobellit.com",
      ],
    },
  ],
  contacts: ["Lax Sakalkale - lax@infobellit.com"],
}

export const PRESS_RELEASES: PressRelease[] = [PRESS_RELEASE_AMD]
