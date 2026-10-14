export * from "./types/api.js";
export * from "./types/content.js";
export * from "./types/inquiries.js";
export * from "./types/chat.js";
/**
 * Standard CMS Public REST Endpoints
 */
export const CMS_API_ENDPOINTS = {
    // Read endpoints
    SETTINGS: "/api/v1/public/settings",
    PAGE_COPY: "/api/v1/public/page-copy",
    PROJECTS: "/api/v1/public/projects",
    PROJECT_DETAIL: (slug) => `/api/v1/public/projects/${encodeURIComponent(slug)}`,
    BLOGS: "/api/v1/public/blogs",
    BLOG_DETAIL: (slug) => `/api/v1/public/blogs/${encodeURIComponent(slug)}`,
    SERVICES: "/api/v1/public/services",
    SERVICE_DETAIL: (slug) => `/api/v1/public/services/${encodeURIComponent(slug)}`,
    SKILLS: "/api/v1/public/skills",
    AVAILABILITY: "/api/v1/public/availability",
    TESTIMONIALS: "/api/v1/public/testimonials",
    FAQS: "/api/v1/public/faqs",
    RESUME: "/api/v1/public/resume",
    CV: "/api/v1/public/cv",
    SITE_PAGES: (slug) => `/api/v1/public/site-pages/${encodeURIComponent(slug)}`,
    SHOWCASE: "/api/v1/public/showcase",
    SHOWCASE_DETAIL: (slug) => `/api/v1/public/showcase/${encodeURIComponent(slug)}`,
    // Mutation endpoints
    INQUIRY_CONTACT: "/api/v1/public/inquiries/contact",
    INQUIRY_HIRE: "/api/v1/public/inquiries/hire",
    INQUIRY_SERVICE: "/api/v1/public/inquiries/service",
    CHAT_VISITOR: "/api/v1/public/chat/visitor",
    INTERACTION_VIEW: "/api/v1/public/interactions/view",
    INTERACTION_LIKE: "/api/v1/public/interactions/like",
    // Invalidation Webhook
    REVALIDATE: "/api/revalidate",
};
/**
 * Cache tags for Next.js Incremental Static Regeneration (ISR)
 */
export const CMS_CACHE_TAGS = {
    SETTINGS: "content:settings",
    PAGE_COPY_ALL: "content:page-copy",
    PAGE_COPY: (slug) => `content:page-copy:${slug}`,
    PROJECTS_ALL: "content:projects",
    PROJECT_DETAIL: (slug) => `content:projects:${slug}`,
    BLOGS_ALL: "content:blogs",
    BLOG_DETAIL: (slug) => `content:blogs:${slug}`,
    SERVICES_ALL: "content:services",
    SERVICE_DETAIL: (slug) => `content:services:${slug}`,
    SKILLS: "content:skills",
    AVAILABILITY: "content:availability",
    TESTIMONIALS: "content:testimonials",
    FAQS: "content:faqs",
    RESUME: "content:resume",
    CV: "content:cv",
    SITE_PAGE: (slug) => `content:site-pages:${slug}`,
    SHOWCASE_ALL: "content:showcase",
    SHOWCASE_DETAIL: (slug) => `content:showcase:${slug}`,
};
//# sourceMappingURL=index.js.map