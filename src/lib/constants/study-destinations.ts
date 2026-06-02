/** Selectable study destinations (register form, filters, etc.) */
export const studyDestinationOptions = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Japan",
  "UAE",
  "Singapore",
  "Ireland",
  "New Zealand",
  "Other",
] as const;

export type StudyDestinationOption = (typeof studyDestinationOptions)[number];

export const maxStudyDestinations = 4;

/** Marketing copy for destination mentions across the site */
export const destinationsMarketingCopy =
  "USA, UK, Canada, Australia, Germany, France, Netherlands, Japan, UAE, Singapore, Ireland, New Zealand, and more.";
