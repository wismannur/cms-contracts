export type JsonDate = Date | string;
export interface Blog {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    image: string;
    isPublished: boolean;
    publishedDate: JsonDate | null;
    createdAt: JsonDate;
    updatedAt: JsonDate;
    tags: string[];
    views: number;
    likes: number;
    readingTime: number;
    authorId: string;
    authorName: string;
}
export type NewBlog = Omit<Blog, "id" | "createdAt" | "updatedAt">;
export type UpdateBlog = Partial<Omit<Blog, "id" | "createdAt" | "updatedAt">>;
export interface Project {
    id: string;
    title: string;
    slug: string;
    summary: string;
    description: string;
    image: string;
    isPublished: boolean;
    isFeatured: boolean;
    publishedDate: JsonDate | null;
    createdAt: JsonDate;
    updatedAt: JsonDate;
    technologies: string[];
    demoUrl?: string;
    repoUrl?: string;
    views: number;
    likes: number;
    readingTime: number;
    authorId?: string;
    authorName?: string;
}
export type NewProject = Omit<Project, "id" | "createdAt" | "updatedAt">;
export type UpdateProject = Partial<Omit<Project, "id" | "createdAt" | "updatedAt">>;
export interface ServiceItem {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    icon: string;
    priceLabel: string;
    features: string[];
    showOnHome: boolean;
    showOnHireMe: boolean;
    sortOrder: number;
    isPublished: boolean;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewServiceItem = Omit<ServiceItem, "id" | "createdAt" | "updatedAt">;
export type UpdateServiceItem = Partial<NewServiceItem>;
export interface SocialLinks {
    github: string;
    twitter: string;
    linkedin: string;
}
export interface LabeledLink {
    label: string;
    href: string;
}
export interface SelectOption {
    id: string;
    label: string;
}
export interface SiteSettings {
    siteName: string;
    titleDefault: string;
    titleTemplate: string;
    metaDescription: string;
    keywords: string[];
    twitterHandle: string;
    themeColor: string;
    ogTitle: string;
    ogTagline: string;
    publicEmail: string;
    location: string;
    timezoneLabel: string;
    social: SocialLinks;
    footerBio: string;
    footerTagline: string;
    copyrightName: string;
    repoUrl: string;
    repoLinkLabel: string;
    footerProjectLinks: LabeledLink[];
    requestTimeframes: SelectOption[];
    requestBudgetRanges: SelectOption[];
    enableBlog: boolean;
    enableAiChat: boolean;
    updatedAt: JsonDate;
}
export type SiteSettingsUpdate = Partial<Omit<SiteSettings, "updatedAt">>;
export type PageKey = "home" | "about" | "services" | "hire-me" | "blog" | "projects" | "contact" | "not-found" | "default";
export interface CtaData {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    primaryButtonScrollTo?: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    badge: string;
    responseTime?: string;
}
export interface PageMeta {
    title: string;
    description: string;
}
export interface SectionCopy {
    title: string;
    subtitle?: string;
    description?: string;
}
export interface HomeCopy {
    meta: PageMeta;
    hero: {
        eyebrow: string;
        title: string;
        bio: string;
        videoUrl: string;
    };
    sections: {
        services: SectionCopy;
        blog: SectionCopy;
        projects: SectionCopy;
    };
    cta: CtaData;
}
export interface AboutCopy {
    meta: PageMeta;
    hero: {
        badge: string;
        photoUrl: string;
        photoBadge: string;
        statPills: Array<{
            icon: string;
            label: string;
            variant: "primary" | "success";
        }>;
        title: string;
        paragraphs: string[];
    };
    skillsSection: SectionCopy;
    whySection: SectionCopy;
    whyCards: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    cta: CtaData;
}
export interface ServicesCopy {
    meta: PageMeta;
    header: SectionCopy;
    processSection: SectionCopy;
    requestSection: SectionCopy;
    faqSection: SectionCopy;
    cta: CtaData;
}
export interface HireMeCopy {
    meta: PageMeta;
    hero: {
        eyebrow: string;
        title: string;
        description: string;
    };
    availabilitySection: {
        title: string;
        description: string;
        timezoneNote: string;
        contactNote: string;
    };
    servicesSection: SectionCopy;
    processSection: SectionCopy;
    testimonialsSection: SectionCopy;
    faqSection: SectionCopy;
    contactSection: SectionCopy;
    cta: CtaData;
}
export interface ListHeaderCopy {
    meta: PageMeta;
    header: {
        eyebrow: string;
        title: string;
        description: string;
    };
    cta: CtaData;
}
export interface ContactCopy {
    meta: PageMeta;
    header: SectionCopy;
}
export interface NotFoundCopy {
    badge: string;
    title: string;
    message: string;
    primaryLabel: string;
    secondaryLabel: string;
    popularTitle: string;
}
export interface DefaultCopy {
    cta: CtaData;
}
export interface PageCopyMap {
    home: HomeCopy;
    about: AboutCopy;
    services: ServicesCopy;
    "hire-me": HireMeCopy;
    blog: ListHeaderCopy;
    projects: ListHeaderCopy;
    contact: ContactCopy;
    "not-found": NotFoundCopy;
    default: DefaultCopy;
}
export type PageCopyContent = PageCopyMap[PageKey];
export interface PageCopyEntry {
    page: PageKey;
    content: PageCopyContent;
    updatedAt: JsonDate;
}
export interface Faq {
    id: string;
    question: string;
    answer: string;
    sortOrder: number;
    isPublished: boolean;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewFaq = Omit<Faq, "id" | "createdAt" | "updatedAt">;
export type UpdateFaq = Partial<NewFaq>;
export interface Testimonial {
    id: string;
    authorName: string;
    authorRole: string;
    quote: string;
    avatarUrl?: string;
    rating: number;
    sortOrder: number;
    isPublished: boolean;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewTestimonial = Omit<Testimonial, "id" | "createdAt" | "updatedAt">;
export type UpdateTestimonial = Partial<NewTestimonial>;
export type AvailabilityStatus = "available" | "limited" | "booked";
export interface AvailabilitySlot {
    id: string;
    month: number;
    year: number;
    status: AvailabilityStatus;
    label: string;
    sortOrder: number;
    isPublished: boolean;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewAvailabilitySlot = Omit<AvailabilitySlot, "id" | "createdAt" | "updatedAt">;
export type UpdateAvailabilitySlot = Partial<NewAvailabilitySlot>;
export interface Skill {
    id: string;
    name: string;
    sortOrder: number;
    isPublished: boolean;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewSkill = Omit<Skill, "id" | "createdAt" | "updatedAt">;
export type UpdateSkill = Partial<NewSkill>;
export type ResumeKind = "experience" | "education";
export interface ResumeEntry {
    id: string;
    kind: ResumeKind;
    title: string;
    organization: string;
    location?: string;
    employmentType?: string;
    locationType?: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description: string;
    sortOrder: number;
    isPublished: boolean;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewResumeEntry = Omit<ResumeEntry, "id" | "createdAt" | "updatedAt">;
export type UpdateResumeEntry = Partial<NewResumeEntry>;
export interface MasterCvData {
    skills: Skill[];
    experiences: ResumeEntry[];
    education: ResumeEntry[];
    settings: SiteSettings;
}
export interface SitePage {
    id: string;
    slug: string;
    title: string;
    content: string;
    isPublished: boolean;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewSitePage = Omit<SitePage, "id" | "createdAt" | "updatedAt">;
export type UpdateSitePage = Partial<NewSitePage>;
export type ProjectProspectStatus = "sourced" | "audited" | "building_mvp" | "pitch_ready" | "outreach_sent" | "negotiation" | "won" | "archived";
export type ProspectIndustry = "home_living" | "d2c_luxury" | "outdoor_mobility" | "b2b_wholesale" | "specialty_food" | "other";
export interface ProjectAuditAnalysis {
    performanceScore?: number;
    mobileFrictionScore?: number;
    modernizationOpportunityScore: number;
    detectedStack?: string[];
    coreWebVitalIssues?: string[];
    mobileUxPainPoints?: string[];
    recommendedModernization?: string[];
    modernizationPitchSummary?: string;
    estimatedConversionLift?: string;
    executiveSummary?: string;
}
export interface ProjectProspect {
    id: string;
    companyName: string;
    companyLogo?: string;
    companyWebsite: string;
    industry: ProspectIndustry | string;
    country: string;
    city?: string;
    timezone: string;
    status: ProjectProspectStatus;
    estimatedRevenueTier?: string;
    auditScore?: number;
    auditAnalysis?: ProjectAuditAnalysis;
    mvpDemoUrl?: string;
    loomVideoUrl?: string;
    pitchScript?: string;
    contactName?: string;
    contactRole?: string;
    contactEmail?: string;
    contactLinkedin?: string;
    outreachStatus?: string;
    outreachSentAt?: JsonDate;
    followUpDueDate?: JsonDate;
    notes?: string;
    sortOrder: number;
    createdAt: JsonDate;
    updatedAt: JsonDate;
}
export type NewProjectProspect = Omit<ProjectProspect, "id" | "createdAt" | "updatedAt">;
export type UpdateProjectProspect = Partial<NewProjectProspect>;
//# sourceMappingURL=content.d.ts.map