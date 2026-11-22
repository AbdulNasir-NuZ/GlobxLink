import { LandingPage } from "./landing-page";
import { LegacyScripts } from "./legacy-scripts";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <LandingPage />
      <LegacyScripts />
    </>
  );
}
