export type LogoEntry = {
  image: string
  alt: string
  href?: string
  multiplier?: number
}

export const CLIENT_LOGOS: LogoEntry[] = [
  { image: "/images/clients/a.png", alt: "Amazon", href: "https://www.amazon.com/" },
  { image: "/images/clients/i.png", alt: "IBM", href: "https://www.ibm.com/" },
  { image: "/images/clients/g.png", alt: "Google", href: "https://about.google/" },
  { image: "/images/clients/in.png", alt: "Intel", href: "https://www.intel.com/" },
  { image: "/images/clients/VISA.png", alt: "Visa", href: "https://www.visa.com/" },
  { image: "/images/clients/way-logo.png", alt: "Way.com", href: "https://www.way.com/" },
  { image: "/images/clients/hpe.png", alt: "Hewlett Packard Enterprise", href: "https://www.hpe.com/" },
  { image: "/images/clients/n.png", alt: "NVIDIA", href: "https://www.nvidia.com/" },
  { image: "/images/clients/nit.png", alt: "NIIT", href: "https://www.niit.com/" },
  { image: "/images/clients/m.png", alt: "Microsoft", href: "https://www.microsoft.com/" },
  { image: "/images/clients/gs.png", alt: "Goldman Sachs", href: "https://www.goldmansachs.com/" },
  { image: "/images/clients/k.png", alt: "KPMG", href: "https://kpmg.com/" },
  { image: "/images/clients/z.png", alt: "Zoom", href: "https://zoom.us/" },
  { image: "/images/clients/u.png", alt: "Uber", href: "https://www.uber.com/" },
  {
    image: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762809696/AIF_Metrics_vadpyv.webp",
    alt: "AIF Metrics",
    href: "https://www.aifmetrics.com/",
    multiplier: 5,
  },
  { image: "/images/clients/t.png", alt: "Tata Communications", href: "https://www.tatacommunications.com/" },
  { image: "/images/clients/h.png", alt: "HSBC", href: "https://www.hsbc.com/" },
  { image: "/images/clients/melbourne.png", alt: "City of Melbourne", href: "https://www.melbourne.vic.gov.au/" },
  { image: "/images/clients/mobily.png", alt: "Mobily", href: "https://www.mobily.com.sa/" },
  { image: "/images/clients/an.png", alt: "ANZ", href: "https://www.anz.com/" },
]

export const AFFILIATION_LOGOS: LogoEntry[] = [
  { image: "/images/clients/SPEC.png", alt: "SPEC Consortium", href: "https://www.spec.org/", multiplier: 0.5 },
  { image: "/images/clients/tpc.jpg", alt: "TPC Council", href: "https://www.tpc.org/" },
  { image: "/images/clients/ni.jpeg", alt: "NI (National Instruments)", href: "https://www.ni.com/" },
  {
    image: "/images/clients/ccc_consortium.png",
    alt: "Confidential Computing Consortium",
    href: "https://confidentialcomputing.io/",
  },
  {
    image: "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1762809697/AWS_marketplace_i7asqu.webp",
    alt: "AWS Marketplace logo",
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
