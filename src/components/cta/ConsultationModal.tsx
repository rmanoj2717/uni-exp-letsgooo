"use client";

import { ConsultationForm } from "./ConsultationForm";
import { Modal } from "@/components/ui/Modal";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import {
  registerModalIntro,
  registerModalTitle,
} from "@/lib/constants/register-form";

export function ConsultationModal() {
  const { isOpen, closeModal, source } = useConsultationModal();

  return (
    <Modal open={isOpen} onClose={closeModal} title={registerModalTitle} size="lg">
      <p className="mb-5 text-sm leading-relaxed text-muted">{registerModalIntro}</p>
      <ConsultationForm source={source} showContactInfo onSuccess={() => {}} />
    </Modal>
  );
}
