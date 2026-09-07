import type { ReactNode } from "react";

type ManusDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
};

/**
 * Lightweight modal shell, kept generic so it can be reused for any
 * future confirmation or detail dialog inside RI/OS.
 */
export default function ManusDialog({ open, onClose, title, children }: ManusDialogProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "grid",
        placeItems: "center",
        background: "rgba(10,10,9,.55)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(420px, 90vw)",
          padding: "22px",
          borderRadius: "18px",
          background: "#efede4",
          color: "#20201b",
          boxShadow: "0 24px 80px rgba(0,0,0,.37)",
        }}
      >
        {title && (
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", margin: "0 0 12px", fontSize: "24px" }}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
