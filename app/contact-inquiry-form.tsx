"use client";

import { FormEvent, useState } from "react";

const inquiryTypes = [
  "Provider Request",
  "Trade Readiness Assessment",
  "Partnership",
  "General Enquiry",
];

export default function ContactInquiryForm() {
  const [downloaded, setDownloaded] = useState(false);

  function downloadInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Name", formData.get("name")],
      ["Company", formData.get("company")],
      ["Business email", formData.get("email")],
      ["Country", formData.get("country")],
      ["Inquiry type", formData.get("topic")],
      ["Message", formData.get("message")],
      ["Privacy Notice acknowledged", formData.get("consent") ? "Yes" : "No"],
    ];
    const content = [
      "GlobxLink, Business Inquiry",
      "",
      ...fields.map(([label, value]) => `${label}: ${value ?? ""}`),
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
    <form
      className="inquiry reveal"
      data-local-draft=""
      id="inquiry"
      onSubmit={downloadInquiry}
    >
      <h3>Prepare your inquiry</h3>
      <p className="hint">
        Share the essentials so the right service can be discussed.
      </p>
      <div className="inquiry-grid">
        <label>
          <span>Your name</span>
          <input autoComplete="name" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Company</span>
          <input
            autoComplete="organization"
            name="company"
            placeholder="Company name"
            required
          />
        </label>
        <label>
          <span>Business email</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="name@company.com"
            required
            type="email"
          />
        </label>
        <label>
          <span>Country</span>
          <input autoComplete="country-name" name="country" placeholder="Country" required />
        </label>
        <label className="inquiry-wide">
          <span>Inquiry type</span>
          <select defaultValue="" name="topic" required>
            <option disabled value="">
              Select an inquiry type
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="inquiry-wide">
          <span>Message</span>
          <textarea
            name="message"
            placeholder="Tell us about the corridor, product, timing, and current stage."
            required
            rows={5}
          />
        </label>
      </div>
      <div className="inquiry-consent">
        <input id="inquiryConsent" name="consent" required type="checkbox" />
        <label htmlFor="inquiryConsent">
          I have read the <a href="/privacy/">Privacy Notice</a>.
        </label>
      </div>
      <button className="btn primary" type="submit">
        Download inquiry draft ↗
      </button>
      <p className="hint" aria-live="polite">
        {downloaded
          ? "Your inquiry draft has been downloaded. It has not been sent to GlobxLink."
          : "This form creates a draft on your device and does not send data. A verified business email or a connected backend is needed before online submissions can be enabled."}
      </p>
    </form>
  );
}
