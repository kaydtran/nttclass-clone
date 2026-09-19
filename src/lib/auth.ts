const AUTH_KEY = 'educenter_admin_auth';

export interface AuthSession {
  isAuthenticated: boolean;
  username: string;
  loginTime: number;
}

export function getSession(): AuthSession | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(AUTH_KEY);
    if (!stored) return null;

    const session: AuthSession = JSON.parse(stored);

    // Session expires after 24 hours
    if (Date.now() - session.loginTime > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(AUTH_KEY);
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export function setSession(data: { user: { username: string; role: string }; token: string }): void {
  const session: AuthSession = {
    isAuthenticated: true,
    username: data.user.username,
    loginTime: Date.now(),
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
  const session = getSession();
  return session?.isAuthenticated ?? false;
}
