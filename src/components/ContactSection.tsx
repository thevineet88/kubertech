import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { openBooking } from "../booking";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Wire Formspree later: replace REPLACE_WITH_FORM_ID with your endpoint
      const res = await fetch("https://formspree.io/f/xgojoaog", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#0c0c0c] pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 scroll-mt-4 md:scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <ScrollReveal
          className="flex items-center gap-3 mb-6 sm:mb-8"
          delay={0}
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
            <span
              className="text-gray-900 font-semibold"
              style={{ fontSize: "11px" }}
            >
              4
            </span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white/70">
            Contact Us
          </span>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          {/* Left: heading + direct contact */}
          <ScrollReveal delay={0.1}>
            <h2
              className="font-medium leading-[1.1] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.4rem)" }}
            >
              Tell us what is slow,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              or what you need built.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-white/60 leading-[1.6] mt-5 max-w-md">
              A 30-minute call is enough to know if we can move your load time
              and your conversion. We scope it properly before we quote.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-[12px] uppercase tracking-wider text-white/40 mb-1">
                  Email
                </p>
                <a
                  href="mailto:kubertechsolutions@gmail.com"
                  className="text-[15px] text-white hover:text-[#F26522] transition-colors duration-200"
                >
                  kubertechsolutions@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-wider text-white/40 mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/919028163126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-white hover:text-[#F26522] transition-colors duration-200"
                >
                  Let's talk
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={openBooking}
              className="group mt-8 inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-200"
            >
              <span>Book a 30-minute call</span>
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
                <ArrowRight
                  size={12}
                  className="text-[#F26522] transition-transform duration-500 group-hover:-rotate-45"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)",
                  }}
                />
              </div>
            </button>
          </ScrollReveal>

          {/* Right: message form */}
          <ScrollReveal delay={0.15}>
            {state === "success" ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
                <p className="text-[#F26522] font-medium mb-2">Message sent.</p>
                <p className="text-sm text-white/60">
                  We will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] text-white/60 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder-white/30 focus:border-[#F26522] focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] text-white/60 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder-white/30 focus:border-[#F26522] focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-[13px] text-white/60 mb-1.5"
                  >
                    What do you need?
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    required
                    defaultValue=""
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white focus:border-[#F26522] focus:outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" disabled className="bg-[#0c0c0c]">
                      Select one
                    </option>
                    <option value="frontend" className="bg-[#0c0c0c]">
                      Frontend / web product
                    </option>
                    <option value="backend" className="bg-[#0c0c0c]">
                      Backend / API
                    </option>
                    <option value="cloud" className="bg-[#0c0c0c]">
                      Cloud / DevOps
                    </option>
                    <option value="fullstack" className="bg-[#0c0c0c]">
                      Full-stack product
                    </option>
                    <option value="other" className="bg-[#0c0c0c]">
                      Something else
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] text-white/60 mb-1.5"
                  >
                    About the project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="What are you building, and what does done look like?"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder-white/30 focus:border-[#F26522] focus:outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {state === "error" && (
                  <p className="text-[13px] text-red-400">
                    Something went wrong. Email us directly at
                    kubertechsolutions@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="group flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <span>
                    {state === "submitting" ? "Sending..." : "Send message"}
                  </span>
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight
                      size={12}
                      className="text-[#F26522] transition-transform duration-500 group-hover:-rotate-45"
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.25,0.1,0.25,1)",
                      }}
                    />
                  </div>
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>

        {/* Footer line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/the.vineeet" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/kubertechsolutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/thevineet88" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/40 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </div>
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Kuber Tech Solutions
          </p>
        </div>
      </div>
    </section>
  );
}
