// data.js — All dashboard data. Auto-updated by Sam (AI Chief of Staff).
// Last updated: 2026-03-18 08:00 CDT

const LAST_UPDATED = "2026-03-18 08:00 CDT";

const PRIORITIES = [
  {
    level: "red",
    title: "ASA 990 Filing — 13 Days Out",
    detail: "Form 990 due March 31, 2026. Confirm preparer status, board review, e-file readiness. No margin for slippage.",
    org: "ASA"
  },
  {
    level: "red",
    title: "StarSense / Process Technology Deal",
    detail: "Finalize structure, due diligence, financial modeling. Counterparty: Tom Richards (Willoughby, OH). Two-track term sheet in play.",
    org: "StarSense"
  },
  {
    level: "red",
    title: "Supabase Security Alert",
    detail: "Security vulnerabilities detected in one or more Supabase projects. Received 3/18. Needs triage — determine which project, severity, and remediation path.",
    org: "ASA"
  },
  {
    level: "yellow",
    title: "ASA All Hands — Thu Mar 20",
    detail: "All Hands on calendar Thursday 3/20 at 1:00 PM CT. Confirm agenda, any materials needed.",
    org: "ASA"
  },
  {
    level: "yellow",
    title: "iConnections Follow-Up",
    detail: "Private webinar for institutional investors from Miami 2026 panel. Draft invite, set date, prep deck.",
    org: "Elevon"
  },
  {
    level: "yellow",
    title: "ASA Content Production",
    detail: "Podcast (Record ATX partnership), short-form video pipeline, quarterly donor brief. Strategy and schedule TBD.",
    org: "ASA"
  },
  {
    level: "yellow",
    title: "Candid Seal of Transparency",
    detail: "ASA's Candid (GuideStar) profile may have outdated info. 2025 Seal of Transparency renewal flagged — donors are actively viewing the profile. Update before 990 deadline.",
    org: "ASA"
  },
  {
    level: "yellow",
    title: "Book DOPSR Review",
    detail: "\"Everyday Occurrences\" (St. Martin's Press) in government pre-publication review. No action until cleared — monitor status.",
    org: "Personal"
  },
  {
    level: "green",
    title: "Weekly Web Sync — Thu Mar 19",
    detail: "Web Sync on calendar Thursday 3/19 at 5:30 PM CT.",
    org: "ASA"
  },
  {
    level: "green",
    title: "Texas Relocation Admin",
    detail: "TX driver's license, VA enrollment transfer, address updates, Elevon TX foreign qualification.",
    org: "Personal"
  },
  {
    level: "green",
    title: "AIAA UAPIOC Governance",
    detail: "Committee Ryan chairs. Ongoing governance, meeting scheduling, membership coordination.",
    org: "ASA"
  },
  {
    level: "green",
    title: "ASA State Legislative Strategy",
    detail: "Model bills, state partnerships. Active: NJ A5712, VT H.654. Building national backbone for state airspace anomaly reporting.",
    org: "ASA"
  },
  {
    level: "green",
    title: "Elevon / SynMax Advisory",
    detail: "Active engagement with Bill Perkins. Ongoing Navy SME advisory deliverables.",
    org: "Elevon"
  }
];

const INBOX_HIGHLIGHTS = [
  {
    from: "Stripe",
    subject: "ASA payout $265.07 on the way",
    date: "Mar 18",
    note: "Expected to arrive today. No action needed.",
    flag: "info"
  },
  {
    from: "Supabase",
    subject: "Security vulnerabilities detected",
    date: "Mar 18",
    note: "Needs triage. Identify affected project(s) and severity.",
    flag: "urgent"
  },
  {
    from: "Candid",
    subject: "2025 Seal of Transparency renewal",
    date: "Mar 17",
    note: "ASA donor profile may be stale. Update before 990 filing.",
    flag: "action"
  },
  {
    from: "Google",
    subject: "New sign-in alert (ryan@safeaerospace.org)",
    date: "Mar 17–18",
    note: "Two alerts, both on Mac. Likely from OpenClaw gws auth session. Verify if expected.",
    flag: "review"
  }
];

const CALENDAR = [
  { date: "Today — Wed Mar 18", event: "Daily Tag Up", time: "9:00 AM CT", org: "ASA" },
  { date: "Thu Mar 19", event: "Weekly Web Sync", time: "5:30 PM CT", org: "ASA" },
  { date: "Fri Mar 20", event: "Daily Tag Up", time: "9:00 AM CT", org: "ASA" },
  { date: "Fri Mar 20", event: "ASA All Hands", time: "1:00 PM CT", org: "ASA" },
  { date: "Mon Mar 23", event: "Daily Tag Up", time: "9:00 AM CT", org: "ASA" },
  { date: "Wed Mar 25", event: "Daily Tag Up", time: "9:00 AM CT", org: "ASA" }
];

const ENTITIES = {
  asa: {
    name: "Americans for Safe Aerospace",
    abbr: "ASA",
    tagline: "Evidence-based aviation safety advocacy",
    type: "501(c)(3) Nonprofit",
    colorPrimary: "#1a2b4a",
    colorAccent: "#c4960f",
    status: "Operational — 30,000+ members, 1,000+ verified pilot reports",
    items: [
      "990 deadline — March 31 (13 days)",
      "All Hands — Thu Mar 20 at 1:00 PM CT",
      "Candid Seal of Transparency — update needed",
      "Content pipeline: podcast (Record ATX), video, donor brief",
      "State legislative: NJ A5712, VT H.654",
      "AIAA UAPIOC governance (Ryan chairs)"
    ]
  },
  elevon: {
    name: "Elevon Advisory Corporation",
    abbr: "Elevon",
    tagline: "Defense tech consulting & Navy SME advisory",
    type: "Delaware S-Corp (TX foreign qualification pending)",
    colorPrimary: "#2d3748",
    colorAccent: "#4a90d9",
    status: "Active — SynMax (Bill Perkins) engagement ongoing",
    items: [
      "SynMax advisory deliverables",
      "iConnections investor webinar — draft invite & date",
      "TX state qualification in progress",
      "Pipeline development — defense/IC clients"
    ]
  },
  starsense: {
    name: "StarSense Innovations LLC",
    abbr: "StarSense",
    tagline: "Defense & aerospace technology commercialization",
    type: "LLC — Co-founded with Michael Lembeck",
    colorPrimary: "#1a3a2a",
    colorAccent: "#38a169",
    status: "Active deal — Process Technology acquisition/licensing",
    items: [
      "Process Technology deal — Tom Richards (Willoughby, OH)",
      "Two-track term sheet in play",
      "Due diligence & financial modeling",
      "IP licensing framework"
    ]
  }
};

const CONTACTS = [
  {
    name: "Michael Lembeck",
    org: "StarSense Innovations",
    context: "Co-founder. Aerospace engineering background. Joint decision-maker on all StarSense deals.",
    lastContact: "—"
  },
  {
    name: "Tom Richards",
    org: "Process Technology",
    context: "Deal counterparty, Willoughby OH. Principal of Process Technology. Active negotiation.",
    lastContact: "—"
  },
  {
    name: "Bill Perkins",
    org: "SynMax / Elevon",
    context: "Elevon advisory client. High-net-worth, defense-tech investor.",
    lastContact: "—"
  },
  {
    name: "Record ATX",
    org: "ASA Content Partner",
    context: "Austin-based production studio. Podcast & video content for ASA.",
    lastContact: "—"
  },
  {
    name: "St. Martin's Press",
    org: "Publisher",
    context: "Publisher of \"Everyday Occurrences.\" Book in DOPSR government review.",
    lastContact: "—"
  }
];
