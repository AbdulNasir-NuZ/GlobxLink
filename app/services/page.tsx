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
      "A structured review of one international transaction before you commit further.",
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
          Most trade work starts with one of two needs: getting a transaction
          ready to run, or finding the right provider. Both can lead to
          coordinated execution through the middle of trade.
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
        GlobxLink coordinates international trade. It does not hold or move
        funds, clear customs, forward freight, or guarantee outcomes. Scope and
        any further work are agreed before commitments are made.
      </p>
      </main>
    </>
  );
}
