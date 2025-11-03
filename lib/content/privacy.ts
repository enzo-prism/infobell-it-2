export type PrivacySection = {
  heading: string
  body: string[]
  bullets?: string[]
  tail?: string[]
}

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    heading: "Privacy Policy",
    body: [
      "Our privacy policy has been compiled to better serve those who are concerned with how their “Personally Identifiable Information” (PII) is being used online. PII is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. This document describes how we collect, use, protect, or otherwise handle your PII.",
    ],
  },
  {
    heading: "Information That You Provide",
    body: [
      "We ask for and may collect personal information from you when you submit web forms on our website, or when you use interactive features of the website including but not limited to communicating with us on live chat, participation in webinars, polls, quizzes, calculators/evaluators, or otherwise communicating with us.",
      "We may collect the following details:",
      "Name",
      "Company",
      "Email address",
      "Phone number",
      "If we sign an agreement, further information may be collected based on the agreement requirements which may include information like your company address. In the regular course of communication, we may store offered or provided contact information like IM handles. If you apply for a position with us, we may collect or store your submitted resume and any other additional information you may provide voluntarily or in response to our further queries.",
    ],
  },
  {
    heading: "Information That We Collect",
    body: [
      "When you visit our website, our web server may detect and store information about your system and your location in our web logs. We also use third-party services to collect standard details of visitor behaviour patterns (e.g. number of visitors to various parts of our web page) in a way which does not identify anyone. If you reach out to us, some third-party services may try to relate behavioural information with the information you have provided to give a better picture of your interactions with us.",
      "We use services that enable us to serve optimized advertising based on your past behaviour on our website. This is possible by tracking usage data and cookies by third-party services that manage remarketing and behaviour targeting activities. We typically use Google Ads and Facebook custom audience but may use other providers from time to time.",
    ],
  },
  {
    heading: "Cookie Policy",
    body: [
      "Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser and may be stored by it depending on its settings. We and our third-party services use cookies to collect information as described above. You can instruct your browser to refuse all cookies, accept only some of them, or to indicate when a cookie is being sent.",
    ],
  },
  {
    heading: "How do we use your information?",
    body: ["We may use the information collected above in the following manner:"],
    bullets: [
      "To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.",
      "To send periodic emails regarding other offers, products, and/or services.",
      "To send you event-related updates, reminders, and confirmations.",
      "To send you technical notices, updates, security alerts, and support and administrative messages.",
      "To respond to your comments, questions, and requests and provide customer service and support.",
      "To communicate with you about products, services, offers, promotions, rewards, and events offered by us, as well as provide news and information we think will be of interest to you.",
      "To monitor and analyze trends, usage, and activities in connection with our content and website performance.",
      "To personalize content and present you with advertising, content, or features that we believe will be of interest or useful to you.",
    ],
    tail: [
      "For those seeking employment with us, we shall use your PII solely for the purpose of evaluating your fitment and for contacting you in relation to exploring employment with us.",
    ],
  },
  {
    heading: "Email Management",
    body: [
      "You will receive an email from Infobell only in response to a prior request for information, expression of interest, or similar outreach. All Infobell emails will include a link in the footer where you can select your communication preferences or unsubscribe altogether.",
    ],
  },
  {
    heading: "Children's Personal Information",
    body: [
      "We do not specifically market to children under 13 and thus do not knowingly collect PII from children under the age of 13. If you have reason to believe that a child under 13 years has provided PII to us, please contact us as per the information given below and we will use commercially reasonable efforts to delete that information.",
    ],
  },
  {
    heading: "Third Party Disclosure",
    body: [
      "When you register for a sponsored event, your information may be shared with our event partners. Their use of your PII shall be governed by their separate and independent privacy policies which may be different from this privacy policy. We have no responsibility or liability arising from their use of your PII.",
      "Infobell IT Solutions may disclose information when it has a good faith belief that access, use, preservation, or disclosure of information is reasonably necessary to satisfy any requirement of law, regulation, legal process, or enforceable governmental request; to enforce or investigate a potential violation of the Terms of Use; to detect, prevent, or otherwise respond to fraud, security, or technical concerns; to support auditing and compliance functions; or to protect the rights, property, or safety of Infobell IT, its users, or the public against harm.",
    ],
  },
]
