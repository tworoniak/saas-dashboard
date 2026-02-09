import React from 'react';
import type { User } from './auth';

export type AuthContextValue = {
  user: User | null;
  isAuthed: boolean;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = React.createContext<AuthContextValue | null>(null);

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
