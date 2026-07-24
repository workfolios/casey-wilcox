/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ABOUT_DATA } from "../data";
import { Award, Layers, Target, Linkedin } from "lucide-react";
import squarePortrait from "../assets/casey-wilcox-bio-square.webp";

export default function AboutCasey() {
  const icons = [
    <Layers className="h-5 w-5 text-wine-700 flex-shrink-0 mt-1" aria-hidden="true" />,
    <Award className="h-5 w-5 text-wine-700 flex-shrink-0 mt-1" aria-hidden="true" />,
    <Target className="h-5 w-5 text-wine-700 flex-shrink-0 mt-1" aria-hidden="true" />
  ];

  return (
    <section 
      id="about" 
      className="bg-white text-charcoal pt-10 pb-8 md:pt-16 md:pb-12 lg:py-24 border-b border-line"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-8 md:mb-10 lg:mb-16">
          <h2 
            id="about-heading" 
            className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[1.1] tracking-tight text-navy-950 max-w-3xl"
          >
            {ABOUT_DATA.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8">
            <div className="relative border border-line bg-surface-soft p-2 max-w-[300px] md:max-w-sm lg:max-w-md mx-auto lg:mx-0 shadow-sm">
              <img
                src={squarePortrait}
                alt="Casey Wilcox — Collaborative digital client support specialist in Denver, Colorado"
                width="480"
                height="480"
                className="w-full h-auto object-cover border border-line"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="flex flex-col space-y-4 md:space-y-5 text-charcoal/95 text-base md:text-lg leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="max-w-[60ch] mx-auto lg:mx-0 text-left">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-2 md:pt-4 flex justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/casey-wilcox/"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                aria-label="Open Casey Wilcox’s LinkedIn profile in a new tab"
                className="inline-flex items-center space-x-3 px-6 py-3.5 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-charcoal font-sans text-sm font-semibold tracking-wide border border-line transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2"
              >
                <Linkedin className="h-4 w-4 text-navy-900" aria-hidden="true" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-navy-900 p-5 md:p-8 lg:p-10 border border-line shadow-sm relative">
            <div className="flex flex-col space-y-2 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-navy-800">
              <h3 className="font-sans text-base md:text-lg font-bold uppercase tracking-wider text-white">
                Expertise Highlights
              </h3>
              <p className="font-sans text-base text-white/70 leading-relaxed">
                Key milestones in workflow optimization, brand operations, and growth campaigns.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {ABOUT_DATA.metrics.map((m, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 md:p-5 border border-line flex flex-col space-y-1.5 md:space-y-2 relative"
                >
                  <div className="flex items-start space-x-3">
                    {icons[idx] || <Layers className="h-5 w-5 text-wine-700 flex-shrink-0 mt-1" aria-hidden="true" />}
                    <div className="flex flex-col space-y-1">
                      <span className="font-serif text-xl md:text-2xl font-bold text-charcoal tracking-tight">
                        {m.metric}
                      </span>
                      <p className="font-sans text-base text-charcoal leading-relaxed font-semibold">
                        {m.label}
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-soft border-l-2 border-wine-700 p-2 md:p-2.5 ml-6 md:ml-8 text-sm font-semibold text-charcoal/80 italic font-sans">
                    {m.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
