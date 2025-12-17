"use client"

import Image from "next/image"
import Link from "next/link"
import type { PartnerPageContent } from "@/lib/content/ai"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type AiPartnerPageProps = {
  content: PartnerPageContent
}

type PartnerTabKey = "spotlight" | "expertise" | "offerings" | "partnership"

type PartnerTab = {
  key: PartnerTabKey
  label: string
}

const TAB_LABELS: Record<PartnerTabKey, string> = {
  spotlight: "Spotlight",
  expertise: "Expertise",
  offerings: "Offerings",
  partnership: "Partnership",
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function getTabs(content: PartnerPageContent): PartnerTab[] {
  const tabs: PartnerTab[] = []

  if (content.spotlight) {
    tabs.push({ key: "spotlight", label: TAB_LABELS.spotlight })
  }

  tabs.push({ key: "expertise", label: TAB_LABELS.expertise })

  if (content.offerings?.length) {
    tabs.push({ key: "offerings", label: TAB_LABELS.offerings })
  }

  if (content.sections?.length) {
    tabs.push({ key: "partnership", label: TAB_LABELS.partnership })
  }

  return tabs
}

function getTabsListGridClass(count: number) {
  if (count <= 2) return "grid-cols-2"
  if (count === 3) return "grid-cols-3"
  return "grid-cols-2 sm:grid-cols-4"
}

export function AiPartnerPage({ content }: AiPartnerPageProps) {
  const tabs = getTabs(content)
  const contactHref = `/contact?subject=${encodeURIComponent(content.partner.contactSubject)}`
  const hasTabs = tabs.length > 1 || Boolean(content.spotlight || content.offerings?.length || content.sections?.length)

  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Card className="card-glow relative overflow-hidden border-border/60 bg-gradient-to-br from-primary/15 via-background to-background">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_20%_15%,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.15),transparent_55%),radial-gradient(circle_at_50%_110%,rgba(56,189,248,0.18),transparent_55%)]"
          />

          <CardContent className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr,0.75fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Strategic Accelerator Partnership
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
                {content.title}
              </h1>
              <p className="mt-6 text-lg leading-7 text-muted-foreground">{content.intro}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {content.expertise.slice(0, 4).map((item) => (
                  <Badge key={item} variant="outline" className="bg-background/70">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/70 p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/30 p-2">
                  <Image
                    src={content.partner.logo}
                    alt={content.partner.logoAlt}
                    width={96}
                    height={96}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-heading">{content.partner.name}</p>
                  <p className="text-sm text-muted-foreground">Partner-led delivery and benchmarking programs.</p>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="flex flex-col gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>Contact us</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/ai">Back to AI solutions</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {hasTabs ? (
          <Tabs defaultValue={tabs[0]?.key} className="mt-10">
            <TabsList
              className={cn(
                "grid h-auto w-full rounded-2xl p-1.5",
                getTabsListGridClass(tabs.length)
              )}
            >
              {tabs.map((tab) => (
                <TabsTrigger key={tab.key} value={tab.key} className="h-10">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {content.spotlight ? (
              <TabsContent value="spotlight">
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default">Spotlight</Badge>
                      <CardTitle className="text-2xl">{content.spotlight.heading}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      Featured moments, demos, and highlights from our collaboration.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {content.spotlight.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-sm leading-7 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}

                    {content.spotlight.bullets?.length ? (
                      <Accordion type="single" collapsible defaultValue="highlights" className="w-full">
                        <AccordionItem value="highlights" className="border-none">
                          <AccordionTrigger className="py-2">View spotlight highlights</AccordionTrigger>
                          <AccordionContent>
                            <ul className="mt-3 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                              {content.spotlight.bullets.map((bullet) => (
                                <li key={bullet} className="rounded-xl border border-border bg-background px-4 py-3">
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : null}
                  </CardContent>
                </Card>
              </TabsContent>
            ) : null}

            <TabsContent value="expertise">
              <ExpertiseCard partnerName={content.partner.name} expertise={content.expertise} />
            </TabsContent>

            {content.offerings?.length ? (
              <TabsContent value="offerings">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Offerings</CardTitle>
                    <CardDescription>Programs and services delivered with {content.partner.name}.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple" className="w-full">
                      {content.offerings.map((offering) => (
                        <AccordionItem key={offering.heading} value={slugify(offering.heading)}>
                          <AccordionTrigger>{offering.heading}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {offering.items.map((item) => (
                                <li key={item} className="leading-7">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ) : null}

            {content.sections?.length ? (
              <TabsContent value="partnership">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Partnership</CardTitle>
                    <CardDescription>Why teams choose Infobell to deliver with {content.partner.name}.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple" className="w-full">
                      {content.sections.map((section) => (
                        <AccordionItem key={section.heading} value={slugify(section.heading)}>
                          <AccordionTrigger>{section.heading}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {section.bullets.map((bullet) => (
                                <li key={bullet} className="leading-7">
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ) : null}
          </Tabs>
        ) : (
          <div className="mt-10">
            <ExpertiseCard partnerName={content.partner.name} expertise={content.expertise} />
          </div>
        )}

        {content.closing ? (
          <Card className="mt-10 border-primary/30 bg-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to explore with {content.partner.name}?</CardTitle>
              <CardDescription className="mx-auto max-w-3xl text-base text-foreground">
                {content.closing}
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>Contact us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ai">Explore all AI partnerships</Link>
              </Button>
            </CardFooter>
          </Card>
        ) : null}
      </div>
    </div>
  )
}

function ExpertiseCard({ partnerName, expertise }: { partnerName: string; expertise: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Our expertise</CardTitle>
        <CardDescription>Engineering capabilities Infobell brings to {partnerName} programs.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {expertise.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

