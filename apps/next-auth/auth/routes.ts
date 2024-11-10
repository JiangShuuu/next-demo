/**
 * Public routes
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"]

/**
 * Auth routes
 * These routes will redirect to logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error", "/auth/reset"]


export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"