"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMS_CACHE_TAGS = exports.CMS_API_ENDPOINTS = void 0;
__exportStar(require("./types/api"), exports);
__exportStar(require("./types/content"), exports);
__exportStar(require("./types/inquiries"), exports);
__exportStar(require("./types/chat"), exports);
/**
 * Standard CMS Public REST Endpoints
 */
exports.CMS_API_ENDPOINTS = {
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
    // Mutation endpoints
    INQUIRY_CONTACT: "/api/v1/public/inquiries/contact",
    INQUIRY_HIRE: "/api/v1/public/inquiries/hire",
    CHAT_VISITOR: "/api/v1/public/chat/visitor",
    INTERACTION_VIEW: "/api/v1/public/interactions/view",
    INTERACTION_LIKE: "/api/v1/public/interactions/like",
    // Invalidation Webhook
    REVALIDATE: "/api/revalidate",
};
/**
 * Cache tags for Next.js Incremental Static Regeneration (ISR)
 */
exports.CMS_CACHE_TAGS = {
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
};
//# sourceMappingURL=index.js.map