export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/80">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 max-w-[1440px] mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-light text-on-surface font-headline">Pasindu Oshadha</div>
          <p className="text-sm leading-relaxed text-on-surface-variant">Built with Next.js &amp; precision.</p>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="https://github.com/PasinduOshadha" target="_blank" rel="noopener noreferrer" className="mono-link text-on-surface-variant">GitHub</a>
          <a href="https://www.linkedin.com/in/pasindu-oshadha" target="_blank" rel="noopener noreferrer" className="mono-link text-on-surface-variant">LinkedIn</a>
          <a href="https://x.com/pasinduoshadha" target="_blank" rel="noopener noreferrer" className="mono-link text-on-surface-variant">X</a>
          <a href="mailto:hello@pasinduoshadha.com" className="mono-link text-on-surface-variant">Email</a>
        </div>
        <div className="text-on-surface-variant text-xs font-mono uppercase tracking-widest">
          &copy; 2025 Pasindu Oshadha
        </div>
      </div>
    </footer>
  )
}
