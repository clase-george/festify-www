'use client';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold">FestivalHub (demo)</h1>
      <p className="mt-2 text-gray-700">Bienvenido. Empieza por ver los artistas.</p>
      <Link to="/artists" className="mt-4 inline-block">
        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500">
          Ir a Artistas
        </button>
      </Link>
    </main>
  );
}