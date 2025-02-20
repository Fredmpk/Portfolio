// contexts/VisibilityContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext({
  isHeroInView: true,
  setIsHeroInView: (value: boolean) => {},
});

export function VisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHeroInView, setIsHeroInView] = useState(true);

  return (
    <VisibilityContext.Provider value={{ isHeroInView, setIsHeroInView }}>
      {children}
    </VisibilityContext.Provider>
  );
}

export function useVisibility() {
  return useContext(VisibilityContext);
}
