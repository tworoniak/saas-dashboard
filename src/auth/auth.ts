export type User = {
  id: string;
  name: string;
  email: string;
};

const STORAGE_KEY = 'fake-saas:auth';

export function getStoredUser(): User | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

export function storeUser(user: User | null) {
  if (!user) localStorage.removeItem(STORAGE_KEY);
  else localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export async function fakeLogin(email: string): Promise<User> {
  // Simulate latency
  await new Promise((r) => setTimeout(r, 350));
  return { id: 'u_1', name: 'Demo User', email };
}

export async function fakeLogout(): Promise<void> {
  await new Promise((r) => setTimeout(r, 150));
}
