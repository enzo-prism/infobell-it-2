# Infobell IT Website Redesign Plan

This document captures how to rebuild the infobellit.com marketing site inside the Next.js codebase while preserving every page and the original written content captured in the legacy export (`/site-rebuild/www.infobellit.com`, kept outside the repo for size). A curated copy of the Blue Book HTML lives in `legacy-bluebook/` so report data remains reproducible without checking in the entire site.

## Objectives
- Mirror the legacy site’s information architecture, copy, assets, and CTAs so the redesigned site remains content-equivalent.
- Modernize implementation (components, data-driven content, responsive behavior) without altering page-per-page messaging.
- Centralize reusable copy blocks (expertise blurbs, product cards, job descriptions, service kits, etc.) so future updates stay in sync.

## Global Structure & Reusable Content
- **Navigation** (present on every HTML file):
  - Primary links: `Home`, `Solutions` (dropdown for Artificial Intelligence, High Performance Computing, Carbon Footprint and Sustainability, Performance Engineering, Cloud Native Development, Compliance and Confidential Computing), `Products` (dropdown for ConvoGene, Transcribe, Cloud Migration Advisor, Carbon Calculator, Cloud Control, EchoSwift, DocPrep for RAG, Blue Book Series), `Our Team`, `Our Clients`, `Our Locations`, CTA `Connect with us`.
  - Logo asset: `assets/imgs/clients/infobellLogo.png`.
- **Footer**:
  - Logo `assets/imgs/ib-f-logo.png`, copyright
    copy `© 2021-2025 Infobell IT Solutions Pvt. Limited`.
  - Links: `Careers`, `Privacy Policy`.
  - Social link: LinkedIn (`https://www.linkedin.com/company/infobell-it/`).
- **Brand elements**: animations (Swiper carousels), `Infobell-at-AMD-AI Day-2025.mp4`, hero gradient backgrounds, shared CSS (`main.css`, `responsive.css`).
- **Motion system**: shared animation utilities live in `styles/globals.css` (`animate-float`, `card-glow`, `hover-tilt`, etc.) with `prefers-reduced-motion` fallbacks. Reuse these helpers instead of adding bespoke keyframes per component.
- **Forms**: Contact form with fields `Name`, `Email`, `Phone Number`, `Subject`, `Description` and submit CTA `Send`.
  - Eight contact landing pages (`contactus.html?subject=...`) pre-set the “Subject” field for product inquiries.
- **Call-to-action banners** used across careers/legal pages: `Let’s make your project our next success story.` / `Let’s build today’s and tomorrow’s IT. Together.`

## Page Inventory & Required Content

### Primary Marketing Pages
- `/` (Home):
  - Hero headline: “Empowering the future through innovative IT solutions.”
  - Hero paragraph: `Infobell IT is a company dedicated to product development and advanced services, specializing in artificial intelligence, high-performance computing, modernization and cloud migration, and performance benchmarking and optimization. We offer a dozen customizable product frameworks for end-to-end automation, AI recommendation engines, and pricing and sustainability analysis.`
  - Press-release alert linking to `/press-releases/prease-release-amd-2025.html` labeled “New! Press Release: Infobell Expands Collaboration with AMD to Accelerate Enterprise-Ready AI Innovation”.
  - Embedded autoplay hero video `assets/video/Infobell-at-AMD-AI Day-2025.mp4` with supporting caption.
  - “Our Core Expertise” carousel — preserve six detailed blurbs:
    - **Artificial Intelligence**: “Identifying use cases and deploying AI and ML solutions… Partnering with industry leaders such as Nvidia, AMD and Intel.”
    - **High Performance Computing**: “Conducting rigorous performance benchmarking across bare-metal and cloud environments…” etc.
    - **Carbon Footprint and Sustainability**: “Leveraging innovative technologies for energy-efficient infrastructure…” etc.
    - **Performance Engineering**: “Application performance analysis and characterization on premise and cloud environments…” etc.
    - **Cloud Native Development**: “Designing and deploying full stack cloud native applications…” etc.
    - **Compliance and Confidential Computing**: “Assisting compliance teams… Experience in setup of a controlled environment (Sandbox)…” etc.
  - “Introducing Infobell Inference Framework eXpress (IFX)” card with paragraph: `Inference Framework eXpress is a scalable, open-source LLM inference stack engineered for performance, transparency, and enterprise readiness.` and CTA to `/ai/ifx`.
  - “Our Service Products” slider (ConvoGene, Transcribe, Cloud Migration Advisor, Carbon Calculator, Cloud Control, EchoSwift, DocPrep for RAG, VAST, SmartE) with exact taglines extracted from legacy HTML.
  - “Meet the Team” intro sentence (“Companies face the dual challenge…”) plus leadership cards (names, roles, portrait assets).
  - “Our Tech Stacks” grid listing React JS, Angular JS, Vue JS, Node Js, Java, Golang, Python, C, Kubernetes, Tanzu Kubernetes, Docker, Big Data, Linux kernel, VMware, OpenShift.

