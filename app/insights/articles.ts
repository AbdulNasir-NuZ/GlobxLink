export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const articles: InsightArticle[] = [
  {
    slug: "buyers-before-paying",
    title: "What should buyers check before paying an overseas supplier?",
    description:
      "A practical prepayment checklist for reviewing supplier identity, evidence, terms, documents, and transaction checkpoints.",
    category: "Buyer checklist",
    sections: [
      {
        heading: "Start with the exact counterparty",
        paragraphs: [
          "Confirm the supplier’s legal name, registration details, business address, and the entity named on the quotation and contract. If a third party requests payment, independently clarify its relationship to the supplier before changing the beneficiary.",
          "Use contact details obtained independently to confirm material changes to bank or beneficiary information. A familiar email thread alone is not enough to validate a new payment instruction.",
        ],
      },
      {
        heading: "Match evidence to your requirement",
        paragraphs: [
          "Ask for evidence that is relevant to the specific product and order: specifications, samples where appropriate, references, production information, and any documents required for your market. Check dates, names, scope, and whether the evidence actually supports the claim being made.",
          "A document or reference can support a check, but it does not guarantee future performance or remove the need for your own professional review.",
        ],
      },
      {
        heading: "Put the commercial terms in writing",
        paragraphs: [
          "Make sure buyer and supplier agree on the product description, quantity, quality requirements, price, currency, delivery responsibilities, timing, document list, and how changes will be handled. Clarify who is responsible for each checkpoint.",
        ],
        bullets: [
          "Resolve gaps between the quotation, purchase order, and contract.",
          "Define objective acceptance or inspection checkpoints with the parties or an appointed inspector.",
          "Have qualified legal, banking, tax, and trade professionals review terms where needed.",
        ],
      },
      {
        heading: "Plan the next decision before funds move",
        paragraphs: [
          "Map what must be confirmed before each commitment and how updates will be shared. Payment arrangements are defined and carried out by the buyer and supplier through their chosen providers; a coordination service does not hold or move funds.",
          "If important facts remain unconfirmed, record them, assign an owner, and agree whether to pause or proceed. No checklist can guarantee a supplier or transaction outcome.",
        ],
      },
    ],
  },
  {
    slug: "finding-a-capable-provider",
    title:
      "Why finding a supplier is not the same as finding a capable supplier",
    description:
      "How to turn a broad sourcing request into provider criteria you can assess and confirm.",
    category: "Provider discovery",
    sections: [
      {
        heading: "A name is only the beginning",
        paragraphs: [
          "A directory result or introduction can help create a lead, but it says little by itself about whether a provider fits a particular order. Capability depends on the product, specification, quantity, location, timing, and commercial terms.",
          "Write down what “capable” means for this request before comparing options. That makes gaps visible and reduces the chance of mistaking a polished profile for evidence.",
        ],
      },
      {
        heading: "Make the brief specific",
        paragraphs: [
          "Describe the product or service, materials or technical requirements, acceptable substitutions, quantity, destination, delivery window, and budget range. Include the documents or references a provider should be able to share.",
        ],
        bullets: [
          "Separate essential requirements from preferences.",
          "State how samples, specifications, or references will be reviewed.",
          "Identify who makes the final commercial decision.",
        ],
      },
      {
        heading: "Check the fit against available evidence",
        paragraphs: [
          "Ask each candidate the same core questions. Compare the evidence received with your requirements, note what has not been checked, and confirm availability, pricing, capability, and terms for the actual request rather than assuming them.",
          "Checks vary by provider and request. A shortlist is not a certification, endorsement, or guarantee of future performance.",
        ],
      },
      {
        heading: "Keep the next step clear",
        paragraphs: [
          "Record the options, open questions, and owner of each follow up. If discovery becomes a live transaction involving terms, documents, milestones, or delivery, the work may need a broader trade-readiness and coordination scope.",
        ],
      },
    ],
  },
  {
    slug: "moq-capacity-lead-times",
    title: "Understanding MOQ, production capacity, and lead times",
    description:
      "A buyer’s guide to minimum order quantities, available production capacity, and realistic supplier schedules.",
    category: "Production planning",
    sections: [
      {
        heading: "What an MOQ tells you, and what it does not",
        paragraphs: [
          "A minimum order quantity (MOQ) is the smallest order a supplier is currently willing to accept under stated conditions. It may reflect setup effort, material purchasing, packaging, batch size, or the supplier’s commercial policy.",
          "Ask whether the MOQ applies per product, specification, colour, size, or production run, and whether a different quantity changes the price or schedule. Treat an MOQ as a term to confirm, not proof of capacity.",
        ],
      },
      {
        heading: "Ask about capacity for your order window",
        paragraphs: [
          "A factory’s stated maximum output is not necessarily the capacity available for your order. Current commitments, staffing, materials, maintenance, and product complexity can change what is feasible.",
          "Ask for the quantity the supplier can allocate during the requested period, what assumptions that estimate depends on, and when it can be reconfirmed. Where appropriate, agree on checkpoints with the supplier and an appointed inspector.",
        ],
      },
      {
        heading: "Define when lead time starts",
        paragraphs: [
          "Lead time can mean different things. Clarify whether the estimate starts after order confirmation, approved specifications, sample approval, receipt of materials, or another event. Separate production time from packing, inspection, documentation, and transport planning.",
        ],
        bullets: [
          "List each prerequisite and the person responsible for it.",
          "Ask which events could change the schedule and how changes will be communicated.",
          "Include review and handoff time rather than planning only around factory production.",
        ],
      },
      {
        heading: "Put assumptions into the transaction plan",
        paragraphs: [
          "Record quantity, specification, capacity, timing, and dependencies in writing, then revisit them when the order or requirements change. Supplier statements and estimates should be confirmed for the specific order; they are not guarantees of production or delivery.",
        ],
      },
    ],
  },
];
