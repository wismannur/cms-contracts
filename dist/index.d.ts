export * from "./types/api.js";
export * from "./types/content.js";
export * from "./types/inquiries.js";
export * from "./types/chat.js";
/**
 * Standard CMS Public REST Endpoints
 */
export declare const CMS_API_ENDPOINTS: {
    readonly SETTINGS: "/api/v1/public/settings";
    readonly PAGE_COPY: "/api/v1/public/page-copy";
    readonly PROJECTS: "/api/v1/public/projects";
    readonly PROJECT_DETAIL: (slug: string) => string;
    readonly BLOGS: "/api/v1/public/blogs";
    readonly BLOG_DETAIL: (slug: string) => string;
    readonly SERVICES: "/api/v1/public/services";
    readonly SERVICE_DETAIL: (slug: string) => string;
    readonly SKILLS: "/api/v1/public/skills";
    readonly AVAILABILITY: "/api/v1/public/availability";
    readonly TESTIMONIALS: "/api/v1/public/testimonials";
    readonly FAQS: "/api/v1/public/faqs";
    readonly RESUME: "/api/v1/public/resume";
    readonly CV: "/api/v1/public/cv";
    readonly SITE_PAGES: (slug: string) => string;
    readonly SHOWCASE: "/api/v1/public/showcase";
    readonly SHOWCASE_DETAIL: (slug: string) => string;
    readonly INQUIRY_CONTACT: "/api/v1/public/inquiries/contact";
    readonly INQUIRY_HIRE: "/api/v1/public/inquiries/hire";
    readonly INQUIRY_SERVICE: "/api/v1/public/inquiries/service";
    readonly CHAT_VISITOR: "/api/v1/public/chat/visitor";
    readonly INTERACTION_VIEW: "/api/v1/public/interactions/view";
    readonly INTERACTION_LIKE: "/api/v1/public/interactions/like";
    readonly REVALIDATE: "/api/revalidate";
};
/**
 * Cache tags for Next.js Incremental Static Regeneration (ISR)
 */
export declare const CMS_CACHE_TAGS: {
    readonly SETTINGS: "content:settings";
    readonly PAGE_COPY_ALL: "content:page-copy";
    readonly PAGE_COPY: (slug: string) => string;
    readonly PROJECTS_ALL: "content:projects";
    readonly PROJECT_DETAIL: (slug: string) => string;
    readonly BLOGS_ALL: "content:blogs";
    readonly BLOG_DETAIL: (slug: string) => string;
    readonly SERVICES_ALL: "content:services";
    readonly SERVICE_DETAIL: (slug: string) => string;
    readonly SKILLS: "content:skills";
    readonly AVAILABILITY: "content:availability";
    readonly TESTIMONIALS: "content:testimonials";
    readonly FAQS: "content:faqs";
    readonly RESUME: "content:resume";
    readonly CV: "content:cv";
    readonly SITE_PAGE: (slug: string) => string;
    readonly SHOWCASE_ALL: "content:showcase";
    readonly SHOWCASE_DETAIL: (slug: string) => string;
};
//# sourceMappingURL=index.d.ts.map