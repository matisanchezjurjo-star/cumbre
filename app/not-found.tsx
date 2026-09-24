import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/CTAFooter";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="text-center px-5">
          <p className="font-serif text-7xl text-wine">404</p>
          <h1 className="mt-4 font-serif text-2xl sm:text-3xl text-ink">
            Esta página no existe
          </h1>
          <p className="mt-3 text-ink/60 max-w-md mx-auto">
            El producto o la página que buscás no está disponible. Puede que
            se haya movido o que el link esté mal escrito.
          </p>
          <Link
            href="/productos"
            className="mt-8 inline-block rounded-full bg-wine text-cream font-medium px-7 py-3 hover:bg-wine-dark hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Ver catálogo
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
