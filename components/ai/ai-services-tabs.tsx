"use client"

import { Check } from "lucide-react"
import type { AiServiceSection } from "@/lib/content/ai"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type AiServicesTabsProps = {
  sections: AiServiceSection[]
  className?: string
}

function toValue(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function getTabLabel(heading: string) {
  const normalized = heading.toLowerCase()

  if (normalized.startsWith("agenticflow")) return "AgenticFlow"
  if (normalized.startsWith("ai infrastructure")) return "Infrastructure"
  if (normalized.startsWith("performance")) return "Performance"
  if (normalized.startsWith("accelerate ai")) return "Go-to-market"

  const compact = heading.split("–")[0]?.trim() ?? heading
  return compact.length > 18 ? `${compact.slice(0, 18)}…` : compact
}

function getListGridClass(count: number) {
  if (count <= 2) return "grid-cols-2"
  if (count === 3) return "grid-cols-3"
  return "grid-cols-2 sm:grid-cols-4"
}

export function AiServicesTabs({ sections, className }: AiServicesTabsProps) {
  const values = sections.map((section) => ({ ...section, value: toValue(section.heading) }))
  const defaultValue = values[0]?.value

  if (!defaultValue) return null

  return (
    <Tabs defaultValue={defaultValue} className={cn("mt-8", className)}>
      <TabsList className={cn("grid h-auto rounded-2xl p-1.5", getListGridClass(values.length))}>
        {values.map((section) => (
          <TabsTrigger key={section.heading} value={section.value} className="h-10 text-xs sm:text-sm">
            {getTabLabel(section.heading)}
          </TabsTrigger>
        ))}
      </TabsList>

      {values.map((section) => (
        <TabsContent key={section.heading} value={section.value}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{section.heading}</CardTitle>
              {section.description ? (
                <CardDescription className="text-sm leading-7">{section.description}</CardDescription>
              ) : null}
            </CardHeader>

            {section.bullets?.length ? (
              <CardContent>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={section.bullets.length > 5 ? undefined : "deliverables"}
                  className="w-full"
                >
                  <AccordionItem value="deliverables" className="border-none">
                    <AccordionTrigger className="py-2">Deliverables</AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 rounded-xl border border-border bg-background px-4 py-3">
                            <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                            <span className="leading-7">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            ) : null}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}