- `/clients`:
  - Headings “Our Clients”, “Our Affiliations”, “Our Tech Stacks”.
  - Client logo grids (use assets from `assets/images/client/`).
  - Tech stack list identical to home footer section.
- `/hpc`, `/sustainability`, `/performance`, `/cloud-native`, `/compliance`:
  - Deep-dive capability pages linked from the home “Core Expertise” section.
  - Each route includes a hero (title + tagline), overview copy, structured capability sections, sample use cases, and a consistent CTA pointing to `/contact`.
  - Backgrounds currently use themed Tailwind gradients until bespoke imagery is provided.

- `/team`:
  - Headline “Our Leadership”.
  - Intro paragraph: “All companies face a dual challenge…”
  - Team roster with names/roles: Ramana Bandili (CEO), Karthik Krishna (CTO), Lax Sakalkale (Growth Strategy Officer), Malini Rao (VP, Engineering), Sharada Bose (Sales and Strategy Advisor).

- `/locations`:
  - Copy block for Corporate HQ: `Infobell IT Solutions Pvt. Limited, 3rd Floor, The Cube - Karle Town Centre...`.
  - Sections “Global Presence” with regional categories (North America, Europe, Middle East).

- `/contactus`:
  - Headline “Get in touch... We want to find out how we can solve problems specific to your business...”
  - Contact details for Registered & Corporate Office (address above, email `info@infobellit.com`).
  - CTA banner “Let’s build today’s and tomorrow’s IT. Together.” with `Join our team` link.
  - Duplicate eight product-specific variants pre-filling “Subject”: ConvoGene, Transcribe, Cloud Migration Advisor, Carbon Calculator, Cloud Control, EchoSwift, DocPrep for RAG, VAST, SmartE. Plan: implement as `/contact` page that reads `?subject=` or dynamic route and renders same copy.

- `/privacy-policy`:
  - Section titles (Privacy Policy, Information That You Provide, Information That We Collect, Cookie Policy, Email Management, Children’s Personal Information, Third Party Disclosure) and paragraph copy.
  - FAQ prompt “How do we use your information?”.

- `/press-releases/prease-release-amd-2025`:
  - Headline “Infobell Expands Collaboration with AMD to Accelerate Enterprise-Ready AI Innovation”.
  - Retain Business Wire style dateline paragraph, partnership quotes, customer testimonials (Gallery Systems, Triveni Turbines), closing CTA “Learn more at: www.infobellit.com”.
  - Contact: “Lax Sakalkale - lax@infobellit.com”.

### Solutions → Artificial Intelligence Microsite
- `/ai`:
  - Headline “Artificial Intelligence Solutions and Services” with intro paragraph summarizing enterprise AI offerings.
  - IFX blurb and CTA duplicate.
  - Blocks highlighting NVIDIA, AMD, Intel partnerships — include paragraphs present in legacy site, plus “Learn More” CTAs.
  - “Enterprise AI Solutions”, “AI & Cloud Intelligence”, “AgenticFlow - Agentic AI Solutions”, “AI Infrastructure and Software Development Services”, “Performance & Architecture Services”, and “Accelerate AI Go To Market – Ease of Adoption” lists; preserve repeated bullet points (TCO analysis, Benchmarking-as-a-Service, Run Experiments, Live Demo & Templates, etc.).

- `/ai/ifx`:
  - Title “Infobell Inference Framework eXpress (IFX) - High Performance Open Inference Platform for Enterprise AI”.
  - Sections with headings & bullet text exactly as legacy:
    - `Overview`, `Why IFX?` (Open and Flexible, High Throughput, Enterprise Ready, No Lock-in, Optimized for Service Kits).
    - `Technical Highlights` (Core Inferencing Engine, Executor & API Gateway, Accelerator Stack, etc.).
    - `Primary Use Cases`, `Customer Benefits`.
    - `IFX-Powered Enterprise AI Service Kits` listing DocPrep for RAG, ConvoGene, Transcribe, VAST, SmartE.
    - `Other Service Kits: AI and Cloud Intelligence` (EchoSwift, Carbon Calculator, Cloud Control, Cloud Migration Advisor).
    - `What is your AI Use Case?` CTA lines (“Ready to Deploy... Contact us to schedule a demo... Together with AMD...”).

- `/ai/amd`, `/ai/intel`, `/ai/nvidia`:
  - Retain each page’s hero heading (“Infobell AI Solutions powered by ...”).
  - Preserve descriptive paragraphs about partnerships, expertise highlights, bullet lists (`Our Expertise`, `Key Offerings`, `Why Infobell + NVIDIA`, etc.).
  - Keep event callouts on AMD page (sponsorship of AMD Advancing AI 2025) and meeting CTA on Intel page (“Let’s Connect”).

