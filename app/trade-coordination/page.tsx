import Link from "next/link";
import { embeddedStudio } from "./embedded-studio";
import TradeDraftForm from "./trade-draft-form";

export const metadata = {
  title: "Trade Coordination | GlobxLink",
  description:
    "Prepare a structured trade coordination proposal with the GlobxLink studio.",
};

export default function TradeCoordinationPage() {
  return (
    <main className="trade-page">
      <header className="trade-header">
        <Link className="trade-brand" href="/" aria-label="GlobxLink home">
          <img src="/logos/header-logo.svg" alt="GlobxLink" />
        </Link>
        <Link className="trade-back" href="/">
          ← Back to GlobxLink
        </Link>
      </header>

      <section className="trade-intro" aria-labelledby="trade-title">
        <p className="trade-eyebrow">GlobxLink · Trade Coordination</p>
        <h1 id="trade-title">Proposal &amp; Quotation Studio</h1>
        <p>
          Build a clearer picture of your transaction, responsibilities, and
          milestones. Your information stays in the studio until you choose to
          export it.
        </p>
      </section>

      <section className="trade-studio" aria-label="Trade Coordination studio">
        <iframe
          className="trade-studio-frame"
          srcDoc={embeddedStudio}
          title="GlobxLink Trade Coordination proposal and quotation studio"
          loading="lazy"
        />
      </section>

      <section className="trade-fallback" aria-labelledby="draft-title">
        <div>
          <p className="trade-eyebrow">Local fallback</p>
          <h2 id="draft-title">Prepare an inquiry draft</h2>
          <p>
            If the interactive studio is unavailable, create and download a
            request draft here. This form does not submit data to a server.
          </p>
        </div>
        <TradeDraftForm />
      </section>

      <footer className="trade-footer">
        <img src="/logos/footer-logo.svg" alt="GlobxLink" />
        <span>Global Connections · The Middle of Trade</span>
      </footer>
    </main>
  );
}
