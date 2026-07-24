/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import SupportAreas from "./components/SupportAreas";
import ProcessAndScope from "./components/ProcessAndScope";
import AboutCasey from "./components/AboutCasey";
import ContactAndFeedback from "./components/ContactAndFeedback";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal select-text">
      {/* Skip Navigation for Keyboard Accessibility */}
      <a href="#main-content" className="skip-link font-sans text-sm font-semibold tracking-wide">
        Skip to main content
      </a>

      {/* Primary Header */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Support Areas */}
        <SupportAreas />

        {/* Thin Horizontal Rule: Support Areas to Process */}
        <div className="bg-white py-2" aria-hidden="true">
          <div className="max-w-7xl mx-auto px-6">
            <hr className="border-t border-line" />
          </div>
        </div>

        {/* Section 3: Process and Scope */}
        <ProcessAndScope />

        {/* Thin Horizontal Rule: Process/Scope to About Casey */}
        <div className="bg-white py-2" aria-hidden="true">
          <div className="max-w-7xl mx-auto px-6">
            <hr className="border-t border-line" />
          </div>
        </div>

        {/* Section 5: About Casey */}
        <AboutCasey />

        {/* Thin Horizontal Rule: About Casey to Contact */}
        <div className="bg-white py-2" aria-hidden="true">
          <div className="max-w-7xl mx-auto px-6">
            <hr className="border-t border-line" />
          </div>
        </div>

        {/* Section 6: Contact and Feedback */}
        <ContactAndFeedback />
      </main>

      {/* Section 7: Intentional Footer */}
      <Footer />
    </div>
  );
}
