"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

type FormData = {
  name: string;
  email: string;
  phone: string;
  comments: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[\d\s+\-()]{8,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  return errors;
}

export function ConsultationForm({
  onSuccess,
  source,
  inline = false,
}: {
  onSuccess?: () => void;
  source?: string;
  inline?: boolean;
}) {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Consultation lead:", { ...data, source });
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cyan/20 bg-cyan-soft p-8 text-center md:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12l5 5L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-navy">Thank you!</h3>
        <p className="mt-2 text-muted">
          We&apos;ll be in touch within 24 hours to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Input
        label="Name"
        name="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        error={errors.name}
        required
        autoComplete="name"
      />
      <Input
        label="Email Address"
        name="email"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        error={errors.email}
        required
        autoComplete="email"
      />
      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        error={errors.phone}
        required
        autoComplete="tel"
      />
      <Textarea
        label="Comments / What help do you need?"
        name="comments"
        value={data.comments}
        onChange={(e) => setData({ ...data, comments: e.target.value })}
        placeholder="Tell us about your goals, target countries, or current grade level..."
      />
      <Button type="submit" size={inline ? "md" : "lg"} className="w-full">
        Submit Request
      </Button>
    </form>
  );
}
