import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./articles";
import ContentNav from "../content-nav";

export const metadata: Metadata = {
  title: "Insights | GlobxLink",
  description:
    "Practical guides to cross-border sourcing, supplier checks, and trade readiness.",
};

export default function InsightsPage() {
  return (
    <>
      <ContentNav />
      <main className="content-page">
      <section className="content-hero">
        <p className="content-eyebrow">GlobxLink · Insights</p>
        <h1>Practical questions for cross-border buyers.</h1>
        <p>
          Read clear starting points for evaluating providers and preparing a
          transaction. Every trade and provider is different; confirm details
          for your specific request.
        </p>
      </section>
      <section className="content-card-grid" aria-label="Insights articles">
        {articles.map((article) => (
          <article className="content-card" key={article.slug}>
            <span>{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link href={`/insights/${article.slug}/`}>Read the article →</Link>
          </article>
        ))}
      </section>
      </main>
    </>
  );
}
