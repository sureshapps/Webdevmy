/**
 * Constants shared between the client and the optional local dev server.
 * Keep this file free of client-only or server-only imports.
 */
export const API_PREFIX = "/api";
export const PORT = Number(process.env.PORT ?? 5174);
