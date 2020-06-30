import React, { useState, useCallback, useMemo } from 'react';
// tslint:disable-next-line: import-blacklist
import { PaletteType } from '@material-ui/core';
import { Theme, MuiThemeProvider } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from 'shared/styles/theme';
import { ThemeContext } from './ThemeContext';

const themeByType: Record<PaletteType, Theme> = {
  dark: darkTheme,
  light: lightTheme,
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const defaultTheme: PaletteType = 'dark';
  const [currentTheme, setCurrentTheme] = useState(() => getSavedTheme() || defaultTheme);

  const changeTheme = useCallback((type: PaletteType) => {
    saveTheme(type);
    setCurrentTheme(type);
  }, []);

  const theme = React.useMemo(() => themeByType[currentTheme], [currentTheme]);

  const context: ThemeContext = useMemo(() => ({ currentTheme, changeTheme }), [currentTheme]);

  return (
    <ThemeContext.Provider value={context}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

const SAVED_THEME_KEY = '__akro-theme__';

function getSavedTheme(): PaletteType | null {
  try {
    const formStorage = localStorage.getItem(SAVED_THEME_KEY);
    return isCorrectTheme(formStorage) ? formStorage : null;
  } catch {
    return null;
  }
}

function saveTheme(theme: PaletteType): void {
  try {
    localStorage.setItem(SAVED_THEME_KEY, theme);
  } catch {
    // ignore error
  }
}

function isCorrectTheme(value: any): value is PaletteType {
  const availableThemes: PaletteType[] = ['light', 'dark'];
  return availableThemes.includes(value);
}
