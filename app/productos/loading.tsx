export default function LoadingProductos() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
      <div className="h-12 w-72 rounded-sm bg-wine/10 animate-pulse" />
      <div className="mt-6 flex gap-7 pb-3 border-b border-border">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-4 w-20 rounded-sm bg-wine/10 animate-pulse" />
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-sm overflow-hidden border border-border">
            <div className="aspect-square bg-wine/10 animate-pulse" />
            <div className="p-3 space-y-2">
              <div className="h-3 w-full rounded bg-wine/10 animate-pulse" />
              <div className="h-3 w-2/3 rounded bg-wine/10 animate-pulse" />
              <div className="h-4 w-20 rounded bg-wine/10 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
