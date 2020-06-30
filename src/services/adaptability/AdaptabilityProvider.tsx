import React, { useState, useMemo } from 'react';
import { AdaptabilityContext } from './AdaptabilityContext';

export function AdaptabilityProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  React.useEffect(() => setHydrated(true), []);

  const context: AdaptabilityContext = useMemo(() => ({ hydrated }), [hydrated]);

  return <AdaptabilityContext.Provider value={context}>{children}</AdaptabilityContext.Provider>;
}
