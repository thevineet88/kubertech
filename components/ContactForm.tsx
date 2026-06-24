"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Wire Formspree: replace the action URL with your Formspree endpoint
      // e.g. https://formspree.io/f/YOUR_FORM_ID
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_FORM_ID", {
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

  if (state === "success") {
    return (
      <div className="border border-[#262626] rounded-lg p-8 text-center">
        <p className="text-[#ccff00] font-medium mb-2">Message sent.</p>
        <p className="text-sm text-[#a3a3a3]">
          We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-[#a3a3a3] mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full bg-[#1a1a1a] border border-[#262626] rounded px-4 py-3 text-sm text-[#fafafa] placeholder-[#3a3a3a] focus:border-[#ccff00] focus:outline-none transition-colors duration-150"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-[#a3a3a3] mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full bg-[#1a1a1a] border border-[#262626] rounded px-4 py-3 text-sm text-[#fafafa] placeholder-[#3a3a3a] focus:border-[#ccff00] focus:outline-none transition-colors duration-150"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm text-[#a3a3a3] mb-2"
        >
          Company <span className="text-[#3a3a3a]">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="w-full bg-[#1a1a1a] border border-[#262626] rounded px-4 py-3 text-sm text-[#fafafa] placeholder-[#3a3a3a] focus:border-[#ccff00] focus:outline-none transition-colors duration-150"
          placeholder="Company name"
        />
      </div>

      <div>
        <label
          htmlFor="project-type"
          className="block text-sm text-[#a3a3a3] mb-2"
        >
          What are you looking to build?
        </label>
        <select
          id="project-type"
          name="project-type"
          required
          defaultValue=""
        className="w-full bg-[#1a1a1a] border border-[#262626] rounded px-4 py-3 text-sm text-[#fafafa] focus:border-[#ccff00] focus:outline-none transition-colors duration-150 appearance-none"
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="frontend">Frontend / web product</option>
          <option value="backend">Backend / API</option>
          <option value="devops">DevOps / cloud infrastructure</option>
          <option value="fullstack">Full-stack product</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-[#a3a3a3] mb-2"
        >
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-[#1a1a1a] border border-[#262626] rounded px-4 py-3 text-sm text-[#fafafa] placeholder-[#3a3a3a] focus:border-[#ccff00] focus:outline-none transition-colors duration-150 resize-none"
          placeholder="What are you building, what problem does it solve, and what does done look like?"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Try emailing us directly at hello@kubertech.example.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full sm:w-auto px-6 py-3 bg-[#ccff00] text-[#1a2200] font-medium rounded hover:bg-[#d9ff33] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
      >
        {state === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
