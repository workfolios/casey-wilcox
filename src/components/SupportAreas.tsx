/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SERVICES_DATA } from "../data";
import { CheckCircle2 } from "lucide-react";

export default function SupportAreas() {
  const primaryService = SERVICES_DATA.find(s => s.prominence === "primary")!;
  const secondaryService = SERVICES_DATA.find(s => s.prominence === "secondary")!;
  const developingService = SERVICES_DATA.find(s => s.prominence === "developing")!;

  return (
    <section 
      id="support-areas" 
      className="bg-white text-charcoal pt-10 pb-8 md:pt-16 md:pb-12 lg:py-24"
      aria-labelledby="support-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-8 md:mb-10 lg:mb-16 flex flex-col">
          <h2 
            id="support-heading" 
            className="font-serif text-[32px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] md:leading-[1.08] tracking-tight text-charcoal"
          >
            Practical reviews for communication, inquiries, and follow-through.
          </h2>
          <p className="font-sans text-base md:text-lg text-muted leading-relaxed mt-4 md:mt-5 lg:mt-6">
            The current support direction is intentionally narrow. It focuses on clarity, documentation, and practical next steps rather than full-service marketing, technical implementation, or ongoing sales management.
          </p>
        </div>
  
        <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-12">
          <div 
            id={primaryService.id}
            className="border-t-4 border-t-wine-700 hover:border-t-wine-800 border-x border-b border-line bg-white p-5 md:p-8 lg:p-10 shadow-sm flex flex-col space-y-5 md:space-y-6 lg:space-y-8 transition-all duration-200 [@media(hover:hover)]:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
            role="region"
            aria-labelledby="primary-service-title"
          >
            <div className="flex flex-col space-y-2 md:space-y-3">
              <div className="inline-flex items-center space-x-2">
                <span className="font-sans text-sm font-bold uppercase tracking-wider text-wine-700">
                  {primaryService.label}
                </span>
                <span className="px-3 py-1 text-sm font-sans font-bold uppercase tracking-wider bg-wine-700/10 text-wine-700 rounded-none">
                  Strongest Focus
                </span>
              </div>
              <h3 
                id="primary-service-title" 
                className="font-serif text-2xl md:text-3xl lg:text-[34px] font-normal text-charcoal leading-[1.1]"
              >
                {primaryService.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start border-t border-line pt-5 md:pt-6">
              <div className="lg:col-span-7 flex flex-col space-y-4 text-charcoal">
                <p className="font-sans text-lg md:text-xl font-medium text-charcoal leading-relaxed">
                  {primaryService.description}
                </p>
                <p className="font-sans text-base md:text-lg text-muted leading-relaxed">
                  {primaryService.details}
                </p>
              </div>

              <div className="lg:col-span-5 bg-surface-muted border border-line p-4 md:p-6">
                <h4 className="font-sans text-sm md:text-base font-bold uppercase tracking-wider text-charcoal mb-4 border-b border-line pb-2">
                  Included In This Review
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-3">
                  {primaryService.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-base text-charcoal">
                      <CheckCircle2 className="h-4 w-4 text-wine-700 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div 
              id={secondaryService.id}
              className="lg:col-span-7 border border-line border-l-[3px] border-l-denim-600 hover:border-l-denim-700 bg-white p-5 md:p-8 lg:p-10 shadow-sm flex flex-col space-y-5 md:space-y-6 transition-all duration-200 [@media(hover:hover)]:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
              role="region"
              aria-labelledby="secondary-service-title"
            >
              <div className="flex flex-col space-y-2">
                <span className="font-sans text-sm font-bold uppercase tracking-wider text-denim-700">
                  {secondaryService.label}
                </span>
                <h3 
                  id="secondary-service-title" 
                  className="font-serif text-2xl md:text-3xl lg:text-[32px] font-normal text-charcoal leading-[1.1]"
                >
                  {secondaryService.title}
                </h3>
              </div>

              <div className="flex flex-col space-y-3 md:space-y-4 border-t border-line pt-4 text-charcoal">
                <p className="font-sans text-base md:text-lg font-medium leading-relaxed">
                  {secondaryService.description}
                </p>
                <p className="font-sans text-base text-muted leading-relaxed">
                  {secondaryService.details}
                </p>
              </div>

              <div className="bg-surface-soft border border-line p-4 md:p-5 mt-auto">
                <h4 className="font-sans text-sm md:text-base font-bold uppercase tracking-wider text-charcoal mb-3">
                  Key Review Elements
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-charcoal">
                  {secondaryService.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="h-1.5 w-1.5 bg-navy-800 mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div 
              id={developingService.id}
              className="lg:col-span-5 border border-dashed border-line hover:border-denim-600 bg-white p-5 md:p-8 lg:p-10 shadow-sm flex flex-col space-y-5 md:space-y-6 relative transition-all duration-200 [@media(hover:hover)]:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
              role="region"
              aria-labelledby="developing-service-title"
            >
              <div className="flex flex-col space-y-2">
                <span className="font-sans text-sm font-bold uppercase tracking-wider text-wine-700">
                  {developingService.label}
                </span>
                <h3 
                  id="developing-service-title" 
                  className="font-serif text-2xl md:text-3xl lg:text-[32px] font-normal text-charcoal leading-[1.1]"
                >
                  {developingService.title}
                </h3>
              </div>

              <div className="flex flex-col space-y-3 md:space-y-4 border-t border-line pt-4 text-charcoal">
                <p className="font-sans text-base md:text-lg font-medium leading-relaxed text-charcoal/90">
                  {developingService.description}
                </p>
                <p className="font-sans text-base text-muted leading-relaxed">
                  {developingService.details}
                </p>
              </div>

              <div className="bg-surface-muted border border-line p-4 md:p-5 mt-auto">
                <h4 className="font-sans text-sm md:text-base font-bold uppercase tracking-wider text-charcoal mb-3">
                  Scope Concept
                </h4>
                <ul className="space-y-2 text-base text-charcoal">
                  {developingService.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="h-1 w-2 bg-wine-700/40" aria-hidden="true"></span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
