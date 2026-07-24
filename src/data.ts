/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem } from './types';

export const HERO_DATA = {
  descriptor: "Inquiry Clarity & Follow-Up Workflows",
  headline: "Refining the digital touchpoints where client interest meets action.",
  supportingCopy: "Concise, project-based structure for founder-led brands. I unify fractured client paths and design clean follow-up loops—bypassing agency bloat.",
  primaryCta: "Share Feedback",
  secondaryCta: "View Support Areas",
  portraitCaption: "Casey Wilcox — Denver, Colorado."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "lead-follow-up",
    label: "PRIMARY AUDIT",
    title: "Lead Follow-Up Workflow Review",
    description: "An audit of your customer entry points and active follow-up loops.",
    details: "Built for founders moving fast. I pinpoint exactly where inquiries get lost across emails, forms, and spreadsheets, mapping a cohesive next-step sequence to capture every opportunity.",
    bulletPoints: [
      "Inquiry and follow-up mapping",
      "Lead source inventory",
      "Spreadsheet & CRM audit",
      "Communication-gap analysis",
      "Immediate recommendation brief"
    ],
    prominence: "primary"
  },
  {
    id: "website-message-clarity",
    label: "FOCUSED CRITIQUE",
    title: "Website & Message Clarity Review",
    description: "A high-impact positioning critique to eliminate confusion and friction.",
    details: "Your service might be solid, but your messaging could be unclear. I distill your offer into precise, action-focused copy recommendations that convert interest into action.",
    bulletPoints: [
      "Positioning and offer audit",
      "Headline & hierarchy critique",
      "Call-to-action optimization",
      "Actionable copy recommendations"
    ],
    prominence: "secondary"
  },
  {
    id: "digital-business-card",
    label: "CONCEPT SPRINT",
    title: "Digital Card Content Sprint",
    description: "A content and hierarchy blueprint for mobile-optimized referral links.",
    details: "Focused entirely on mobile page structure and clean triggers. A crisp content concept—no custom design, coding, or hosting required.",
    bulletPoints: [
      "Mobile-first architecture",
      "Concise content flow",
      "Call-to-action placement"
    ],
    prominence: "developing"
  }
];

export const PROCESS_DATA = {
  label: "HOW IT WORKS",
  title: "A simple, high-velocity review process.",
  description: "No endless retainer cycles. Just focused, collaborative intervention to align your client-facing pathways.",
  steps: [
    {
      number: "01",
      title: "Context Audit",
      description: "A brief, sharp conversation to map your current brand touchpoints and friction."
    },
    {
      number: "02",
      title: "Asset Dissection",
      description: "A detailed review of your active pages, copy structures, and lead-tracking setups."
    },
    {
      number: "03",
      title: "Friction Mapping",
      description: "Identifying precisely where client attention fractures or inquiries stall."
    },
    {
      number: "04",
      title: "Actionable Blueprint",
      description: "Receive a tailored, high-clarity recommendations playbook you can deploy instantly."
    }
  ]
};

export const FIT_SCOPE_DATA = {
  label: "FIT AND BOUNDARIES",
  title: "Good Fit & Outside Current Scope",
  footer: "Focused support, not agency overhead.",
  goodFit: [
    "Has a real service and existing market demand.",
    "Needs clearer positioning or onboarding language.",
    "Receives inquiries through scattered channels.",
    "Wants a cleaner, more organized follow-up path.",
    "Wants a fast project rather than a long contract.",
    "Can implement recommendations internally."
  ],
  outsideScope: [
    "Full website design or development",
    "Technical SEO or paid ad management",
    "CRM implementation or migration",
    "Lead-generation or conversion guarantees",
    "Ongoing sales-team or campaign execution",
    "Legal, tax, insurance, or compliance advisory"
  ]
};

export const ABOUT_DATA = {
  label: "",
  title: "Bridging the gap between brand intent and operational execution.",
  paragraphs: [
    "I operate at the intersection of digital communication, operational discipline, and curated client experiences. My career has been spent navigating fast-paced agency roles, coordinating daily workflows, and scaling onboarding systems with meticulous focus.",
    "Having managed success for 40+ brand accounts, supported workflow for 100+ daily leads, and delivered a 27% increase in client engagement, I understand how easily momentum is lost in client-facing friction.",
    "I am translating this experience into a highly focused consulting format—helping founders cultivate smooth pathways, elegant copy, and crisp follow-up systems."
  ],
  metrics: [
    {
      metric: "100+ Daily Leads",
      label: "Workflow support and documentation in high-velocity client environments.",
      context: "Tie to prior Truckster workflow; not a result from the proposed service."
    },
    {
      metric: "40+ Client Accounts",
      label: "Onboarding, retention, and cross-functional coordination in agency roles.",
      context: "Tie to prior agency environment; not an SMB consulting caseload."
    },
    {
      metric: "27% Engagement Lift",
      label: "Designed and executed a three-month retargeting campaign.",
      context: "Tie narrowly to the three-month retargeting email campaign."
    }
  ]
};

export const CONTACT_DATA = {
  label: "",
  title: "Let's refine your client-facing flow.",
  paragraphs: []
};
