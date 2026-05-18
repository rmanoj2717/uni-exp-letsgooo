"use client";

import { createContext, useCallback, useContext, useState } from "react";

type ConsultationModalContextValue = {
  isOpen: boolean;
  source: string | undefined;
  openModal: (source?: string) => void;
  closeModal: () => void;
};

const ConsultationModalContext = createContext<ConsultationModalContextValue | null>(
  null,
);

export function ConsultationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();

  const openModal = useCallback((src?: string) => {
    setSource(src);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSource(undefined);
  }, []);

  return (
    <ConsultationModalContext.Provider
      value={{ isOpen, source, openModal, closeModal }}
    >
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error("useConsultationModal must be used within ConsultationModalProvider");
  }
  return ctx;
}
