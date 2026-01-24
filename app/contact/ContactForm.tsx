"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui";
import { submitContact } from "./actions";

interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
}

const initialState: ContactState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="primary" size="lg" fullWidth disabled={pending}>
      {pending ? "Sending..." : "Send Request"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary mb-2"
        >
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
          placeholder="Jordan Lee"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary mb-2"
        >
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-primary mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="Dukeel Partner Co."
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-primary mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary mb-2"
        >
          Logistics Requirements <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
          placeholder="Share lanes, cadence, and service-level goals."
        />
      </div>
      <SubmitButton />
      {state.message ? (
        <p
          className={`text-sm font-medium ${
            state.status === "success" ? "text-accent" : "text-red-500"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
