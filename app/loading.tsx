export default function Loading() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-blue border-t-transparent rounded-full animate-spin" />
        <span className="text-muted font-mono text-xs uppercase tracking-widest">Loading</span>
      </div>
    </div>
  )
}
