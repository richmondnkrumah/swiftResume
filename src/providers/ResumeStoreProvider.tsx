"use client";

import { createContext, useContext, useRef, ReactNode } from "react";
import { useStore } from "zustand";

import { type ResumeStore,  createResumeStore, initResumeStore } from "@/stores/resumeStore";

export type ResumeStoreApi = ReturnType<typeof createResumeStore>;

export const ResumeStoreContext = createContext<ResumeStoreApi | undefined>(
  undefined
);

export interface ResumeStoreProviderProps {
  children: ReactNode;
}

export const ResumeStoreProvider = ({
  children,
}: ResumeStoreProviderProps) => {
  const storeRef = useRef<ResumeStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createResumeStore(initResumeStore());
  }

  return (
    <ResumeStoreContext.Provider value={storeRef.current}>
      {children}
    </ResumeStoreContext.Provider>
  );
};

export const useResumeStore = <T,>(selector: (store: ResumeStore) => T): T => {
  const resumeStoreContext = useContext(ResumeStoreContext);

  if (!resumeStoreContext) {
    throw new Error(`useResumeStore must be used within ResumeStoreProvider`);
  }

  return useStore(resumeStoreContext, selector);
};
