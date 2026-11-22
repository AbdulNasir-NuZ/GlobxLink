"use client";

import { FormEvent, useState } from "react";

const copy = {
  en: {
    language: "Language",
    name: "Your name",
    email: "Your email",
    company: "Company (optional)",
    direction: "Trade direction",
    directionPlaceholder: "Select a direction",
    import: "Import",
    export: "Export",
    both: "Import / Export",
    product: "Product or commodity",
    origin: "Origin country",
    destination: "Destination country",
    message: "What would you like to coordinate?",
    download: "Download inquiry draft",
    downloaded: "Your draft has been downloaded.",
  },
  tr: {
    language: "Dil",
    name: "Adınız",
    email: "E-posta adresiniz",
    company: "Şirket (isteğe bağlı)",
    direction: "Ticaret yönü",
    directionPlaceholder: "Bir yön seçin",
    import: "İthalat",
    export: "İhracat",
    both: "İthalat / İhracat",
    product: "Ürün veya emtia",
    origin: "Menşe ülke",
    destination: "Varış ülkesi",
    message: "Hangi konuda koordinasyon istiyorsunuz?",
    download: "Talep taslağını indir",
    downloaded: "Taslağınız indirildi.",
  },
  fr: {
    language: "Langue",
    name: "Votre nom",
    email: "Votre adresse e-mail",
    company: "Entreprise (facultatif)",
    direction: "Sens commercial",
    directionPlaceholder: "Choisir un sens",
    import: "Importation",
    export: "Exportation",
    both: "Importation / Exportation",
    product: "Produit ou marchandise",
    origin: "Pays d’origine",
    destination: "Pays de destination",
    message: "Que souhaitez-vous coordonner ?",
    download: "Télécharger le brouillon",
    downloaded: "Votre brouillon a été téléchargé.",
  },
} as const;

type Language = keyof typeof copy;

export default function TradeDraftForm() {
  const [language, setLanguage] = useState<Language>("en");
  const [downloaded, setDownloaded] = useState(false);
  const t = copy[language];

  function downloadDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const fields = [
      [t.name, values.get("name")],
      [t.email, values.get("email")],
      [t.company, values.get("company")],
      [t.direction, values.get("direction")],
      [t.product, values.get("product")],
      [t.origin, values.get("origin")],
      [t.destination, values.get("destination")],
      [t.message, values.get("message")],
    ];
    const content = [
      "GlobxLink — Trade Coordination Inquiry",
      "",
      ...fields.map(([label, value]) => `${label}: ${value || "—"}`),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `globxlink-inquiry-${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    setDownloaded(true);
  }

  return (
    <form className="trade-draft-form" onSubmit={downloadDraft}>
      <label className="trade-language">
        <span>{t.language}</span>
        <select
          value={language}
          onChange={(event) => {
            setLanguage(event.target.value as Language);
            setDownloaded(false);
          }}
        >
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="fr">Français</option>
        </select>
      </label>

      <div className="trade-form-grid">
        <label>
          <span>{t.name}</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>{t.email}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>{t.company}</span>
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          <span>{t.direction}</span>
          <select name="direction" defaultValue="">
            <option value="">{t.directionPlaceholder}</option>
            <option>{t.import}</option>
            <option>{t.export}</option>
            <option>{t.both}</option>
          </select>
        </label>
        <label>
          <span>{t.product}</span>
          <input name="product" />
        </label>
        <label>
          <span>{t.origin}</span>
          <input name="origin" />
        </label>
        <label>
          <span>{t.destination}</span>
          <input name="destination" />
        </label>
        <label className="trade-message">
          <span>{t.message}</span>
          <textarea name="message" rows={4} required />
        </label>
      </div>

      <button className="trade-download" type="submit">
        {t.download}
      </button>
      <p className="trade-download-status" aria-live="polite">
        {downloaded ? t.downloaded : ""}
      </p>
    </form>
  );
}
