"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ScreenSizeContextType {
  isMobile: boolean;
}

// Cria o contexto "ScreenSizeContext", tipando-o para armazenar valores do tipo "ScreenSizeContextType".
// O valor inicial é "undefined", já que o contexto será preenchido quando o provider for usado.
export const ScreenSizeContext = createContext<
  ScreenSizeContextType | undefined
>(undefined);

interface ScreenSizeProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
