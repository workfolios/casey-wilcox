/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-8 pb-6 md:pt-10 md:pb-8 lg:pt-16 lg:pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-wine-700 w-full mb-6 md:mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 lg:gap-8 border-b border-navy-900 pb-4 mb-4 md:pb-6 md:mb-6 lg:pb-8 lg:mb-8">
          <div className="flex flex-col space-y-1">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white">
              Casey Wilcox
            </span>
            <span className="font-sans text-[11px] md:text-xs tracking-wider text-white/50 uppercase leading-relaxed max-w-[280px] sm:max-w-md md:max-w-none">
              Digital Presence &amp;
              <br className="inline md:hidden" />{" "}
              <span className="whitespace-nowrap md:whitespace-normal">Inquiry Clarity Reviewer</span>
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 lg:gap-8 text-xs font-mono uppercase tracking-widest text-white/40 mt-1 md:mt-0">
            <div>
              <span className="text-white/20 mr-1.5">//</span> Location: <span className="text-white/70">Denver, Colorado</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-sans text-white/40">
          <p>© 2026 Casey Wilcox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
