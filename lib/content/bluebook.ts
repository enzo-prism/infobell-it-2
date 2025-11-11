import bluebookData from "./bluebook-data.json"

export type BlueBookReport = {
  slug: string
  legacyId: string
  title: string
  subtitle: string
  summary: string[]
}

export type BlueBookCategory = {
  name: string
  reports: BlueBookReport[]
}

export const BLUEBOOK_CATEGORIES = bluebookData as BlueBookCategory[]