### Products → Contact Landing Pages
- Eight HTML files under `contactus.html?subject=...` replicate `/contactus`; capture the subject strings:
  - `ConvoGene`, `Transcribe`, `Cloud Migration Advisor`, `Carbon Calculator`, `Cloud Control`, `EchoSwift`, `DocPrep for RAG`, `SmartE`, `VAST`.
  - Plan to surface these as dynamic Next.js routes that reuse `/contact` template with preselected subject label and consistent copy.

### Careers
- `/careers`:
  - Hero headline “Join our team today” with supporting paragraph (“We are known for our agile entrepreneurship... Join us on this exciting journey...”).
  - Job cards and CTA `Apply Now` linking to detail pages; each card includes role name and location (Bengaluru).
    - Server Performance Benchmark Engineers
    - DevOps & DevSecOps
    - Cloud Dev Engineer
    - Python Linux Engineer
    - Bringup Automation Software Engineer
    - UI developer
    - QA Engineer
    - Linux Upstream developer
    - Software Performance Test Developer
    - Control-plane Infrastructure Software

- Job detail pages (each includes headline, one-paragraph “Job Responsibilities / Skill-Set”, and CTA to mail `info@infobellit.com`):
  - `/careers-detail` (Server Performance Benchmark Engineers) – text referencing SPEC benchmarks, Linux expertise.
  - `/Devops` – compliance frameworks, tools like Tenable Nessus, HashiCorp Vault, QRadar.
  - `/Automatione` – detailed description of automation for server/rack bring-up, handling firmware, DHCP, problem isolation.
  - `/Software-Performance` – load/stress testing with JMeter, Docker/Kubernetes, Grafana reporting.
  - `/cloudplane` – enterprise systems, Kubernetes admin, GoLang/Python/C++, Linux, Agile practices.
  - `/cloude` – Kubernetes platform & CRD development, Go/C/C++, virtualization, microservices, cloud platforms, analytical skills.
  - `/linuxe` – “6-10 years of Linux OS experience” / “Linux upstream developers”.
  - `/pythone` – Linux OS expertise, Go/Python/C++, security hardening, networking, scripting.
  - `/qae` – Linux OS experience, Kubernetes/Docker knowledge, test automation.
  - `/UI` – “3+ years of ReactJS developer”.

- Related jobs carousel on detail pages (shows QA Engineer, DevOps & DevSecOps).

### Blue Book Series
- `/BlueBookSeries/BlueBook`:
  - Categories: Cloud Instances Performance Evaluations, Bare Metal Performance Evaluations, AI-IN-A-BOX Performance Evaluations, Virtualization Performance Evaluations.
  - Each card links to one of 26 detailed benchmark HTML reports.

- Blue Book detail pages (ensure new site hosts each as standalone route with download CTA `Get it now` and the respective `Performance Evaluation` heading text). Titles/headings to migrate:
  - `IBPE-ALICLOUD16vCPU2024-1001`: “Performance Evaluation Of Alibaba Cloud Instances”.
  - `IBPE-ALICLOUD32vCPU2024-1004`: same heading.
  - `IBPE-AliCloud-AMDvsIntel-8to64vCPU-2025-1028`: “Performance Evaluation of Alibaba Cloud Instances with AMD EPYC™ “Turin (Zen 5)” CPUs and Intel® Xeon® “Granite Rapids” CPUs (8–64 vCPUs)”.
  - `IBPE-AliCloud-AMDTurin(Zen-5c)vsIntel-8to64vCPU-2025-1030`: heading with AMD “Turin” vs Intel “Granite Rapids”.
  - `IBPE-BYTEDANCECLOUD16vCPU2024-1002`, `...32vCPU2024-1005`: Bytedance instances (16/32 vCPU).
  - `IBPE-TENCENTCLOUD16vCPU2024-1003`, `...32vCPU2024-1006`.
  - `IBPE-Tencent-Cloud-AMD-Intel-16-to-64-vCPU-2025-1026` and `IBPE-TencentCloud-AMDvsIntel–16-64vCPUs-2025-1031`.
  - `IBPE-AWSCLOUD16vCPU2024-1007`, `IBPE-AWS-Graviton3-vs-Graviton4-2025-1025`.
  - `IBPE-AZURECLOUD16vCPU2024-1008`.
  - `IBPE-Volcengine-AMDvsIntel-8to64vCPU-2025-1029`.
  - Bare metal: `IBPE-SUPERMICRO-2024-1009`, `1010`, `1011`, `IBPE-BareMetal-2025-1021`, `IBPE-FOXCONN-2024-1012`, `1013`, `SPECINT-Energy-1001`.
  - AI-in-a-Box: `IBPE-NUTANIX-1014`, `IBPE-OPENSHIFT-1015`, `IBPE-NVIDIANIMS-1016`, `IBPE-VMWARE-1017`.
  - Virtualization/VMmark: `IBPE-vSphere-vs-OSV-2025-1020`, `VMmark4-1001`.
  - Migration/Software: `IBPE-HPE-Morpheus-VM-Essentials-2025-1022`, `IBPE-HPEMorpheusVMEssentials-2025-1027`, `IBPE-RED-HAT-OPENSHIFT-MIGRATION-2025-1024`.
  - Ensure download CTA text `Get it now` and descriptive paragraphs remain intact (consider storing full HTML/Markdown).

