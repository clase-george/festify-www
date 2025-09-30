"use client";

import { useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import { getArtists } from "@/services/artist";
import { Link } from "react-router-dom";

export default function Artists() {
  const [query, setQuery] = useState("");
  const results = getArtists(query);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a Home
      </Link>
      <h1 className="mt-2 text-2xl font-bold">Artistas</h1>

      <label className="mb-3 mt-3 block">
        <span className="sr-only">Buscar artistas</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre o género"
          aria-label="Buscar artistas"
          className="w-full max-w-md rounded border border-gray-300 px-3 py-2 focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
        />
      </label>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {results.map((a) => (
          <ArtistCard key={a.id} id={a.id} name={a.name} genre={a.genre} />
        ))}
      </section>

      <hr className="my-5 border-gray-200" />
    </main>
  );
}