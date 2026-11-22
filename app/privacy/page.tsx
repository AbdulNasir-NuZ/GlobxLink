import type { Metadata } from "next";
import Link from "next/link";
import ContentNav from "../content-nav";

export const metadata: Metadata = {
  title: "Privacy Notice | GlobxLink",
  description:
    "How the GlobxLink website inquiry draft handles information in your browser.",
};

export default function PrivacyNoticePage() {
  return (
    <>
      <ContentNav />
      <main className="content-page article-page">
      <article className="article-content">
        <p className="content-eyebrow">GlobxLink · Privacy</p>
        <h1>Privacy Notice</h1>
        <p className="article-lead">
          The current enquiry form runs in your browser and creates a text file
          for you to download.
        </p>
        <section>
          <h2>Information in the inquiry draft</h2>
          <p>
            If you complete the form, the name, company, business email,
            country, inquiry type, and message you enter are assembled into a
            text file on your device. The form does not send this information
            to GlobxLink or store it on a GlobxLink server.
          </p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>
            You choose whether to download, keep, or share the draft. Review
            the file before sending it through another channel and avoid
            including sensitive information that is not needed for an initial
            enquiry.
          </p>
        </section>
        <section>
          <h2>Future changes</h2>
          <p>
            Online submission will only be enabled after a verified business
            contact and an appropriate data-handling process are configured.
            This notice must be reviewed and updated before that change.
          </p>
        </section>
        <Link className="text-link" href="/#contact">
          ← Return to the inquiry form
        </Link>
      </article>
      </main>
    </>
  );
}
