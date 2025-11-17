export type CareerRole = {
  slug: string
  title: string
  location: string
  summary: string
  responsibilities: string[]
}

export const CAREERS_HERO = {
  title: "Join our team today",
  description:
    "We are known for our agile entrepreneurship, for our client centricity, and for the value we generate. And even for how fun it is to work with us! Join us on this exciting journey of innovation and digital transformation.",
}

export const CAREER_ROLES: CareerRole[] = [
  {
    slug: "server-performance-benchmark-engineers",
    title: "Server Performance Benchmark Engineers",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "3+ years of experience running enterprise performance benchmarking engagements.",
      "Hands-on expertise with suites such as SPECCPU, SPECjbb, and TPC.",
      "Strong understanding of Linux operating systems and modern server architectures.",
    ],
  },
  {
    slug: "devops-and-devsecops",
    title: "DevOps & DevSecOps",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "4+ years of experience operating large-scale cloud environments.",
      "Working knowledge of compliance frameworks such as NIST 800-53, SOC 2, and CIS.",
      "Hands-on DevOps and DevSecOps experience with tools like Tenable Nessus, HashiCorp Vault, and QRadar.",
      "Strong background in server performance benchmark testing and optimization.",
    ],
  },
  {
    slug: "cloud-engineer",
    title: "Cloud Engineer",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Experience building Kubernetes platforms and custom resource definitions.",
      "6–9 years of programming experience in Go, C, or C++ (Go preferred).",
      "Background in virtualization with knowledge of KVM, QEMU, libvirt, and Linux.",
      "Strong grounding in object-oriented design principles and patterns.",
      "Hands-on work with large distributed microservice architectures.",
      "Proven ability to build containerized applications, design Kubernetes controllers, and operate Docker/Kubernetes clusters.",
      "Exposure to AWS, Azure, GCP, OpenStack, or comparable cloud environments.",
      "Demonstrated problem-solving, analytical, and cross-functional collaboration skills.",
    ],
  },
  {
    slug: "python-linux-engineer",
    title: "Python Linux Engineer",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "6–10 years of Linux operating system experience.",
      "6–9 years of programming experience in Go, C, or C++ (Go preferred).",
      "Hands-on experience with Linux security hardening, internals, and packaging.",
      "Knowledge of GPG signature and checksum validation for binary components.",
      "Networking and network configuration expertise.",
      "Strong programming fundamentals with scripting proficiency in bash/shell.",
      "Professional Python development experience.",
      "Ability to debug and investigate running services in production environments.",
    ],
  },
  {
    slug: "bringup-automation-software-engineer",
    title: "Bringup Automation Software Engineer",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Develop Python automation that prepares server and rack-level components for cloud deployment, covering discovery, DHCP, firmware/BIOS updates, PXE booting, and storage initialization.",
      "Translate architecture and design documentation into bringup code for new hardware types and validate flows in lab environments.",
      "Monitor production datacenters and iteratively improve error handling and bringup resiliency.",
      "Detect and isolate hardware issues so datacenter technicians can take precise corrective actions.",
    ],
  },
  {
    slug: "ui-developer",
    title: "UI Developer",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: ["3+ years of hands-on experience as a ReactJS developer."],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "6–10 years of Linux OS experience.",
      "3+ years working with Kubernetes and Docker in production environments.",
      "Python test automation experience on Linux platforms using modern frameworks.",
      "Hands-on knowledge of Kubernetes and Docker ecosystem tooling.",
    ],
  },
  {
    slug: "linux-upstream-developer",
    title: "Linux Upstream developer",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "6–10 years of Linux operating system experience.",
      "Proven experience contributing to Linux upstream development.",
    ],
  },
  {
    slug: "software-performance-test-developer",
    title: "Software Performance Test Developer",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Expertise in load, scalability, and stress testing methodologies.",
      "Experience conducting API performance testing with tools such as JMeter.",
      "Hands-on performance testing for container technologies like Docker and Kubernetes.",
      "Understanding of microservices architecture, asynchronous processing, and NoSQL databases.",
      "Experience with data analysis and reporting stacks such as Grafana.",
    ],
  },
  {
    slug: "control-plane-infrastructure-software",
    title: "Control-plane Infrastructure Software",
    location: "Bengaluru, India",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Track record of building enterprise systems with strong debugging skills and collaborative communication.",
      "Minimum 2 years of experience with Kubernetes deployments and administration.",
      "Minimum 5 years of programming experience with Go, Python, or C++.",
      "Minimum 5 years of experience working with Linux operating systems.",
      "Minimum 5 years delivering projects within Agile teams.",
    ],
  },
]

export const APPLY_EMAIL = "info@infobellit.com"
