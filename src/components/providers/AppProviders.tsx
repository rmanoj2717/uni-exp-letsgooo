"use client";

import { ConsultationModal } from "@/components/cta/ConsultationModal";
import { ConsultationModalProvider } from "@/context/ConsultationModalContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ConsultationModalProvider>
      {children}
      <ConsultationModal />
    </ConsultationModalProvider>
  );
}
