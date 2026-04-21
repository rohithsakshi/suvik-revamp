"use client";

// ─────────────────────────────────────────────────────────────────────────────
// GoldThread — STATIC VERSION
// ─────────────────────────────────────────────────────────────────────────────

interface GoldThreadProps {
  className?: string;
  opacity?: number;
}

export function GoldThread({ className = "", opacity = 0.3 }: GoldThreadProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        style={{
          opacity,
        }}
        className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SectionLabel — STATIC VERSION
// ─────────────────────────────────────────────────────────────────────────────

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {number && (
        <span className="text-[9px] tracking-[0.4em] text-[#C9A96E] font-light">
          {number}
        </span>
      )}
      <div className="w-6 h-px bg-[#C9A96E] opacity-50" />
      <span className="text-[9px] tracking-[0.35em] text-[#C9A96E] font-light uppercase">
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Legacy named exports
// ─────────────────────────────────────────────────────────────────────────────

export function DividerAboutServices() {
  return null;
}

export function DividerServicesClients() {
  return null;
}

export function DividerClientsProjects() {
  return null;
}

export function DividerProjectsGlobal() {
  return null;
}

export function DividerGlobalFooter() {
  return <GoldThread className="px-16 lg:px-32" opacity={0.15} />;
}
