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
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "3+ years of experience",
      "Good experience on server performance benchmark testing like SPECCPU, SPECJBB, TPC, etc.",
      "Strong understanding of Linux operating systems and server architecture.",
    ],
  },
  {
    slug: "devops-and-devsecops",
    title: "DevOps & DevSecOps",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "4+ years of experience in large cloud-based environments.",
      "Familiarity with compliance frameworks such as NIST 800-53, SOC 2, CIS.",
      "Hands-on DevOps and DevSecOps experience with tools like Tenable Nessus, HashiCorp Vault, and QRadar.",
      "Strong experience with server performance benchmark testing.",
    ],
  },
  {
    slug: "cloud-engineer",
    title: "Cloud Engineer",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Experience in Kubernetes platform and custom resource definition development.",
      "6 to 9 years proven programming experience in Go, C, or C++ (Go preferred).",
      "Background in virtualization with knowledge of KVM, QEMU, libvirt, and Linux.",
      "Strong object-oriented design principles and patterns.",
      "Experience with large distributed microservice architectures.",
      "Proven ability to build distributed applications in container environments using Docker/Kubernetes and designing Kubernetes controllers.",
      "Exposure to AWS, Azure, GCP, OpenStack, or similar cloud environments.",
      "Demonstrated problem-solving, analytical, and cross-functional collaboration skills.",
    ],
  },
  {
    slug: "python-linux-engineer",
    title: "Python Linux Engineer",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "6–10 years of Linux OS experience.",
      "6 to 9 years programming experience in Go, C, or C++ (Go preferred).",
      "Experience with Linux security hardening and Linux internals.",
      "Familiarity with Linux packaging and GPG signature/checksum validation of binary components.",
      "Networking and network configuration skills.",
      "Strong programming fundamentals and scripting expertise (bash/shell, Python).",
      "Experience debugging and investigating running services.",
    ],
  },
  {
    slug: "bringup-automation-software-engineer",
    title: "Bringup Automation Software Engineer",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Develop automation that prepares server and rack-level components for deployment to the cloud, including discovery, DHCP setup, firmware updates, BIOS configuration, PXE booting, and storage initialization.",
      "Adapt automation for new hardware types and validate bringup flows in lab and production environments.",
      "Continuously improve error handling and detection of hardware issues to aid datacenter technicians in problem isolation.",
    ],
  },
  {
    slug: "ui-developer",
    title: "UI Developer",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: ["3+ years of experience as a ReactJS developer."],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "6–10 years of Linux OS experience.",
      "3+ years of experience with Kubernetes/Docker.",
      "Python test automation on Linux platforms.",
      "Hands-on knowledge of Kubernetes and Docker environments.",
    ],
  },
  {
    slug: "linux-upstream-developer",
    title: "Linux Upstream developer",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: ["6–10 years of Linux OS experience.", "Experience contributing to Linux upstream development."],
  },
  {
    slug: "software-performance-test-developer",
    title: "Software Performance Test Developer",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Expertise in load, scalability, and stress testing methodologies.",
      "Experience conducting API performance testing using industry-standard tools like JMeter.",
      "Hands-on performance testing on containerization technologies such as Docker and Kubernetes.",
      "Understanding of architectural principles including microservices, asynchronous processing, and NoSQL databases.",
      "Experience with data analysis and reporting stacks like Grafana.",
    ],
  },
  {
    slug: "control-plane-infrastructure-software",
    title: "Control-plane Infrastructure Software",
    location: "Bengaluru",
    summary: "Provide technical assistance to improve system performance, capacity, reliability and scalability",
    responsibilities: [
      "Track record of building enterprise systems with strong debugging skills and collaborative mindset.",
      "Minimum 2 years of experience with Kubernetes deployments and administration.",
      "Minimum 5 years of experience programming with Go, Python, or C++.",
      "Minimum 5 years of experience with Linux operating systems.",
      "Minimum 5 years of experience with Agile team project delivery practices.",
    ],
  },
]

export const APPLY_EMAIL = "info@infobellit.com"
