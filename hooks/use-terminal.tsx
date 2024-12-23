'use client';

import { createContext, useContext, useState } from 'react';

interface TerminalContextType {
  isHeroTerminalVisible: boolean;
  setHeroTerminalVisible: (visible: boolean) => void;
}

const TerminalContext = createContext<TerminalContextType>({
  isHeroTerminalVisible: false,
  setHeroTerminalVisible: () => {},
});

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [isHeroTerminalVisible, setHeroTerminalVisible] = useState(false);

  return (
    <TerminalContext.Provider value={{ isHeroTerminalVisible, setHeroTerminalVisible }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminalContext() {
  return useContext(TerminalContext);
}