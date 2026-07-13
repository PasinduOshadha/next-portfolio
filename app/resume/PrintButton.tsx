'use client'

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="mono-button-primary px-8 py-4 font-bold inline-flex items-center gap-2 print:hidden"
    >
      <span className="material-symbols-outlined text-base">download</span>
      Download PDF
    </button>
  )
}
