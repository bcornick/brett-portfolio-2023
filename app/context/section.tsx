'use client';

import { createContext, useState, ReactNode } from 'react';

interface SectionContextProviderProps {
  children: ReactNode[] | ReactNode;
}

interface ISectionContext {
  section: number;
  updateSection?: (newSection: number) => void;
}

const defaultValues = { section: 0 };

export const SectionContext = createContext<ISectionContext>(defaultValues);

export const SectionContextProvider = ({
  children,
}: SectionContextProviderProps) => {
  const [section, setSection] = useState(0);

  const updateSection = (newSection: number) => {
    setSection(newSection);
  };

  const contextValue: ISectionContext = {
    section,
    updateSection,
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
};