### Additional Assets
- Keep `robots.txt` / `sitemap.xml` from the legacy export (store locally under `site-rebuild/`), and replicate those behaviors via Next.js static files as needed.
- Images under `assets/images`, `assets/imgs` (client logos, team photos, product artwork) to be copied into `public/`.
- Video `assets/video/Infobell-at-AMD-AI Day-2025.mp4` for hero carousel.

## Implementation Strategy
1. **Content Modeling**
   - Create structured data (TypeScript/JSON/MDX) for:
     - Core Expertise cards (`lib/content/expertise.ts`).
     - Product offerings slider (`lib/content/products.ts` with names, descriptions, CTA URLs, image paths).
     - Team roster, tech stacks, client logos.
     - Careers listings and detailed job descriptions (role, summary, mailto CTA, related jobs).
     - AI microsite sections (header text, bullet arrays).
     - Blue Book metadata (slug, category, heading, summary, download description).
   - Map contact subjects to query-friendly slugs.

2. **App Router Layout**
   - Use shared layout for navigation/footer.
   - Group marketing routes under `app/(marketing)/` (e.g., `/app/(marketing)/page.tsx`, `/clients/page.tsx`, `/team/page.tsx`).
   - Create nested segment `app/(marketing)/ai/` for AI microsite (index + `ifx`, `amd`, `intel`, `nvidia`).
   - Careers routes under `app/(marketing)/careers/` with dynamic `[slug]`.
   - Blue Book series under `app/(marketing)/bluebook/` with dynamic detail route `[report]/page.tsx`.
   - Contact page as `app/(marketing)/contact/page.tsx` reading `searchParams.subject`.

3. **Componentization**
   - Build reusable components for hero sections, carousels (Swiper alternative or custom slider), call-to-action banners, cards.
   - Integrate Next.js Image component referencing copied assets.
   - Implement video player component for hero.

4. **Content Migration Workflow**
   - Manually proof text copies from each legacy HTML using this plan as checklist.
   - For long-form pages (IFX, AI/AMD, press release, privacy policy), consider storing raw Markdown to keep formatting manageable while ensuring copy fidelity.
   - Validate that typography preserves bold phrases (e.g., SPEC benchmarks, AMD Instinct™) where present.

5. **Routing & SEO**
   - Recreate legacy slugs whenever practical (e.g., `/BlueBookSeries/...` becomes `/bluebook/...` with redirects).
   - Provide canonical URLs and meta descriptions matching legacy `<meta>` tags (home, careers, contact, press release, AI pages).
   - Update `robots.txt` and `sitemap.xml` during deployment to include all new routes.

6. **Forms & CTAs**
   - Implement contact form front-end replicating fields + success messaging; integrate backend/email solution later.
   - Ensure `Apply Now` buttons open default mail client to `info@infobellit.com`.
   - External CTAs (Convogene live demo, LinkedIn) must retain target URLs.

7. **Styling & Animations**
   - Port visual identity into Tailwind or CSS Modules; replicate color palette, gradients, card hovers from legacy `main.css`/`responsive.css`.
   - Replace Swiper carousels with accessible slider component (or use `swiper` React bindings).
   - Maintain responsive breakpoints comparable to existing site.

8. **Testing & Verification**
   - Content parity review: diff new rendered HTML against legacy copy for every page in this inventory.
   - Cross-browser/device smoke tests for navigation, sliders, video playback, forms.
   - Lighthouse accessibility/performance checks to catch regressions introduced during redesign.

## Outstanding Questions / Follow-ups
1. Should legacy query-string contact pages map to dedicated static paths (`/contact/[subject]`) or remain query-based for SEO parity?
2. Do we need downloadable PDFs for Blue Book reports, or is HTML landing + contact CTA sufficient?
3. Any backend integration for contact form submissions and press-release subscription CTA?
4. Is there a desired CMS source, or will content stay hard-coded/MDX in repo?

Use this plan as the master checklist while building each Next.js page to guarantee the redesigned site carries forward every page and piece of written content from the legacy snapshot (reference your local `site-rebuild/` mirror and the tracked `legacy-bluebook/` data).
