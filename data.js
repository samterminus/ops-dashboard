// data.js — All dashboard data. Edit here to update the dashboard.

const PRIORITIES = [
  {
    level: "red",
    title: "StarSense / Process Technology Deal",
    detail: "Finalize structure, due diligence, financial modeling. Counterparty: Tom Richards (Willoughby, OH).",
    org: "StarSense"
  },
  {
    level: "red",
    title: "ASA 990 Filing Deadline",
    detail: "Form 990 due March 31, 2026. Monitor preparer status, board review, e-file.",
    org: "ASA"
  },
  {
    level: "yellow",
    title: "Book DOPSR Review",
    detail: "\"Everyday Occurrences\" (St. Martins Press) in government pre-publication review. Monitor status, no action until cleared.",
    org: "Personal"
  },
  {
    level: "yellow",
    title: "iConnections Follow-Up",
    detail: "Private webinar for institutional investors sourced at Miami 2026. Draft invite, set date, prep deck.",
    org: "Elevon"
  },
  {
    level: "yellow",
    title: "ASA Content Production",
    detail: "Podcast recording (Record ATX), short-form video pipeline, quarterly donor brief.",
    org: "ASA"
  },
  {
    level: "green",
    title: "Texas Relocation Admin",
    detail: "TX driver's license, VA enrollment transfer, address updates across accounts, Elevon TX qualification.",
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
    title: "ASA State Legislative Tracker",
    detail: "Model bills, state partnerships. Active: NJ A5712, VT H.654.",
    org: "ASA"
  },
  {
    level: "green",
    title: "Elevon / SynMax Advisory",
    detail: "Active engagement with Bill Perkins. Ongoing defense-tech advisory deliverables.",
    org: "Elevon"
  }
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
      "990 filing deadline — March 31",
      "Content pipeline: podcast, video, donor brief",
      "State legislative tracking: NJ A5712, VT H.654",
      "AIAA UAPIOC governance (Ryan chairs)",
      "Membership growth & pilot outreach"
    ]
  },
  elevon: {
    name: "Elevon Advisory Corporation",
    abbr: "Elevon",
    tagline: "Defense tech consulting & Navy SME advisory",
    type: "Delaware S-Corp",
    colorPrimary: "#2d3748",
    colorAccent: "#4a90d9",
    status: "Active — SynMax (Bill Perkins) engagement ongoing",
    items: [
      "SynMax advisory deliverables",
      "iConnections investor webinar follow-up",
      "TX state qualification (relocation)",
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
      "Process Technology deal (Tom Richards)",
      "Structure finalization & due diligence",
      "Financial modeling",
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
    org: "SynMax",
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
    name: "St. Martins Press",
    org: "Publisher",
    context: "Publisher of \"Everyday Occurrences.\" Book in DOPSR government review.",
    lastContact: "—"
  }
];
