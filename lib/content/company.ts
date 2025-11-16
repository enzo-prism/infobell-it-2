export type LogoEntry = {
  image: string
  alt: string
  href?: string
  multiplier?: number
}

export const CLIENT_LOGOS: LogoEntry[] = [
  { image: "/images/clients/a.png", alt: "AMD", href: "https://www.amd.com/" },
  { image: "/images/clients/i.png", alt: "IBM", href: "https://www.ibm.com/" },
  { image: "/images/clients/g.png", alt: "Google", href: "https://about.google/" },
  { image: "/images/clients/in.png", alt: "Intel", href: "https://www.intel.com/" },
  { image: "/images/clients/VISA.png", alt: "Visa", href: "https://www.visa.com/" },
  { image: "/images/clients/way-logo.png", alt: "Way.com", href: "https://www.way.com/" },
  { image: "/images/clients/hpe.png", alt: "Hewlett Packard Enterprise", href: "https://www.hpe.com/" },
  { image: "/images/clients/n.png", alt: "Nutanix", href: "https://www.nutanix.com/" },
  { image: "/images/clients/nit.png", alt: "Infinite Computer Solutions", href: "https://www.infinite.com/" },
  { image: "/images/clients/m.png", alt: "Mannai Corporation", href: "https://mannai.com/" },
  { image: "/images/clients/gs.png", alt: "Gallery Systems", href: "https://www.gallerysystems.com/" },
  { image: "/images/clients/k.png", alt: "KETOS", href: "https://ketos.co/" },
  { image: "/images/clients/z.png", alt: "Datagamz", href: "https://datagamz.com/" },
  { image: "/images/clients/u.png", alt: "Upturn", href: "https://upturn.org/" },
  {
    image: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762809696/AIF_Metrics_vadpyv.webp",
    alt: "AIFMetrics",
    href: "https://www.aifmetrics.com/",
    multiplier: 5,
  },
  { image: "/images/clients/t.png", alt: "Client partner logo (circular seal)" },
  { image: "/images/clients/h.png", alt: "Hatics Technologies LLP", href: "https://www.hatics.com/" },
  { image: "/images/clients/melbourne.png", alt: "Client partner crest logo" },
  { image: "/images/clients/mobily.png", alt: "Mobily", href: "https://www.mobily.com.sa/" },
  { image: "/images/clients/an.png", alt: "Anjuna Security", href: "https://www.anjuna.io/" },
]

export const AFFILIATION_LOGOS: LogoEntry[] = [
  {
    image: "/images/clients/SPEC.png",
    alt: "SPEC (Standard Performance Evaluation Corporation)",
    href: "https://www.spec.org",
    multiplier: 0.5,
  },
  {
    image: "/images/clients/tpc.jpg",
    alt: "TPC (Transaction Processing Performance Council)",
    href: "https://www.tpc.org",
  },
  {
    image: "/images/clients/ni.jpeg",
    alt: "NVIDIA Inception Program",
    href: "https://www.nvidia.com/en-us/startups/",
  },
  {
    image: "/images/clients/ccc_consortium.png",
    alt: "Confidential Computing Consortium (CCC)",
    href: "https://confidentialcomputing.io",
  },
  {
    image: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762809697/AWS_marketplace_i7asqu.webp",
    alt: "AWS Marketplace",
    href: "https://aws.amazon.com/marketplace",
    multiplier: 5,
  },
]

export const CORPORATE_LOCATIONS = [
  {
    title: "Corporate Headquarters",
    description:
      "Infobell IT Solutions Pvt. Limited 3rd Floor, The Cube - Karle Town Centre, 500 ft, Nada Prabhu Kempe Gowda Main Rd, next to Nagavara, Bengaluru - 560045",
    contact: "Contact us: info@infobellit.com",
  },
]
