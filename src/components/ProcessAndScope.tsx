/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROCESS_DATA, FIT_SCOPE_DATA } from "../data";
import { Check, X } from "lucide-react";

export default function ProcessAndScope() {
  return (
    <section id="how-it-works" className="relative text-charcoal" aria-labelledby="process-heading">
      <div className="bg-white pt-10 pb-8 md:pt-16 md:pb-12 lg:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-8 md:mb-10 lg:mb-16 flex flex-col">
            <h2 
              id="process-heading" 
              className="font-serif text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] md:leading-[1.08] tracking-tight text-charcoal"
            >
              {PROCESS_DATA.title}
            </h2>
            <p className="font-sans text-base md:text-lg text-muted leading-relaxed mt-4 md:mt-5 lg:mt-6">
              {PROCESS_DATA.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 relative">
            {PROCESS_DATA.steps.map((step, idx) => (
              <div 
                key={step.number} 
                className="flex flex-col space-y-3 md:space-y-4 group relative"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-serif text-4xl md:text-5xl font-light text-wine-700 tracking-tight flex-shrink-0">
                    {step.number}
                  </span>
                  
                  <div className="flex-grow flex items-center relative">
                    <div className="block md:hidden h-px bg-denim-600 flex-grow" aria-hidden="true" />
                    <div className={`hidden md:block lg:hidden h-px bg-denim-600 transition-colors duration-200 group-hover:bg-denim-700 flex-grow ${idx === 1 || idx === 3 ? 'opacity-0 pointer-events-none' : ''}`} aria-hidden="true" />
                    <div className={`hidden lg:flex items-center h-px bg-denim-600 transition-colors duration-200 group-hover:bg-denim-700 flex-grow relative ${idx === 3 ? 'opacity-0 pointer-events-none' : ''}`} aria-hidden="true">
                      <span className="absolute -left-0.5 h-1.5 w-1.5 rounded-full bg-wine-700 transition-colors duration-200 group-hover:bg-wine-800 flex-shrink-0" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-1 md:space-y-2">
                  <h3 className="font-sans text-lg md:text-xl font-bold text-charcoal tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="boundaries" className="bg-navy-950 text-white pt-10 pb-8 md:pt-16 md:pb-12 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-wine-700 blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-start mb-8 md:mb-10 lg:mb-16 max-w-3xl">
            <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] md:leading-[1.08] tracking-tight text-white">
              {FIT_SCOPE_DATA.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start">
            <div className="border border-navy-800 bg-navy-900/40 p-5 md:p-8 lg:p-10 shadow-sm">
              <h3 className="font-sans text-base font-bold uppercase tracking-wider text-white mb-4 md:mb-6 pb-2 border-b border-navy-800 flex items-center space-x-2">
                <span className="h-2 w-2 bg-white inline-block" aria-hidden="true"></span>
                <span>Best-Fit Engagements</span>
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {FIT_SCOPE_DATA.goodFit.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-base md:text-lg leading-relaxed text-white/95">
                    <Check className="h-4 w-4 text-white mt-1.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-navy-800 bg-navy-900/20 p-5 md:p-8 lg:p-10 shadow-sm">
              <h3 className="font-sans text-base font-bold uppercase tracking-wider text-white mb-4 md:mb-6 pb-2 border-b border-navy-800 flex items-center space-x-2">
                <span className="h-2 w-2 bg-white/60 inline-block" aria-hidden="true"></span>
                <span>Outside Current Scope</span>
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {FIT_SCOPE_DATA.outsideScope.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-base md:text-lg leading-relaxed text-white/90">
                    <X className="h-4 w-4 text-white/60 mt-1.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center border-t border-navy-800/80 pt-6 md:pt-8">
            <p className="font-sans text-sm tracking-wider uppercase text-white/90 font-medium">
              — {FIT_SCOPE_DATA.footer} —
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
