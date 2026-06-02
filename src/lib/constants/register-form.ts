export const registerModalTitle = "Register Now";

export const registerModalIntro =
  "Share a few details and our counsellors will reach out to understand your goals, timeline, and study abroad plans.";

export const degreeOptions = [
  { value: "bachelors", label: "Bachelor's" },
  { value: "masters", label: "Master's" },
  { value: "phd", label: "PhD" },
] as const;

export type DegreeValue = (typeof degreeOptions)[number]["value"];

import {
  maxStudyDestinations,
  studyDestinationOptions,
  type StudyDestinationOption,
} from "@/lib/constants/study-destinations";

export const studyDestinations = studyDestinationOptions;
export type StudyDestination = StudyDestinationOption;
export { maxStudyDestinations };

export const countryCodeOptions = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "USA / Canada (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+971", label: "UAE (+971)" },
  { value: "+65", label: "Singapore (+65)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+33", label: "France (+33)" },
  { value: "+31", label: "Netherlands (+31)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+353", label: "Ireland (+353)" },
  { value: "other", label: "Other" },
] as const;

export const planningYearOptions = [
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031+",
] as const;
