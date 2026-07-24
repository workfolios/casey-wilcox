/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CONTACT_DATA } from "../data";
import { CheckCircle } from "lucide-react";

export default function ContactAndFeedback() {
  const formKey = import.meta.env.VITE_FORMSPREE_FORM_ID || "";
  const isFormConfigured = Boolean(formKey && formKey.trim() && !formKey.includes("replace_with_verified"));

  const [formspreeState, formspreeSubmit] = useForm(isFormConfigured ? formKey : "unconfigured");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    inquiryType: "Lead Follow-Up Review",
    message: ""
  });

  const [customError, setCustomError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (customError) setCustomError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCustomError("");

    if (!isFormConfigured) {
      setCustomError("The inquiry form is not active yet. Please try again after the contact channel is enabled.");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setCustomError("Please complete all required fields (Full Name, Email Address, and How Can I Help You).");
      return;
    }

    formspreeSubmit(e);
  };

  const isSubmitting = formspreeState.submitting;
  const isSubmitted = formspreeState.succeeded;
  const hasFormspreeErrors = Boolean(formspreeState.errors);

  return (
    <section 
      id="contact" 
      className="bg-navy-950 text-white pt-10 pb-6 md:pt-16 md:pb-10 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 lg:mb-12">
          <h2 
            id="contact-heading" 
            className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-tight text-white"
          >
            {CONTACT_DATA.title}
          </h2>
          {CONTACT_DATA.paragraphs.length > 0 && (
            <div className="max-w-2xl text-white/80 text-base md:text-lg leading-relaxed mt-4 md:mt-5 lg:mt-6 space-y-3 md:space-y-4">
              {CONTACT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border border-line p-5 md:p-8 lg:p-10 shadow-sm relative text-charcoal">
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center py-12 space-y-6 animate-in fade-in duration-300" role="region" aria-label="Inquiry Confirmation">
              <div className="h-14 w-14 rounded-full bg-wine-700/5 flex items-center justify-center text-wine-700">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-charcoal">Inquiry Received</h3>
                <p className="font-sans text-base text-charcoal/80 max-w-md leading-relaxed">
                  Thank you. Your inquiry has been sent to Casey.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" aria-busy={isSubmitting} noValidate>
              <input 
                type="hidden" 
                name="subject" 
                value={`Casey Wilcox Website Inquiry — ${formData.inquiryType}`} 
              />

              {(customError || hasFormspreeErrors) && (
                <div 
                  tabIndex={-1}
                  role="alert" 
                  aria-live="assertive"
                  className="p-4 bg-wine-800/5 border border-wine-700/20 text-wine-800 font-sans text-sm font-medium space-y-1"
                >
                  <p>{customError || "Your inquiry could not be sent. Please review the form and try again."}</p>
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-xs text-wine-800 font-normal" />
                  <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="text-xs text-wine-800 font-normal" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal flex items-center justify-between">
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alexis Sterling"
                    className="w-full bg-surface-soft border border-line p-4 text-charcoal font-sans text-sm focus:border-wine-700 focus:ring-1 focus:ring-wine-700 focus:outline-none rounded-none placeholder:text-muted/65"
                  />
                  <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="text-xs text-wine-800" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alexis@brand.com"
                    className="w-full bg-surface-soft border border-line p-4 text-charcoal font-sans text-sm focus:border-wine-700 focus:ring-1 focus:ring-wine-700 focus:outline-none rounded-none placeholder:text-muted/65"
                  />
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-xs text-wine-800" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="brand" className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                    Company / Brand <span className="text-charcoal/40 font-normal italic">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="e.g. Sterling Agency"
                    className="w-full bg-surface-soft border border-line p-4 text-charcoal font-sans text-sm focus:border-wine-700 focus:ring-1 focus:ring-wine-700 focus:outline-none rounded-none placeholder:text-muted/65"
                  />
                  <ValidationError prefix="Brand" field="brand" errors={formspreeState.errors} className="text-xs text-wine-800" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="inquiryType" className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                    Desired Support Area
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-surface-soft border border-line p-4 text-charcoal font-sans text-sm focus:border-wine-700 focus:ring-1 focus:ring-wine-700 focus:outline-none rounded-none cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2320262C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                  >
                    <option value="Lead Follow-Up Review">Lead Follow-Up Workflow Review</option>
                    <option value="Website & Message Clarity Review">Website & Message Clarity Review</option>
                    <option value="Digital Card Content Sprint">Digital Card Content Sprint</option>
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                  How can I help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me a bit about your current flow, what's dropping, or what you'd like to refine..."
                  className="w-full bg-surface-soft border border-line p-4 text-charcoal font-sans text-sm focus:border-wine-700 focus:ring-1 focus:ring-wine-700 focus:outline-none rounded-none placeholder:text-muted/65 resize-y"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="text-xs text-wine-800" />
              </div>

              <div className="pt-2 md:pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-wine-700 hover:bg-wine-800 active:bg-wine-800 text-white font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 disabled:opacity-50 cursor-pointer rounded-none"
                >
                  {isSubmitting ? "Submitting…" : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
