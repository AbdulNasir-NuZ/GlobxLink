import type { Metadata } from "next";
import Link from "next/link";
import ContentNav from "../content-nav";

export const metadata: Metadata = {
  title: "Services | GlobxLink",
  description:
    "Choose a Trade Readiness & Coordination Assessment or a Provider Request for your international trade need.",
};

const services = [
  {
    slug: "trade-readiness-assessment",
    title: "Trade Readiness & Coordination Assessment",
    description:
      "A structured review of your transaction's requirements, counterparties, commitments and potential execution risks — with a path into ongoing monitoring and coordination where needed.",
    label: "Recommended · Start here",
  },
  {
    slug: "provider-request",
    title: "Find a Provider",
    description:
      "A lighter way in when you have a defined need and want a relevant provider shortlist.",
    label: "Provider Request · Express lane",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ContentNav />
      <main className="content-page">
      <section className="content-hero">
        <p className="content-eyebrow">GlobxLink · Services</p>
        <h1>Two ways in. One coordinated path.</h1>
        <p>
          Most cross-border trade starts with one of two needs: finding a
          suitable provider or making an existing transaction ready for
          execution.
        </p>
        <p>
          GlobxLink supports both. We help businesses assess potential providers,
          structure transaction requirements, monitor agreed commitments,
          coordinate inspections where needed, and address execution issues.
        </p>
        <p>
          Start with a Trade Readiness & Coordination Assessment if you already
          have a transaction. Choose a Provider Request if you need help
          identifying suitable providers.
        </p>
      </section>
      <section className="content-card-grid" aria-label="GlobxLink services">
        {services.map((service) => (
          <article className="content-card" key={service.slug}>
            <span>{service.label}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link href={`/services/${service.slug}/`}>Explore this service →</Link>
          </article>
        ))}
      </section>
      <p className="content-boundary">
        GlobxLink provides cross-border trade coordination and execution
        support. It is not a marketplace, freight forwarder, customs broker or
        payment provider, and does not guarantee supplier performance, product
        quality, delivery or transaction outcomes. It does not hold or move
        funds. Basic physical checks follow an agreed scope; specialised
        technical inspections are coordinated through qualified partners.
      </p>
      </main>
    </>
  );
}
