export const CONTACT_COPY = {
  title: "Get in touch...",
  intro:
    "We want to find out how we can solve problems specific to your business — fill in the form so we can get talking.",
  banner: "Let’s build today’s and tomorrow’s IT. Together.",
  bannerCta: { label: "Join our team", href: "/careers" },
  officeDescription:
    "It’s our central hub for operations, where creativity thrives and collaborative efforts culminate, nurturing an environment that propels technology forward.",
}

export const PRODUCT_CONTACT_SUBJECTS = [
  "ConvoGene",
  "Transcribe",
  "Cloud Migration Advisor",
  "Carbon Calculator",
  "Cloud Control",
  "EchoSwift",
  "DocPrep for RAG",
  "VAST",
  "SmartE",
]

export type ContactField = {
  name: string
  label: string
  type: "text" | "email" | "tel" | "textarea" | "select"
  required?: boolean
  options?: string[]
}

export const CONTACT_FIELDS: ContactField[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel" },
  {
    name: "subject",
    label: "Subject",
    type: "select",
    required: true,
    options: PRODUCT_CONTACT_SUBJECTS,
  },
  { name: "description", label: "Description", type: "textarea", required: true },
]
