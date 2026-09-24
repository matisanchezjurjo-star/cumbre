export default function LoadingProduct() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid sm:grid-cols-2 gap-10">
      <div className="aspect-square rounded-xl bg-wine/10 animate-pulse" />
      <div className="space-y-4">
        <div className="h-8 w-3/4 rounded bg-wine/10 animate-pulse" />
        <div className="h-6 w-32 rounded bg-wine/10 animate-pulse" />
        <div className="h-20 w-full rounded bg-wine/10 animate-pulse" />
        <div className="h-11 w-40 rounded-full bg-wine/10 animate-pulse" />
      </div>
    </div>
  );
}
