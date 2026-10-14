import type { JsonDate } from "./content.js";

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  turnstileToken?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  rawHtml?: string | null;
  status: "new" | "read" | "replied" | "archived";
  source?: "form" | "direct_email" | string | null;
  createdAt: JsonDate;
}

export type HireRequestStatus =
  | "new"
  | "reviewed"
  | "interviewing"
  | "offered"
  | "rejected"
  | "archived";

export interface HireRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  roleTitle: string;
  employmentType: string;
  workplaceType: string;
  location?: string;
  salaryRange?: string;
  message: string;
  status: HireRequestStatus;
  createdAt: JsonDate;
  updatedAt: JsonDate;
}

export type NewHireRequest = Omit<HireRequest, "id" | "status" | "createdAt" | "updatedAt"> & {
  honeypot?: string;
  turnstileToken?: string;
};

export interface ServiceRequest {
  id: string;
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  budget: string;
  timeframe: string;
  projectDetails: string;
  status: "new" | "in-progress" | "completed" | "cancelled";
  createdAt: JsonDate;
}

export type NewServiceRequest = Omit<ServiceRequest, "id" | "status" | "createdAt"> & {
  honeypot?: string;
  recaptchaToken?: string;
};

