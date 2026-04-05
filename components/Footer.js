export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/15">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-[1440px] mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-on-surface font-headline">Pasindu Oshadha</div>
          <p className="text-sm leading-relaxed text-on-surface/50">Built with Next.js &amp; Passion</p>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="https://github.com/PasinduOshadha" target="_blank" rel="noopener noreferrer" className="text-on-surface/50 hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/pasindu-oshadha" target="_blank" rel="noopener noreferrer" className="text-on-surface/50 hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://x.com/pasinduoshadha" target="_blank" rel="noopener noreferrer" className="text-on-surface/50 hover:text-primary transition-colors">X</a>
          <a href="mailto:hello@pasinduoshadha.com" className="text-on-surface/50 hover:text-primary transition-colors">Email</a>
        </div>
        <div className="text-on-surface/30 text-xs font-mono uppercase tracking-widest">
          &copy; 2025 Pasindu Oshadha
        </div>
      </div>
    </footer>
  )
}
