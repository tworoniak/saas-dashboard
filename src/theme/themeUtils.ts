export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'fake-saas:theme';

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}
