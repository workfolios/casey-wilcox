/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HERO_DATA } from "../data";
import { ArrowDown } from "lucide-react";
import portrait4x5 from "../assets/casey-wilcox-bio-portrait-4x5.webp";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative bg-navy-950 text-white pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-24 lg:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-wine-700 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-hunter-700 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 
              id="hero-heading" 
              className="font-serif text-[32px] md:text-[44px] lg:text-7xl font-bold leading-[1.1] md:leading-[1.08] tracking-tight text-white max-w-xl md:max-w-2xl lg:max-w-3xl mb-3 md:mb-4 lg:mb-8"
            >
              {HERO_DATA.headline}
            </h1>

            <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-4 md:mb-6 lg:mb-10">
              {HERO_DATA.supportingCopy}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#support-areas"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 bg-transparent hover:bg-white/10 active:bg-white/15 text-white font-sans text-sm font-semibold tracking-wide border border-white/30 hover:border-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                <span>{HERO_DATA.secondaryCta}</span>
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <div className="relative w-full max-w-[240px] md:max-w-[320px] lg:max-w-md">
              <div className="p-2 border border-navy-800 bg-navy-900/60 shadow-2xl">
                <img
                  src={portrait4x5}
                  alt="Casey Wilcox Portrait — Digital presence and inquiry workflow review specialist in Denver, Colorado"
                  width="480"
                  height="600"
                  className="w-full h-auto object-cover border border-navy-800 grayscale-[5%] hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
