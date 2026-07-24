/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  const navLinks = [
    { name: "Home", num: "01", href: "#home" },
    { name: "Support", num: "02", href: "#support-areas" },
    { name: "How It Works", num: "03", href: "#how-it-works" },
    { name: "About", num: "04", href: "#about" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        firstNavLinkRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className="relative w-full bg-navy-950 text-white border-b border-navy-900 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <div className="flex flex-col">
          <a 
            href="#home" 
            className="font-serif text-2xl font-bold tracking-tight text-white hover:text-white/90 transition-all focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950"
            id="brand-logo"
          >
            Casey Wilcox
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
          <nav aria-label="Primary Navigation" className="flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group text-xs font-mono tracking-widest text-white/75 hover:text-white transition-colors py-2 flex items-center focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 uppercase"
              >
                <span className="font-sans font-semibold tracking-wider text-xs lg:text-sm">{link.name}</span>
              </a>
            ))}
          </nav>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 lg:px-6 lg:py-2.5 bg-white border border-white text-navy-950 font-sans text-xs font-bold tracking-widest uppercase hover:bg-transparent hover:border-wine-700 hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 rounded-none"
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
            className="p-2 -mr-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 inline-flex items-center justify-center rounded"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div 
          id="mobile-menu"
          className="absolute top-20 md:top-24 left-0 w-full bg-navy-950 border-b border-navy-900 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav aria-label="Mobile Navigation" className="px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                ref={idx === 0 ? firstNavLinkRef : null}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-medium text-white/90 hover:text-white border-b border-navy-800/40 pb-2 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-white border border-white text-navy-950 font-sans text-sm font-bold tracking-widest uppercase hover:bg-transparent hover:border-wine-700 hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950 rounded-none mt-2"
            >
              Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
