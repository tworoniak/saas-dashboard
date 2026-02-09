import React from 'react';
import type { Theme } from './themeUtils';

export type ThemeCtx = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeCtx | null>(null);
