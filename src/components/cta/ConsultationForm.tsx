"use client";

import { useState } from "react";
import { ContactInfoBlock } from "@/components/cta/ContactInfoBlock";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  countryCodeOptions,
  degreeOptions,
  maxStudyDestinations,
  planningYearOptions,
  studyDestinations,
  type DegreeValue,
  type StudyDestination,
} from "@/lib/constants/register-form";
import { cn } from "@/lib/utils/cn";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  education: string;
  planningYear: string;
  socialMedia: string;
  degree: DegreeValue | "";
  destinations: StudyDestination[];
  comments: string;
};

type FormErrors = Partial<Record<keyof RegisterFormData, string>>;

const initialData: RegisterFormData = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+91",
  phone: "",
  education: "",
  planningYear: "",
  socialMedia: "",
  degree: "",
  destinations: [],
  comments: "",
};

function validate(data: RegisterFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.countryCode) errors.countryCode = "Country code is required";

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[\d\s\-]{6,}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!data.education.trim()) errors.education = "Current education / school is required";
  if (!data.planningYear) errors.planningYear = "Planning year is required";
  if (!data.degree) errors.degree = "Please select a degree";

  if (data.destinations.length === 0) {
    errors.destinations = "Select at least one destination";
  } else if (data.destinations.length > maxStudyDestinations) {
    errors.destinations = `Select up to ${maxStudyDestinations} destinations`;
  }

  return errors;
}

function SuccessState() {
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
      <h3 className="font-display text-xl font-bold text-navy">Thank you for registering</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Our counsellors will review your details and reach out shortly to discuss your goals and
        next steps.
      </p>
    </div>
  );
}

export function ConsultationForm({
  onSuccess,
  source,
  inline = false,
  showContactInfo = false,
}: {
  onSuccess?: () => void;
  source?: string;
  inline?: boolean;
  showContactInfo?: boolean;
}) {
  const [data, setData] = useState<RegisterFormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleDestination = (destination: StudyDestination) => {
    setData((prev) => {
      const selected = prev.destinations.includes(destination);
      if (selected) {
        return {
          ...prev,
          destinations: prev.destinations.filter((d) => d !== destination),
        };
      }
      if (prev.destinations.length >= maxStudyDestinations) return prev;
      return { ...prev, destinations: [...prev.destinations, destination] };
    });
    if (errors.destinations) setErrors((e) => ({ ...e, destinations: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Registration lead:", { ...data, source });
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return <SuccessState />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          error={errors.firstName}
          required
          autoComplete="given-name"
        />
        <Input
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          error={errors.lastName}
          required
          autoComplete="family-name"
        />
      </div>

      <Input
        label="Email"
        name="email"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        error={errors.email}
        required
        autoComplete="email"
      />

      <div className="grid gap-4 sm:grid-cols-[minmax(0,9rem)_1fr]">
        <Select
          label="Country Code"
          name="countryCode"
          value={data.countryCode}
          onChange={(e) => setData({ ...data, countryCode: e.target.value })}
          error={errors.countryCode}
          required
        >
          {countryCodeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          error={errors.phone}
          required
          autoComplete="tel-national"
        />
      </div>

      <Input
        label="Current Education / School"
        name="education"
        value={data.education}
        onChange={(e) => setData({ ...data, education: e.target.value })}
        error={errors.education}
        required
        placeholder="e.g. Grade 12, B.Tech Year 2, International School"
      />

      <Select
        label="Planning Year to Get Admission"
        name="planningYear"
        value={data.planningYear}
        onChange={(e) => setData({ ...data, planningYear: e.target.value })}
        error={errors.planningYear}
        required
      >
        <option value="">Select year</option>
        {planningYearOptions.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>

      <Input
        label="Social Media Profile (Optional)"
        name="socialMedia"
        value={data.socialMedia}
        onChange={(e) => setData({ ...data, socialMedia: e.target.value })}
        placeholder="LinkedIn, Instagram, or other profile URL"
      />

      <fieldset className="space-y-2">
        <legend className="block text-sm font-semibold text-navy">Degree Interested In</legend>
        <div className="flex flex-wrap gap-2">
          {degreeOptions.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                data.degree === opt.value
                  ? "border-cyan bg-cyan-soft text-navy"
                  : "border-border bg-surface text-muted hover:border-cyan/40",
                errors.degree && !data.degree && "border-orange/50",
              )}
            >
              <input
                type="radio"
                name="degree"
                value={opt.value}
                checked={data.degree === opt.value}
                onChange={() => {
                  setData({ ...data, degree: opt.value });
                  if (errors.degree) setErrors((e) => ({ ...e, degree: undefined }));
                }}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.degree && (
          <p className="text-sm font-medium text-orange-dark" role="alert">
            {errors.degree}
          </p>
        )}
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="block text-sm font-semibold text-navy">
          Preferred Study Destinations
          <span className="ml-1 font-normal text-muted">(up to {maxStudyDestinations})</span>
        </legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
          {studyDestinations.map((destination) => {
            const checked = data.destinations.includes(destination);
            const atLimit = data.destinations.length >= maxStudyDestinations && !checked;

            return (
              <label
                key={destination}
                className={cn(
                  "flex min-w-0 cursor-pointer items-center gap-2 rounded-xl border px-2.5 py-2 text-sm transition-colors sm:px-3",
                  checked
                    ? "border-cyan/40 bg-cyan-soft/50 text-navy"
                    : "border-border/80 bg-surface text-muted hover:border-cyan/25",
                  atLimit && "cursor-not-allowed opacity-50",
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={atLimit}
                  onChange={() => toggleDestination(destination)}
                  className="h-4 w-4 shrink-0 rounded border-border text-cyan focus:ring-cyan/30"
                />
                <span className="leading-tight">{destination}</span>
              </label>
            );
          })}
        </div>
        {errors.destinations && (
          <p className="text-sm font-medium text-orange-dark" role="alert">
            {errors.destinations}
          </p>
        )}
      </fieldset>

      <Textarea
        label="Comments / Questions"
        name="comments"
        value={data.comments}
        onChange={(e) => setData({ ...data, comments: e.target.value })}
        placeholder="Anything else we should know about your goals or timeline?"
      />

      <Button type="submit" size={inline ? "md" : "lg"} className="w-full">
        Register Now
      </Button>

      {showContactInfo && <ContactInfoBlock className="mt-2" />}
    </form>
  );
}
