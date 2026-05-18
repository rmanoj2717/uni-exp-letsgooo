"use client";

import { Button } from "@/components/ui/Button";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import { primaryCtaLabel } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function CtaButton({
  source,
  label = primaryCtaLabel,
  variant = "primary",
  size = "md",
  className,
}: {
  source?: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { openModal } = useConsultationModal();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => openModal(source)}
    >
      {label}
    </Button>
  );
}
