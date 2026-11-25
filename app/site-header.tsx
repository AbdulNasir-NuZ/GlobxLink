"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./language-switcher";

const links = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Corridors", href: "/#middle-of-trade", sectionId: "middle-of-trade" },
  { label: "Insights", href: "/#insights", sectionId: "insights" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function SiteHeader({
  showLanguage = true,
}: {
  showLanguage?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = links
      .map((link) => document.getElementById(link.sectionId))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;

    function updateActiveSection() {
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h",
          ),
        ) || 78;
      const marker = window.scrollY + headerHeight + 24;
      let activeId: string | null = sections[0]?.id ?? null;

      for (const section of sections) {
        if (section.getBoundingClientRect().top + window.scrollY > marker) break;
        activeId = section.id;
      }

      setActiveSection(activeId);
    }

    function scheduleUpdate() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1261px)");

    function closeMenuOnDesktop() {
      if (desktopQuery.matches) setMenuOpen(false);
    }

    desktopQuery.addEventListener("change", closeMenuOnDesktop);
    closeMenuOnDesktop();

    return () => desktopQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Link
            aria-label="GlobxLink home"
            className="logo on-dark"
            href="/#home"
            onClick={closeMenu}
          >
            <img
              alt="GlobxLink, Global Connections"
              height="48"
              src="/logos/header-logo.svg"
              width="165"
            />
          </Link>
          <nav aria-label="Main navigation" className="nav">
            {links.filter((link) => link.sectionId !== "contact").map((link) => {
              const isActive =
                pathname === "/" && activeSection === link.sectionId;
              const isSelected = isActive && !menuOpen;
              return (
                <Link
                  aria-current={isSelected ? "location" : undefined}
                  className={isSelected ? "active" : undefined}
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="header-cta">
            {showLanguage && <LanguageSwitcher />}
            <Link
              aria-current={
                pathname === "/" && activeSection === "contact"
                  ? "location"
                  : undefined
              }
              className="btn primary small"
              href="/#contact"
            >
              Contact ↗
            </Link>
            <button
              aria-controls="site-nav-panel"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>
      <nav
        aria-label="Mobile navigation"
        className="site-nav-panel"
        data-open={menuOpen}
        id="site-nav-panel"
        inert={!menuOpen}
      >
        <div className="site-nav-panel-inner">
          {links.map((link) => {
            const isActive =
              pathname === "/" && activeSection === link.sectionId;
            const isSelected = isActive && menuOpen;
            return (
              <Link
                aria-current={isSelected ? "location" : undefined}
                className={isSelected ? "active" : undefined}
                href={link.href}
                key={link.label}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
