import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mist-20 px-6 text-center text-ink-900">
      <p className="font-serif text-8xl font-light text-mist-160/40 opacity-50">
        404
      </p>
      <h1 className="mt-8 font-serif text-3xl font-semibold sm:text-4xl text-ink-900">
        Este espacio está vacío.
      </h1>
      <p className="mt-4 max-w-md text-base text-ink-500">
        La página que buscas no existe o ha sido movida, igual que el agua que toca la piedra de diatomita.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-rose-220 px-8 py-3 font-serif text-sm font-semibold uppercase tracking-[0.12em] text-ink-900 shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-260"
      >
        Volver al Refugio
      </Link>
    </div>
  );
}
