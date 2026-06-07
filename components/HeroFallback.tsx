export default function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue/10 blur-[120px]"
        style={{ animation: 'drift 8s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-purple/10 blur-[100px]"
        style={{ animation: 'drift 10s ease-in-out infinite reverse' }}
      />
    </div>
  )
}
