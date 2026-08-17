/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "Support", href: "#support-areas", sectionId: "support-areas" },
  { name: "How It Works", href: "#how-it-works", sectionId: "how-it-works" },
  { name: "About", href: "#about", sectionId: "about" },
];

const trackedSections = [...navLinks.map((link) => link.sectionId), "contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    if (isOpen) {
      const focusTimer = window.setTimeout(() => {
        firstNavLinkRef.current?.focus();
      }, 50);
      return () => window.clearTimeout(focusTimer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);

      const activationLine = Math.min(window.innerHeight * 0.35, 260);
      let currentSection = "home";

      for (const sectionId of trackedSections) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 w-full bg-navy-950 text-white border-b border-navy-900 z-50 transition-[box-shadow] duration-200 ${isScrolled ? "shadow-xl shadow-black/20" : "shadow-none"}`}
      data-scrolled={isScrolled ? "true" : "false"}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-[height] duration-200 ${isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"}`}
      >
        <div className="flex flex-col">
          <a
            href="#home"
            className="font-serif text-2xl font-bold tracking-tight text-white hover:text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950"
            id="brand-logo"
          >
            Casey Wilcox
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
          <nav aria-label="Primary Navigation" className="flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => {
              const isCurrent = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isCurrent ? "location" : undefined}
                  className={`group text-xs font-mono tracking-widest transition-colors py-2 flex items-center border-b focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 uppercase ${isCurrent ? "text-white border-wine-700" : "text-white/75 border-transparent hover:text-white"}`}
                >
                  <span className="font-sans font-semibold tracking-wider text-xs lg:text-sm">{link.name}</span>
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            aria-current={activeSection === "contact" ? "location" : undefined}
            className="inline-flex items-center justify-center px-4 py-2 lg:px-6 lg:py-2.5 bg-white border border-white text-navy-950 font-sans text-xs font-bold tracking-widest uppercase hover:bg-transparent hover:border-wine-700 hover:text-white active:bg-white/10 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 rounded-none"
          >
            Connect
          </a>
        </div>

        <div className="md:hidden">
          <button
            ref={toggleButtonRef}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 -mr-2 text-white/90 hover:text-white active:text-white/80 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 inline-flex items-center justify-center rounded"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-navy-950 border-b border-navy-900 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav aria-label="Mobile Navigation" className="px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link, index) => {
              const isCurrent = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  ref={index === 0 ? firstNavLinkRef : null}
                  href={link.href}
                  aria-current={isCurrent ? "location" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-sans font-medium border-b pb-2 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 ${isCurrent ? "text-white border-wine-700" : "text-white/90 border-navy-800/40 hover:text-white"}`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              aria-current={activeSection === "contact" ? "location" : undefined}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-white border border-white text-navy-950 font-sans text-sm font-bold tracking-widest uppercase hover:bg-transparent hover:border-wine-700 hover:text-white active:bg-white/10 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 rounded-none mt-2"
            >
              Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
