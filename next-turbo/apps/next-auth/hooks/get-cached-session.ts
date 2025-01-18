let sessionCache: { token: string | null } | null = null;

export const getCachedSession = async () => {
  if (!sessionCache) {
    const res = await fetch('http://localhost:8080/api/auth/session');
    if (res.ok) {
      const session = await res.json();
      sessionCache = { token: session?.accessToken || null };
    } else {
      sessionCache = { token: null };
    }
  }

  return sessionCache.token;
};
