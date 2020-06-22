import { createContext, useContext } from 'react';

export const AdaptabilityContext = createContext<AdaptabilityContext | null>(null);

export interface AdaptabilityContext {
  hydrated: boolean;
}

export function useAdaptabilityContext(): AdaptabilityContext {
  const context = useContext(AdaptabilityContext);
  if (!context) {
    throw new Error('ThemeContext is not found');
  }
  return context;
}
