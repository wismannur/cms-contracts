/**
 * Standard API Response envelope
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
  };
  error?: string;
}

export interface ApiPaginatedResponse<T> {
  success: boolean;
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  error?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  statusCode?: number;
}

/**
 * On-demand revalidation payload dispatched from CMS to Public Site
 */
export interface RevalidationPayload {
  tags?: string[];
  paths?: string[];
  entity?: string;
  action?: "create" | "update" | "delete" | "publish" | "unpublish";
  timestamp?: number;
}

/**
 * Public view/like interaction payload
 */
export interface InteractionPayload {
  entityType: "project" | "blog";
  slug: string;
}
