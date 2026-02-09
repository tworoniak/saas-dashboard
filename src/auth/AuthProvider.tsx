import React from 'react';
import { fakeLogin, fakeLogout, getStoredUser, storeUser } from './auth';
import { AuthContext } from './AuthContext';
import type { User } from './auth';
import type { AuthContextValue } from './AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(() => getStoredUser());
  const [busy, setBusy] = React.useState(false);

  const login = React.useCallback(async (email: string) => {
    setBusy(true);
    try {
      const u = await fakeLogin(email);
      setUser(u);
      storeUser(u);
    } finally {
      setBusy(false);
    }
  }, []);

  const logout = React.useCallback(async () => {
    setBusy(true);
    try {
      await fakeLogout();
      setUser(null);
      storeUser(null);
    } finally {
      setBusy(false);
    }
  }, []);

  const value: AuthContextValue = React.useMemo(
    () => ({
      user,
      isAuthed: !!user,
      login,
      logout,
      busy,
    }),
    [user, login, logout, busy],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
