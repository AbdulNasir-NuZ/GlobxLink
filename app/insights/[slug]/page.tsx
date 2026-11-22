import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../articles";
import ContentNav from "../../content-nav";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article
    ? {
        title: `${article.title} | GlobxLink Insights`,
        description: article.description,
      }
    : { title: "Insight not found | GlobxLink" };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <ContentNav />
      <main className="content-page article-page">
      <article className="article-content">
        <p className="content-eyebrow">GlobxLink · {article.category}</p>
        <h1>{article.title}</h1>
        <p className="article-lead">{article.description}</p>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <aside className="content-boundary">
          GlobxLink coordinates cross-border trade. Checks depend on available
          evidence and do not guarantee supplier performance or transaction
          outcomes. Seek qualified professional advice for your specific
          circumstances.
        </aside>
        <Link className="text-link" href="/insights/">
          ← Back to Insights
        </Link>
      </article>
      </main>
    </>
  );
}
