"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "fixed inset-0 z-50 m-auto max-h-[min(90vh,720px)] w-[calc(100%-1.5rem)] max-w-lg overflow-hidden rounded-3xl border border-border/60 bg-surface p-0 shadow-[var(--shadow-elevated)]",
        "open:animate-fade-in",
      )}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <div className="border-b border-border/80 bg-off-white/40 px-6 py-5 sm:px-7">
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="font-display text-xl font-bold leading-snug text-navy sm:text-2xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-xl p-2 text-muted transition-colors hover:bg-surface hover:text-navy"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-y-auto px-6 py-6 sm:px-7 sm:py-7">{children}</div>
    </dialog>
  );
}
