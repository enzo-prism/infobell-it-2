import type { ExpertiseIcon } from "./capabilities"

export type NavIcon =
  | ExpertiseIcon
  | "building2"
  | "usersRound"
  | "briefcaseBusiness"
  | "newspaper"

export type NavItem = {
  label: string
  href: string
  external?: boolean
  icon?: NavIcon
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export const SITE_URL = "https://www.infobellit.com" as const

export const SITE_LOGO = {
  alt: "Infobell IT logo",
  lightSrc: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765552704/Logo-color-svg_pvibq9.svg",
  darkSrc: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765552704/Logo-white-svg_c4xwbn.svg",
  width: 160,
  height: 41,
} as const

export const NAV_PRIMARY: Array<NavItem | NavGroup> = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    items: [
      { label: "Artificial Intelligence", href: "/ai", icon: "brain" },
      { label: "High Performance Computing", href: "/hpc", icon: "cpu" },
      { label: "Carbon Footprint and Sustainability", href: "/sustainability", icon: "leaf" },
      { label: "Performance Engineering", href: "/performance", icon: "gauge" },
      { label: "Cloud Native Development and Migration", href: "/cloud-native", icon: "cloud" },
      { label: "Compliance and Confidential Computing", href: "/compliance", icon: "shield" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "ConvoGene", href: "/convogene" },
      { label: "Transcribe", href: "/transcribe" },
      { label: "Cloud Migration Advisor", href: "/cloud-migration-advisor" },
      { label: "Carbon Calculator", href: "/carbon-calculator" },
      { label: "Cloud Control", href: "/cloud-control" },
      { label: "EchoSwift", href: "/echoswift" },
      { label: "DocPrep for RAG", href: "/docprep-for-rag" },
      { label: "VAST", href: "/vast" },
      { label: "SmartE", href: "/smarte" },
      { label: "Blue Book Series", href: "/bluebook" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/company", icon: "building2" },
      { label: "Leadership Team", href: "/team", icon: "usersRound" },
      { label: "Careers", href: "/careers", icon: "briefcaseBusiness" },
      { label: "Press Releases", href: "/press-releases", icon: "newspaper" },
    ],
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Our Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
]

export const FOOTER_LINKS: NavItem[] = [
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

export const SOCIAL_LINKS: NavItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/infobell-it/",
    external: true,
  },
]

export const CORPORATE_OFFICE = {
  heading: "Registered & Corporate Office",
  addressLine:
    "Infobell IT Solutions Pvt. Limited, 3rd Floor, The Cube - Karle Town Centre, 100 Ft, Nada Prabhu Kempe Gowda Main Rd, next to Nagavara, Bengaluru - 560045",
  email: "info@infobellit.com",
}

export const GLOBAL_PRESENCE = ["North America", "Europe", "Middle East"]
