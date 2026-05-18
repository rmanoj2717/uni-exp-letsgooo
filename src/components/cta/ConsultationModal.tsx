"use client";

import { ConsultationForm } from "./ConsultationForm";
import { Modal } from "@/components/ui/Modal";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import { primaryCtaLabel } from "@/lib/constants/navigation";

export function ConsultationModal() {
  const { isOpen, closeModal, source } = useConsultationModal();

  return (
    <Modal open={isOpen} onClose={closeModal} title={primaryCtaLabel}>
      <p className="mb-5 text-sm text-muted">
        Share a few details and our counsellors will reach out to understand your
        goals and next steps.
      </p>
      <ConsultationForm source={source} onSuccess={() => {}} />
    </Modal>
  );
}
