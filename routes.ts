/**
 * Public routes
 * @type {string[]}
 */
export const publicRoutes = ["/"]

/**
 * Auth routes
 * These routes will redirect to logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"]


export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"