'use client'
import { useCallback, useState } from "react";
import { createContext } from 'react'
 
export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export type ThemeContextType = {
  toggleTheme: () => void;
  theme:ThemeType;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeType.light, toggleTheme: () => null, isDark: false
})
 
const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState(ThemeType.light);
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === ThemeType.dark ? ThemeType.light : ThemeType.dark)
  }, [])
  return (
    <ThemeContext value={{ theme, toggleTheme, isDark: theme === ThemeType.dark }}>
      {children}
    </ThemeContext>
  )
}

export default ThemeProvider;
