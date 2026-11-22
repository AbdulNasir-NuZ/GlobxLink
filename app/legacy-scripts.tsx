"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const localeScripts = [
  "/scripts/landing-locales.js",
  "/scripts/multilingual.js",
];
const scripts = ["/scripts/globe-engine.js", ...localeScripts];

function loadScript(src: string) {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[data-globx-script="${src}"]`,
  );
  if (existing?.dataset.loaded === "true") return Promise.resolve();
  if (existing) {
    return new Promise<void>((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Unable to load site interaction script: ${src}`)),
        { once: true },
      );
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.globxScript = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => {
      script.remove();
      reject(new Error(`Unable to load site interaction script: ${src}`));
    };
    document.body.appendChild(script);
  });
}

export function LegacyScripts() {
  useEffect(() => {
    let cancelled = false;

    const loadScripts = async () => {
      for (const src of scripts) {
        if (cancelled) return;
        await loadScript(src);
      }
      if (!cancelled) {
        window.dispatchEvent(new Event("gxl-page-changed"));
      }
    };

    void loadScripts().catch((error: unknown) => {
      console.error("GlobxLink site interactions failed to initialize.", error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

export function ContentLocaleScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const loadScripts = async () => {
      for (const src of localeScripts) {
        if (cancelled) return;
        await loadScript(src);
      }
      if (!cancelled) {
        window.dispatchEvent(new Event("gxl-page-changed"));
      }
    };

    void loadScripts().catch((error: unknown) => {
      console.error("GlobxLink page language failed to initialize.", error);
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
