export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export const NAV_PRIMARY: Array<NavItem | NavGroup> = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    items: [
      { label: "Artificial Intelligence", href: "/ai" },
      { label: "High Performance Computing", href: "/#expertise" },
      { label: "Carbon Footprint and Sustainability", href: "/#expertise" },
      { label: "Performance Engineering", href: "/#expertise" },
      { label: "Cloud Native Development", href: "/#expertise" },
      { label: "Compliance and Confidential Computing", href: "/#expertise" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "ConvoGene", href: "/#products" },
      { label: "Transcribe", href: "/#products" },
      { label: "Cloud Migration Advisor", href: "/#products" },
      { label: "Carbon Calculator", href: "/#products" },
      { label: "Cloud Control", href: "/#products" },
      { label: "EchoSwift", href: "/#products" },
      { label: "DocPrep for RAG", href: "/#products" },
      { label: "Blue Book Series", href: "/bluebook" },
    ],
  },
  { label: "Our Team", href: "/team" },
  { label: "Our Clients", href: "/clients" },
  { label: "Our Locations", href: "/locations" },
  { label: "Connect with us", href: "/contact" },
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
