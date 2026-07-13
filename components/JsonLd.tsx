export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Escape < to prevent </script> breakout from CMS-sourced strings
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
