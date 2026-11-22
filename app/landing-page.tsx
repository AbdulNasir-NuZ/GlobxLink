import type { CSSProperties } from "react";
import ContactInquiryForm from "./contact-inquiry-form";
import SiteHeader from "./site-header";

export function LandingPage() {
  return (
    <>
    <SiteHeader />
    <main>
      <section
      aria-label={"GlobxLink introduction"}
      className={"hero"}
      id={"home"}>
        <div
      className={"container hero-layout"}>
          <div
      className={"hero-copy reveal"}>
            <span
      className={"label"}>
              {"International trade coordination"}
            </span>
            <h1>
              {"The missing link between "}
              <span className={"emphasis"}>
                {"trade ambition"}
              </span>
              {" and execution."}
            </h1>
            <p
      className={"lead"}>
              {"GlobxLink is positioned around the operational middle of international trade, helping businesses bring structure, visibility, and better coordination to what happens between agreement and delivery."}
            </p>
            <div
      className={"hero-actions"}>
              <a
      className={"btn primary gxl-trade-cta"}
      href={"/trade-coordination/"}>
                {"Start Trade Coordination ↗"}
              </a>
              <a
      className={"btn secondary"}
      href={"#platform"}>
                {"Explore the Platform ↗"}
              </a>
              <a
      className={"btn secondary"}
      href={"#how"}>
                {"How It Works →"}
              </a>
            </div>
            <div
      className={"hero-points"}>
              <span>
                <b>
                  {"✓"}
                </b>
                {" Counterparty checks"}
              </span>
              <span>
                <b>
                  {"◈"}
                </b>
                {" Structured milestones"}
              </span>
              <span>
                <b>
                  {"◎"}
                </b>
                {" Execution visibility"}
              </span>
            </div>
          </div>
          <div
      className={"globe-shell reveal"}
      id={"globe"}
      style={{"--delay": "100ms"} as CSSProperties}>
            <div
      className={"globe-head"}>
              <strong>
                {"Compare our globes"}
              </strong>
              <div
      aria-label={"Globe styles"}
      className={"globe-switch"}
      role={"tablist"}>
                <button
      aria-controls={"globe-tactical"}
      aria-selected={"false"}
      className={"globe-tab"}
      data-globe={"tactical"}
      id={"tab-tactical"}
      role={"tab"}
      type={"button"}>
                  {"Tactical"}
                </button>
                <button
      aria-controls={"globe-interactive"}
      aria-selected={"true"}
      className={"globe-tab"}
      data-globe={"interactive"}
      id={"tab-interactive"}
      role={"tab"}
      type={"button"}>
                  {"Interactive"}
                </button>
              </div>
            </div>
            <div
      className={"globe-viewport"}>
              <div
      className={"globe-screen"}
      id={"globe-tactical"}
      role={"tabpanel"}
      aria-labelledby={"tab-tactical"}>
                <canvas
      aria-label={"Tactical globe showing trade connections; drag to rotate"}
      id={"canvas-tactical"}></canvas>
              </div>
              <div
      className={"globe-screen current"}
      id={"globe-interactive"}
      aria-labelledby={"tab-interactive"}
      role={"tabpanel"}>
                <canvas
      aria-label={"Interactive globe showing trade connections; drag to rotate"}
      id={"canvas-interactive"}
      tabIndex={0}></canvas>
              </div>
              <div
      className={"globe-tip"}
      id={"globeTip"}></div>
              <button
      aria-label={"Pause globe rotation"}
      className={"globe-control"}
      id={"globePause"}
      title={"Pause / resume"}>
                {"Ⅱ"}
              </button>
              <div
      className={"globe-hint"}>
                {"Drag to rotate · Scroll to zoom"}
              </div>
            </div>
            <div
      className={"globe-source"}
      id={"globeSource"}>
              {"Interactive"}
            </div>
          </div>
        </div>
        <div
      aria-hidden={"true"}
      className={"wave-line"}>
          <svg
      preserveAspectRatio={"none"}
      viewBox={"0 0 1440 50"}>
            <path
      d={"M0 24 Q280 60 540 28 T1080 28 T1440 23 V50 H0Z"}
      fill={"#fff"}></path>
          </svg>
        </div>
      </section>
      <section
      aria-labelledby={"questions-title"}
      className={"questions"}>
        <div
      className={"container"}>
          <div
      className={"questions-header reveal"}>
            <div>
              <span
      className={"label"}>
                {"What Businesses Need"}
              </span>
              <h2
      className={"section-title"}
      id={"questions-title"}>
                {"Confidence at every critical moment."}
              </h2>
            </div>
            <p
      className={"section-desc"}>
              {"Four questions that shape international trade, from the first conversation through the unexpected."}
            </p>
          </div>
          <div
      className={"question-grid"}>
            <a
      className={"question-card reveal"}
      href={"#solutions"}
      style={{"--delay": "0ms"} as CSSProperties}>
              <div
      className={"picture"}>
                <img
      alt={"Supplier check: magnifying glass and business buildings"}
      src={"/images/trade-question-cards/question_1.webp"} />
              </div>
              <div
      className={"copy"}>
                <span
      className={"stage"}>
                  {"Before Commitment"}
                </span>
                <h3>
                  {"Can I trust who I’m dealing with?"}
                </h3>
                <span
      aria-hidden={"true"}
      className={"arrow"}>
                  {"›"}
                </span>
              </div>
            </a>
            <a
      className={"question-card reveal"}
      href={"#solutions"}
      style={{"--delay": "70ms"} as CSSProperties}>
              <div
      className={"picture"}>
                <img
      alt={"Payment milestones: transaction checkpoints and secure lock"}
      src={"/images/trade-question-cards/question_2.webp"} />
              </div>
              <div
      className={"copy"}>
                <span
      className={"stage"}>
                  {"Before Payment"}
                </span>
                <h3>
                  {"Can this deal be set up safely?"}
                </h3>
                <span
      aria-hidden={"true"}
      className={"arrow"}>
                  {"›"}
                </span>
              </div>
            </a>
            <a
      className={"question-card reveal"}
      href={"#solutions"}
      style={{"--delay": "140ms"} as CSSProperties}>
              <div
      className={"picture"}>
                <img
      alt={"Execution monitoring: GlobxLink trade coordination mark"}
      src={"/images/trade-question-cards/question_3.webp"} />
              </div>
              <div
      className={"copy"}>
                <span
      className={"stage"}>
                  {"Before Shipment"}
                </span>
                <h3>
                  {"Is execution happening as agreed?"}
                </h3>
                <span
      aria-hidden={"true"}
      className={"arrow"}>
                  {"›"}
                </span>
              </div>
            </a>
            <a
      className={"question-card reveal"}
      href={"#solutions"}
      style={{"--delay": "210ms"} as CSSProperties}>
              <div
      className={"picture"}>
                <img
      alt={"Issue resolution: protective shield and support ring"}
      src={"/images/trade-question-cards/question_4.webp"} />
              </div>
              <div
      className={"copy"}>
                <span
      className={"stage"}>
                  {"When Problems Arise"}
                </span>
                <h3>
                  {"What happens if something goes wrong?"}
                </h3>
                <span
      aria-hidden={"true"}
      className={"arrow"}>
                  {"›"}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section
      className={"services section"}
      id={"services"}>
        <div className={"container"}>
          <div className={"section-head reveal"}>
            <span className={"label"}>{"Our Services"}</span>
            <h2 className={"section-title"}>
              {"Two ways in. One coordinated path."}
            </h2>
            <p className={"section-desc"}>
              {"Most trade work starts with one of two needs, getting a transaction ready to run, or finding the right provider. Both can lead to coordinated execution through the middle of trade. Start with the Assessment for a full transaction; choose a Provider Request when you only need to find or check a provider."}
            </p>
          </div>
          <div className={"service-offer-grid"}>
            <article className={"service-offer service-offer-featured reveal"}>
              <span className={"service-kicker"}>
                {"Recommended · Start here"}
              </span>
              <h3>{"Trade Readiness & Coordination Assessment"}</h3>
              <p>
                {"A structured review of one international transaction before you commit further."}
              </p>
              <ul>
                <li>{"Clarify what is confirmed, unconfirmed, and exposed"}</li>
                <li>{"Review corridor, specifications, terms, documents, and milestones"}</li>
                <li>{"Prioritise the next steps and likely constraints"}</li>
              </ul>
              <a className={"btn dark"} href={"/services/trade-readiness-assessment/"}>
                {"Explore the Assessment →"}
              </a>
            </article>
            <article className={"service-offer reveal"} style={{"--delay": "90ms"} as CSSProperties}>
              <span className={"service-kicker"}>{"Express lane"}</span>
              <h3>{"Find a Provider"}</h3>
              <p>
                {"A lighter way in when you have a defined need and want a relevant provider shortlist."}
              </p>
              <ul>
                <li>{"Share product or service, location, quantity, and timing"}</li>
                <li>{"Review potential providers against your stated requirements"}</li>
                <li>{"See which checks were made and what still needs confirming"}</li>
              </ul>
              <a className={"btn secondary"} href={"/services/provider-request/"}>
                {"Explore Provider Requests →"}
              </a>
            </article>
          </div>
        </div>
      </section>
      <section
      className={"process section"}
      id={"solutions"}>
        <div
      className={"container"}>
          <div
      className={"process-title reveal"}>
            <div>
              <span
      className={"label"}>
                {"Our Process"}
              </span>
              <h2
      className={"section-title"}>
                {"Verify. Structure."}
                <br />
                <span
      className={"accent"}>
                  {"Track. Coordinate."}
                </span>
              </h2>
            </div>
            <p
      className={"section-desc"}>
              {"Four connected stages designed to help businesses move forward with greater clarity and confidence."}
            </p>
          </div>
          <div
      className={"process-grid"}>
            <article
      className={"process-card reveal"}
      style={{"--delay": "0ms"} as CSSProperties}>
              <div
      className={"process-art"}>
                <img
      alt={"Verification"}
      src={"/images/process-stages/process_1.webp"} />
                <span
      className={"process-num"}>
                  {"STAGE 1"}
                </span>
              </div>
              <div
      className={"process-content"}>
                <h3>
                  {"Verify"}
                </h3>
                <p
      className={"process-question"}>
                  {"Can I trust who I’m dealing with?"}
                </p>
                <ul
      className={"process-list"}>
                  <li>
                    {"Supplier introductions where available"}
                  </li>
                  <li>
                    {"Supplier and counterparty checks against available evidence"}
                  </li>
                  <li>
                    {"Commercial expectation clarification"}
                  </li>
                  <li>
                    {"Intelligence focused on this corridor"}
                  </li>
                </ul>
              </div>
              <div
      className={"process-outcome"}>
                <small>
                  {"OUTCOME"}
                </small>
                <p>
                  {"Greater confidence before time, money, and reputation are at risk."}
                </p>
              </div>
            </article>
            <article
      className={"process-card reveal"}
      style={{"--delay": "60ms"} as CSSProperties}>
              <div
      className={"process-art"}>
                <img
      alt={"Structured milestones"}
      src={"/images/process-stages/process_2.webp"} />
                <span
      className={"process-num"}>
                  {"STAGE 2"}
                </span>
              </div>
              <div
      className={"process-content"}>
                <h3>
                  {"Structure"}
                </h3>
                <p
      className={"process-question"}>
                  {"Can this deal be set up safely?"}
                </p>
                <ul
      className={"process-list"}>
                  <li>
                    {"Payment milestone mapping, buyer and supplier define terms; GlobxLink does not hold or move funds"}
                  </li>
                  <li>
                    {"Commercial terms and responsibilities"}
                  </li>
                  <li>
                    {"Order specifications and requirements"}
                  </li>
                  <li>
                    {"Documentation readiness"}
                  </li>
                </ul>
              </div>
              <div
      className={"process-outcome"}>
                <small>
                  {"OUTCOME"}
                </small>
                <p>
                  {"Reduced misunderstandings before money moves and production begins."}
                </p>
              </div>
            </article>
            <article
      className={"process-card reveal"}
      style={{"--delay": "120ms"} as CSSProperties}>
              <div
      className={"process-art"}>
                <img
      alt={"Tracking execution"}
      src={"/images/process-stages/process_3.webp"} />
                <span
      className={"process-num"}>
                  {"STAGE 3"}
                </span>
              </div>
              <div
      className={"process-content"}>
                <h3>
                  {"Track"}
                </h3>
                <p
      className={"process-question"}>
                  {"Is execution happening as agreed?"}
                </p>
                <ul
      className={"process-list"}>
                  <li>
                    {"Production follow up"}
                  </li>
                  <li>
                    {"Quality and quantity checkpoints, with the parties or an appointed inspector"}
                  </li>
                  <li>
                    {"Shipment readiness confirmation"}
                  </li>
                  <li>
                    {"On site coordination where arranged"}
                  </li>
                </ul>
              </div>
              <div
      className={"process-outcome"}>
                <small>
                  {"OUTCOME"}
                </small>
                <p>
                  {"Fewer costly surprises before cargo leaves the supplier."}
                </p>
              </div>
            </article>
            <article
      className={"process-card reveal"}
      style={{"--delay": "180ms"} as CSSProperties}>
              <div
      className={"process-art"}>
                <img
      alt={"Coordination across regions"}
      src={"/images/process-stages/process_4.webp"} />
                <span
      className={"process-num"}>
                  {"STAGE 4"}
                </span>
              </div>
              <div
      className={"process-content"}>
                <h3>
                  {"Coordinate"}
                </h3>
                <p
      className={"process-question"}>
                  {"What happens if something goes wrong?"}
                </p>
                <ul
      className={"process-list"}>
                  <li>
                    {"Stakeholder communication"}
                  </li>
                  <li>
                    {"Issue escalation support"}
                  </li>
                  <li>
                    {"Logistics coordination"}
                  </li>
                  <li>
                    {"International continuity management"}
                  </li>
                </ul>
              </div>
              <div
      className={"process-outcome"}>
                <small>
                  {"OUTCOME"}
                </small>
                <p>
                  {"Problems become manageable instead of damaging to relationships."}
                </p>
              </div>
            </article>
          </div>
          <p
      className={"process-bottom reveal"}>
            {"Less uncertainty. More coordinated action."}
          </p>
        </div>
      </section>
      <section
      className={"industries section"}
      id={"industries"}>
        <div
      className={"container"}>
          <div
      className={"section-head reveal"}>
            <span
      className={"label"}>
              {"Corridors & Industries"}
            </span>
            <h2
      className={"section-title"}>
              {"Different sectors. Shared need for clarity."}
            </h2>
            <p
      className={"section-desc"}>
              {"Different sectors have different requirements, from quality specifications and documentation to timing and reliable coordination."}
            </p>
            <a
      className={"industry-source-link"}
      href={"#middle-of-trade"}>
              {"Explore trade corridors ↗"}
            </a>
          </div>
          <div
      className={"industry-grid"}>
            <article
      className={"industry-card reveal"}>
              <div
      className={"industry-media"}>
                <img
      alt={"Agriculture and food commodities"}
      src={"/images/industries/agriculture.webp"} />
              </div>
              <span
      className={"industry-no"}>
                {"01 / INDUSTRY"}
              </span>
              <h3>
                {"Agriculture & Food Commodities"}
              </h3>
              <p>
                {"Raw materials, processed foods, and agricultural supply chains. Quality consistency matters."}
              </p>
            </article>
            <article
      className={"industry-card reveal"}
      style={{"--delay": "60ms"} as CSSProperties}>
              <div
      className={"industry-media"}>
                <img
      alt={"Textiles and apparel"}
      src={"/images/industries/textiles.webp"} />
              </div>
              <span
      className={"industry-no"}>
                {"02 / INDUSTRY"}
              </span>
              <h3>
                {"Textiles & Apparel"}
              </h3>
              <p>
                {"Fabrics, garments, uniforms, and textile manufacturing. Specifications and lead times matter."}
              </p>
            </article>
            <article
      className={"industry-card reveal"}
      style={{"--delay": "120ms"} as CSSProperties}>
              <div
      className={"industry-media"}>
                <img
      alt={"Construction and building materials"}
      src={"/images/industries/construction.webp"} />
              </div>
              <span
      className={"industry-no"}>
                {"03 / INDUSTRY"}
              </span>
              <h3>
                {"Construction & Building Materials"}
              </h3>
              <p>
                {"Building materials, finishing products, and infrastructure inputs. Bulk logistics and deadlines matter."}
              </p>
            </article>
            <article
      className={"industry-card reveal"}
      style={{"--delay": "180ms"} as CSSProperties}>
              <div
      className={"industry-media"}>
                <img
      alt={"Industrial machinery"}
      src={"/images/industries/machinery.webp"} />
              </div>
              <span
      className={"industry-no"}>
                {"04 / INDUSTRY"}
              </span>
              <h3>
                {"Industrial Machinery & Equipment"}
              </h3>
              <p>
                {"Production equipment, spare parts, and industrial systems. Technical accuracy matters."}
              </p>
            </article>
            <article
      className={"industry-card reveal"}
      style={{"--delay": "240ms"} as CSSProperties}>
              <div
      className={"industry-media"}>
                <img
      alt={"Medical supplies"}
      src={"/images/industries/medical-supplies.png"} />
              </div>
              <span
      className={"industry-no"}>
                {"05 / INDUSTRY"}
              </span>
              <h3>
                {"Medical Supplies & Healthcare Products"}
              </h3>
              <p>
                {"Medical consumables, equipment, and healthcare procurement. Compliance and reliability matter."}
              </p>
            </article>
          </div>
        </div>
      </section>
      <section
      aria-labelledby={"corridor-title"}
      className={"corridors section"}
      id={"middle-of-trade"}>
        <div
      className={"container corridor-layout"}>
          <div
      className={"corridor-copy reveal"}>
            <span
      className={"label"}>
              {"Across Borders"}
            </span>
            <h2
      className={"section-title"}
      id={"corridor-title"}>
              {"Coordinating the space between markets."}
            </h2>
            <p>
              {"Our initial commercial focus is the Africa to Türkiye corridor. Different geographies bring different documentation, timing, language, and operational considerations; a clear coordination framework helps make those moving parts visible."}
            </p>
            <div
      className={"corridor-tags"}>
              <span className={"corridor-active"}>
                {"Africa ↔ Türkiye · Initial focus"}
              </span>
              <span className={"corridor-context"}>
                {"China · Broader trade context"}
              </span>
              <span>
                {"International coordination"}
              </span>
            </div>
          </div>
          <div
      aria-label={"Trade corridor illustration for Africa, Türkiye, and China, with Africa to Türkiye as the initial focus"}
      className={"corridor-art reveal"}
      style={{"--delay": "120ms"} as CSSProperties}>
            <img
      alt={"Trade connections across Africa, Türkiye, and China; initial focus is Africa to Türkiye"}
      className={"corridor-feature-image"}
      decoding={"async"}
      height={482}
      loading={"lazy"}
      src={"/images/corridors/corridor-network.webp"}
      width={832} />
          </div>
        </div>
      </section>
      <section
      className={"platform section"}
      id={"platform"}>
        <div
      className={"container platform-grid"}>
          <div
      className={"reveal"}>
            <span
      className={"label"}>
              {"Concept view"}
            </span>
            <h2
      className={"section-title"}>
              {"How coordination works, a concept view."}
            </h2>
            <p
      className={"section-desc"}>
              {"GlobxLink is a coordination service. This illustrative interface describes a possible way to organize the work; it is not a live product or trade record."}
            </p>
            <div
      className={"platform-bullets"}>
              <p>
                <b>
                  {"✓"}
                </b>
                {" Define roles and expectations before commitment."}
              </p>
              <p>
                <b>
                  {"✓"}
                </b>
                {" Organize milestones and responsibilities."}
              </p>
              <p>
                <b>
                  {"✓"}
                </b>
                {" Keep progress and documentation visible."}
              </p>
              <p>
                <b>
                  {"✓"}
                </b>
                {" Escalate issues through clear procedures."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
      className={"how section"}
      id={"how"}>
        <div
      className={"container"}>
          <div
      className={"section-head reveal"}>
            <span
      className={"label"}>
              {"How It Works"}
            </span>
            <h2
      className={"section-title"}>
              {"A practical sequence from intent to execution."}
            </h2>
            <p
      className={"section-desc"}>
              {"From the first request to execution follow up, each stage has a clear purpose and set of decisions."}
            </p>
          </div>
          <div
      className={"how-grid"}>
            <article
      className={"how-card reveal"}>
              <div
      className={"how-no"}>
                {"01 / 04"}
              </div>
              <h3>
                {"Start with a need"}
              </h3>
              <p>
                {"Clarify the intended transaction, parties, scope, and commercial objectives."}
              </p>
            </article>
            <article
      className={"how-card reveal"}
      style={{"--delay": "70ms"} as CSSProperties}>
              <div
      className={"how-no"}>
                {"02 / 04"}
              </div>
              <h3>
                {"Verify and structure"}
              </h3>
              <p>
                {"Establish checks, responsibilities, milestones, and expectations."}
              </p>
            </article>
            <article
      className={"how-card reveal"}
      style={{"--delay": "140ms"} as CSSProperties}>
              <div
      className={"how-no"}>
                {"03 / 04"}
              </div>
              <h3>
                {"Coordinate execution"}
              </h3>
              <p>
                {"Bring progress, readiness, documents, and handoffs into a clearer view."}
              </p>
            </article>
            <article
      className={"how-card reveal"}
      style={{"--delay": "210ms"} as CSSProperties}>
              <div
      className={"how-no"}>
                {"04 / 04"}
              </div>
              <h3>
                {"Handle exceptions"}
              </h3>
              <p>
                {"Identify deviations early and create a defined path for follow up."}
              </p>
            </article>
          </div>
        </div>
      </section>
      <section
      className={"insights section"}
      id={"insights"}>
        <div className={"container"}>
          <div className={"section-head reveal"}>
            <span className={"label"}>{"Insights"}</span>
            <h2 className={"section-title"}>
              {"Practical questions for international buyers."}
            </h2>
            <p className={"section-desc"}>
              {"Clear, useful starting points for evaluating providers and preparing a transaction."}
            </p>
          </div>
          <div className={"insight-card-grid"}>
            <article className={"insight-card reveal"}>
              <span>{"BUYER CHECKLIST"}</span>
              <h3>{"What should buyers check before paying an overseas supplier?"}</h3>
              <p>
                {"Build a practical prepayment review around identity, evidence, terms, documents, and agreed checkpoints."}
              </p>
              <a href={"/insights/buyers-before-paying/"}>
                {"Read the article →"}
              </a>
            </article>
            <article className={"insight-card reveal"} style={{"--delay": "70ms"} as CSSProperties}>
              <span>{"PROVIDER DISCOVERY"}</span>
              <h3>{"Why finding a supplier is not the same as finding a capable supplier"}</h3>
              <p>
                {"Turn a broad sourcing request into criteria that can be assessed and confirmed."}
              </p>
              <a href={"/insights/finding-a-capable-provider/"}>
                {"Read the article →"}
              </a>
            </article>
            <article className={"insight-card reveal"} style={{"--delay": "140ms"} as CSSProperties}>
              <span>{"PRODUCTION PLANNING"}</span>
              <h3>{"Understanding MOQ, production capacity, and lead times"}</h3>
              <p>
                {"Learn how minimum orders, capacity, and schedule assumptions affect a supplier brief."}
              </p>
              <a href={"/insights/moq-capacity-lead-times/"}>
                {"Read the article →"}
              </a>
            </article>
          </div>
          <a className={"insights-more"} href={"/insights/"}>
            {"Visit the Insights hub →"}
          </a>
        </div>
      </section>
      <section
      aria-labelledby={"founders-heading"}
      className={"founders-section section"}
      id={"founders"}>
        <div
      className={"container"}>
          <div
      className={"founders-intro"}>
            <div>
              <span
      className={"label"}>
                {"The Team"}
              </span>
              <h2
      className={"section-title"}
      id={"founders-heading"}>
                {"People working across the middle of trade."}
              </h2>
              <p
      className={"section-desc"}>
                {"We started GlobxLink to address the operational realities of international trade through practical coordination and clearer handoffs."}
              </p>
              <p className={"team-context"}>
                {"A team of six across China, Türkiye, and Africa, plus remote engineering, with people joining as we partner and hire."}
              </p>
            </div>
          </div>
          <div
      className={"founders-grid"}>
            <article
      className={"founder-profile"}
      style={{"--delay": "0ms"} as CSSProperties}>
              <div
      aria-label={"Photo of Abdelhafiz \"Abdoo\""}
      className={"founder-mark founder-portrait"}>
                <span
      aria-hidden={"true"}
      className={"founder-photo-fallback"}>
                  {"AT"}
                </span>
                <img
      alt={"Abdelhafiz \"Abdoo\""}
      className={"founder-photo"}
      decoding={"async"}
      loading={"eager"}
      src={"/images/Team/Abdelhafiz%20Abdoo.png"} />
              </div>
              <div
      className={"founder-copy"}>
                <span
      className={"founder-role"}>
                  {"Founder & Principal Trade Facilitator"}
                </span>
                <h3>
                  {"Abdelhafiz \"Abdoo\""}
                </h3>
                <p
      className={"founder-fullname"}>
                  {"Abdelhafiz Mahfouz Ali Terab"}
                </p>
                <p
      className={"founder-biography"}>
                  {"Founder focused on facilitating international trade between African and Turkish businesses, coordinating supplier interactions and daily execution across language, culture, and operational complexity."}
                </p>
                <div
      className={"founder-socials"}>
                  <a
      aria-label={"Abdelhafiz \"Abdoo\", LinkedIn"}
      href={"https://www.linkedin.com/in/abdelhafiz-mahfouz-ali-terab-423b25149"}
      rel={"noopener noreferrer"}
      target={"_blank"}
      title={"LinkedIn"}>
                    <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={17}
      viewBox={"0 0 24 24"}
      width={17}>
                      <path
      d={"M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9.4h4v11.7H3V9.4Zm6.3 0h3.8V11h.1c.6-1.1 1.9-1.9 3.8-1.9 4.1 0 4.9 2.7 4.9 6.1v5.9h-4v-5.2c0-1.2 0-2.8-2-2.8-2.1 0-2.5 1.5-2.5 2.7v5.3h-4V9.4Z"}></path>
                    </svg>
                  </a>
                  <a
      aria-label={"Abdelhafiz \"Abdoo\", Email"}
      href={"mailto:partnerships@globxlink.com?subject=Message%20for%20Abdelhafiz%20%22Abdoo%22"}
      title={"Email"}>
                    <svg
      aria-hidden={"true"}
      fill={"none"}
      height={17}
      stroke={"currentColor"}
      strokeWidth={"1.8"}
      viewBox={"0 0 24 24"}
      width={17}>
                      <rect
      height={15}
      rx={"2"}
      width={19}
      x={"2.5"}
      y={"4.5"}></rect>
                      <path
      d={"m3.5 6 8.5 7 8.5-7"}></path>
                    </svg>
                  </a>
                  <a
      aria-label={"Abdelhafiz \"Abdoo\", X"}
      href={"https://x.com/abboodi36?s=11"}
      rel={"noopener noreferrer"}
      target={"_blank"}
      title={"X"}>
                    <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={16}
      viewBox={"0 0 24 24"}
      width={16}>
                      <path
      d={"M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"}></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article
      className={"founder-profile"}
      style={{"--delay": "80ms"} as CSSProperties}>
              <div
      aria-label={"Photo of Abdul Nasir"}
      className={"founder-mark founder-portrait"}>
                <span
      aria-hidden={"true"}
      className={"founder-photo-fallback"}>
                  {"AN"}
                </span>
                <img
      alt={"Abdul Nasir"}
      className={"founder-photo"}
      decoding={"async"}
      loading={"eager"}
      src={"/images/Team/Abdul%20Nasir.png"} />
              </div>
              <div
      className={"founder-copy"}>
                <span
      className={"founder-role"}>
                  {"Cofounder"}
                </span>
                <h3>
                  {"Abdul Nasir"}
                </h3>
                <p
      className={"founder-biography"}>
                  {"Product engineer leading the design of the GlobxLink coordination workspace concept, milestone structure, documentation flow, and partner integrations. Background in financial services systems where settlement evidence is essential."}
                </p>
                <div
      className={"founder-socials"}>
                  <a
      aria-label={"Abdul Nasir, LinkedIn"}
      href={"https://www.linkedin.com/in/abdul-nasirv/"}
      rel={"noopener noreferrer"}
      target={"_blank"}
      title={"LinkedIn"}>
                    <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={17}
      viewBox={"0 0 24 24"}
      width={17}>
                      <path
      d={"M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9.4h4v11.7H3V9.4Zm6.3 0h3.8V11h.1c.6-1.1 1.9-1.9 3.8-1.9 4.1 0 4.9 2.7 4.9 6.1v5.9h-4v-5.2c0-1.2 0-2.8-2-2.8-2.1 0-2.5 1.5-2.5 2.7v5.3h-4V9.4Z"}></path>
                    </svg>
                  </a>
                  <a
      aria-label={"Abdul Nasir, Email"}
      href={"mailto:partnerships@globxlink.com?subject=Message%20for%20Abdul%20Nasir"}
      title={"Email"}>
                    <svg
      aria-hidden={"true"}
      fill={"none"}
      height={17}
      stroke={"currentColor"}
      strokeWidth={"1.8"}
      viewBox={"0 0 24 24"}
      width={17}>
                      <rect
      height={15}
      rx={"2"}
      width={19}
      x={"2.5"}
      y={"4.5"}></rect>
                      <path
      d={"m3.5 6 8.5 7 8.5-7"}></path>
                    </svg>
                  </a>
                  <a
      aria-label={"Abdul Nasir, X"}
      href={"https://x.com/NasrUlZainAzran"}
      rel={"noopener noreferrer"}
      target={"_blank"}
      title={"X"}>
                    <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={16}
      viewBox={"0 0 24 24"}
      width={16}>
                      <path
      d={"M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"}></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article
      className={"founder-profile"}
      style={{"--delay": "160ms"} as CSSProperties}>
              <div
      aria-label={"Photo of Santhosh Patel"}
      className={"founder-mark founder-portrait"}>
                <span
      aria-hidden={"true"}
      className={"founder-photo-fallback"}>
                  {"SP"}
                </span>
                <img
      alt={"Santhosh Patel"}
      className={"founder-photo"}
      decoding={"async"}
      height={1000}
      loading={"eager"}
      src={"/images/Team/Santhosh%20Patel.png"}
      width={1000} />
              </div>
              <div
      className={"founder-copy"}>
                <span
      className={"founder-role"}>
                  {"Cofounder"}
                </span>
                <h3>
                  {"Santhosh Patel"}
                </h3>
                <p
      className={"founder-biography"}>
                  {"Systems engineer responsible for verification tooling and workflows. Focus on the underlying technical work that makes counterparty checks, document routing, and audit trails reliable enough to depend on in real transactions."}
                </p>
                <div
      className={"founder-socials"}>
                  <a
      aria-label={"Santhosh Patel, LinkedIn"}
      href={"https://www.linkedin.com/in/santhosh-patel/"}
      rel={"noopener noreferrer"}
      target={"_blank"}
      title={"LinkedIn"}>
                    <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={17}
      viewBox={"0 0 24 24"}
      width={17}>
                      <path
      d={"M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9.4h4v11.7H3V9.4Zm6.3 0h3.8V11h.1c.6-1.1 1.9-1.9 3.8-1.9 4.1 0 4.9 2.7 4.9 6.1v5.9h-4v-5.2c0-1.2 0-2.8-2-2.8-2.1 0-2.5 1.5-2.5 2.7v5.3h-4V9.4Z"}></path>
                    </svg>
                  </a>
                  <a
      aria-label={"Santhosh Patel, Email"}
      href={"mailto:partnerships@globxlink.com?subject=Message%20for%20Santhosh%20Patel"}
      title={"Email"}>
                    <svg
      aria-hidden={"true"}
      fill={"none"}
      height={17}
      stroke={"currentColor"}
      strokeWidth={"1.8"}
      viewBox={"0 0 24 24"}
      width={17}>
                      <rect
      height={15}
      rx={"2"}
      width={19}
      x={"2.5"}
      y={"4.5"}></rect>
                      <path
      d={"m3.5 6 8.5 7 8.5-7"}></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
      className={"about section"}
      id={"about"}>
        <div
      className={"container about-layout"}>
          <div
      className={"reveal"}>
            <span
      className={"label"}>
              {"About GlobxLink"}
            </span>
            <h2
      className={"section-title"}>
              {"We focus on what happens between the big decisions."}
            </h2>
            <p
      className={"section-desc"}>
              {"We focus on the operational middle of international trade, where commercial confidence depends on trust, coordination, and practical execution."}
            </p>
            <p
      className={"about-text"}>
              {"Trade is a chain of commitments. Every commercial journey involves people, information, payments, processes, and changing conditions. Bringing those elements into a connected framework is the central idea behind GlobxLink."}
            </p>
            <div className={"about-links"}>
              <a href={"#how"}>{"How It Works →"}</a>
              <a href={"#founders"}>{"The Team →"}</a>
            </div>
          </div>
          <div
      className={"about-stack reveal"}
      style={{"--delay": "120ms"} as CSSProperties}>
            <div
      className={"about-piece"}>
              <b>
                {"01"}
              </b>
              <div>
                <strong>
                  {"Clarity"}
                </strong>
                <p>
                  {"Give stakeholders a common understanding of expectations and progress."}
                </p>
              </div>
            </div>
            <div
      className={"about-piece"}>
              <b>
                {"02"}
              </b>
              <div>
                <strong>
                  {"Structure"}
                </strong>
                <p>
                  {"Make the checkpoints and handoffs of trade easier to follow."}
                </p>
              </div>
            </div>
            <div
      className={"about-piece"}>
              <b>
                {"03"}
              </b>
              <div>
                <strong>
                  {"Coordination"}
                </strong>
                <p>
                  {"Support a more connected operating experience across involved parties."}
                </p>
              </div>
            </div>
            <div
      className={"about-piece"}>
              <b>
                {"04"}
              </b>
              <div>
                <strong>
                  {"Follow through"}
                </strong>
                <p>
                  {"Make follow up actions and responsibilities visible."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
      className={"contact section"}
      id={"contact"}>
        <div
      className={"container contact-layout"}>
          <div
      className={"reveal"}>
            <span
      className={"label"}>
              {"Start a Conversation"}
            </span>
            <h2
      className={"section-title"}>
              {"Let's make trade clearer together."}
            </h2>
            <p
      className={"contact-quote"}>
              {"Choose the service that best matches your need, then tell us the corridor, product, and current stage of the transaction."}
            </p>
            <div
      className={"contact-chips"}>
              <span>
                {"Provider Request"}
              </span>
              <span>
                {"Trade Readiness Assessment"}
              </span>
              <span>
                {"Partnerships"}
              </span>
            </div>
          </div>
          <ContactInquiryForm />
        </div>
      </section>
    </main>
    <footer
      className={"footer"}>
      <div
      className={"container"}>
        <div
      className={"footer-feature reveal"}>
          <h2>
            {"The middle of trade is where "}
            <span>
              {"clarity becomes action."}
            </span>
          </h2>
          <a
      className={"btn primary"}
      href={"#contact"}>
            {"Let's Connect ↗"}
          </a>
        </div>
        <div
      className={"footer-columns"}>
          <div
      className={"footer-brand"}>
            <a
      aria-label={"GlobxLink home"}
      className={"footer-identity-frame"}
      href={"#home"}>
              <img
      alt={"GlobxLink"}
      src={"/logos/footer-logo.svg"} />
            </a>
            <p>
              {"A coordination service for the middle of international trade, where clear expectations, visibility, and practical follow through matter."}
            </p>
            <div
      aria-label={"Social media"}
      className={"gxl-social"}>
              <div
      className={"gxl-social-meta"}>
                <strong>
                  {"Social media"}
                </strong>
                <small>
                  {"Links coming soon"}
                </small>
              </div>
              <div
      className={"gxl-social-icons"}>
                <span
      aria-label={"LinkedIn"}
      className={"gxl-social-icon"}
      role={"img"}>
                  <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={19}
      viewBox={"0 0 24 24"}
      width={19}>
                    <path
      d={"M4.8 3.5a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zM3 9.3h3.7V21H3V9.3zm6.2 0h3.5v1.6h.1a3.9 3.9 0 0 1 3.5-1.9c3.8 0 4.5 2.5 4.5 5.8V21h-3.7v-5.5c0-1.3 0-3-1.8-3s-2.3 1.4-2.3 2.9V21H9.2V9.3z"}></path>
                  </svg>
                </span>
                <span
      aria-label={"Instagram"}
      className={"gxl-social-icon"}
      role={"img"}>
                  <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={19}
      viewBox={"0 0 24 24"}
      width={19}>
                    <rect
      fill={"none"}
      height={18}
      rx={"5"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      width={18}
      x={"3"}
      y={"3"}></rect>
                    <circle
      cx={"12"}
      cy={"12"}
      fill={"none"}
      r={"4"}
      stroke={"currentColor"}
      strokeWidth={"2"}></circle>
                    <circle
      cx={"17.5"}
      cy={"6.8"}
      r={"1.2"}></circle>
                  </svg>
                </span>
                <span
      aria-label={"Facebook"}
      className={"gxl-social-icon"}
      role={"img"}>
                  <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={19}
      viewBox={"0 0 24 24"}
      width={19}>
                    <path
      d={"M14.4 21v-7.7h2.6l.4-3.1h-3V8.3c0-.9.3-1.5 1.6-1.5h1.6V4.1c-.3 0-1.2-.1-2.3-.1-2.7 0-4.4 1.6-4.4 4.5v1.7H8.4v3.1h2.5V21z"}></path>
                  </svg>
                </span>
                <span
      aria-label={"X"}
      className={"gxl-social-icon"}
      role={"img"}>
                  <svg
      aria-hidden={"true"}
      fill={"currentColor"}
      height={19}
      viewBox={"0 0 24 24"}
      width={19}>
                    <path
      d={"M4 4h3.8l5 6.8L18.8 4H21l-7.2 8.2L21.5 21h-3.8l-5.5-7.5L5.6 21H3.3l7.8-8.9L4 4zm2.3 1.7L18.5 19h.9L7.2 5.7h-.9z"}></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div
      className={"footer-col"}>
            <h3>
              {"Explore"}
            </h3>
            <a
      href={"#home"}>
              {"Home"}
            </a>
            <a
      href={"/services/"}>
              {"Services"}
            </a>
            <a
      href={"#middle-of-trade"}>
              {"Corridors"}
            </a>
            <a
      href={"/insights/"}>
              {"Insights"}
            </a>
            <a
      href={"#how"}>
              {"How It Works"}
            </a>
            <a href={"#founders"}>{"The Team"}</a>
          </div>
          <div
      className={"footer-col"}>
            <h3>
              {"Company"}
            </h3>
            <a
      href={"#about"}>
              {"About GlobxLink"}
            </a>
            <a
      href={"#contact"}>
              {"Contact"}
            </a>
            <a
      href={"#contact"}>
              {"Provider Request"}
            </a>
            <a
      href={"/services/trade-readiness-assessment/"}>
              {"Trade Readiness Assessment"}
            </a>
            <a
      href={"#contact"}>
              {"Partnerships"}
            </a>
          </div>
        </div>
        <p className={"footer-claims"}>
          {"GlobxLink coordinates international trade. It is not a marketplace, freight forwarder, customs broker, or payment provider, and does not guarantee delivery, verification of all suppliers, or transaction outcomes."}
        </p>
        <div
      className={"footer-bottom"}>
          <span>
            {"© 2026 GlobxLink. All rights reserved."}
          </span>
          <span>
            {"Global Connections · The Middle of Trade"}
          </span>
        </div>
      </div>
    </footer>
    </>
  );
}
