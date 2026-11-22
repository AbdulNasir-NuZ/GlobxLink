import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentNav from "../../content-nav";

type ServiceDetails = {
  title: string;
  description: string;
  label: string;
  who: string;
  problem: string;
  scope: string;
  deliverables: string;
  process: string[];
  request: string;
  boundary: string;
};

const services: Record<string, ServiceDetails> = {
  "trade-readiness-assessment": {
    title: "Trade Readiness & Coordination Assessment",
    description: "Know what your transaction needs before you commit to it.",
    label: "Recommended · Start here",
    who:
      "Businesses with a specific cross-border transaction — sourcing, negotiating terms, in execution, or resolving an issue — who want it to proceed with fewer surprises.",
    problem:
      "Between agreement and delivery, requirements drift, documents lag, responsibilities blur, and changes do not reach everyone. Many of these problems are visible early if someone is looking for them.",
    scope:
      "A structured review of one transaction: corridor and markets, product and specifications, counterparty status, commercial terms, documentation, milestones, and the main constraint most likely to delay or disrupt it.",
    deliverables:
      "A clear read of what is confirmed, what is unconfirmed, and what is exposed; a prioritised list of what to address; and a defined next step — including, where it fits, moving into ongoing coordination.",
    process: [
      "Share a short brief on one transaction",
      "Complete a structured assessment",
      "Review findings and the next step",
      "Optionally agree a coordination engagement",
    ],
    request:
      "Message “ASSESSMENT” with your corridor and product, or use the enquiry form and select Trade Readiness Assessment.",
    boundary:
      "GlobxLink coordinates — it does not hold or move funds, clear customs, or forward freight, and it does not guarantee outcomes. Scope and any further work are agreed before commitments are made.",
  },
  "provider-request": {
    title: "Find a Provider (Provider Request)",
    description: "When you just need the right provider — a lighter way in.",
    label: "The express lane",
    who:
      "Businesses that only need to find or check a provider for a defined requirement, and are not yet working on a full transaction.",
    problem:
      "“Can you find me a supplier?” is easy to ask and hard to answer well. A shortlist is only as good as the brief behind it: requirements, location, quantity, timing, budget, and the evidence a provider must be able to show.",
    scope:
      "We identify potential providers, assess them against your stated requirements, and prepare a shortlist. Availability, pricing, capability, and terms are confirmed per request, not assumed; we do not imply every provider is verified.",
    deliverables:
      "A short, relevant shortlist matched to your brief, with the checks we were able to make and what still needs confirming.",
    process: [
      "Send a clear brief: product or service, location, quantity, timing, and essential conditions",
      "We assess potential providers and prepare a shortlist",
      "You review the options and available evidence",
    ],
    request:
      "Message “PROVIDER REQUEST” with a short brief, or use the enquiry form and select Provider Request.",
    boundary:
      "If a provider request becomes a live transaction involving terms, documents, milestones, or delivery, it can move into a Trade Readiness & Coordination engagement. Discovery is the way in; coordination is the value.",
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  return service
    ? { title: `${service.title} | GlobxLink`, description: service.description }
    : { title: "Service not found | GlobxLink" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <ContentNav />
      <main className="content-page service-detail">
      <section className="content-hero">
        <p className="content-eyebrow">GlobxLink · {service.label}</p>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <Link className="btn primary" href="/#contact">
          Request this service ↗
        </Link>
      </section>
      <div className="service-detail-grid">
        <section>
          <h2>Who it’s for</h2>
          <p>{service.who}</p>
        </section>
        <section>
          <h2>The problem</h2>
          <p>{service.problem}</p>
        </section>
        <section>
          <h2>Scope</h2>
          <p>{service.scope}</p>
        </section>
        <section>
          <h2>Deliverables</h2>
          <p>{service.deliverables}</p>
        </section>
        <section className="service-process">
          <h2>Process</h2>
          <ol>
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2>How to request</h2>
          <p>{service.request}</p>
          <Link className="text-link" href="/#contact">
            Open the enquiry form →
          </Link>
        </section>
      </div>
      <aside className="content-boundary">
        <strong>Service boundaries</strong>
        <p>{service.boundary}</p>
      </aside>
      </main>
    </>
  );
}
