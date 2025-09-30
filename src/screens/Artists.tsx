"use client";

import { useState } from "react"; //importa el hook useState desde React para manejar el estado local del componente.
import ArtistCard from "@/components/ArtistCard";
// Importa la función getArtists desde el servicio de artistas. 
// Esta función se encarga de recuperar la lista de artistas según la consulta ingresada.
import { getArtists } from "@/services/artist";

import { Link } from "react-router-dom";

export default function Artists() {
  const [nameQuery, setNameQuery] = useState("");
  const [genreQuery, setGenreQuery] = useState("");
// Se llama a la función getArtists con la consulta actual "query"
// y se asigna el resultado (lista de artistas) a la constante "results".
  const results = getArtists(nameQuery, genreQuery);
  

  return (
    <main className="mx-auto max-w-5xl p-6">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a Home
      </Link>
      <h1 className="mt-2 text-2xl font-bold">Artistas</h1>

    
    <label className="mb-3 mt-3 block">
      <span className="sr-only">Buscar artistas por nombre</span>

      {/* Input controlado: 
        - 'value' refleja el estado actual de 'query'
        - 'onChange' actualiza el estado 'query' con cada cambio realizado por el usuario
        - 'placeholder' indica al usuario lo que puede ingresar (nombre o género del artista)
        - 'aria-label' proporciona una descripción accesible para el input */}
      <input
        value={nameQuery}
        onChange={(e) => setNameQuery(e.target.value)}
        placeholder="Nombre"
        aria-label="Buscar artistas"
        className="w-full max-w-md rounded border border-gray-300 px-3 py-2 focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
      />
    </label>
    <label className="mb-3 mt-3 block">
      <span className="sr-only">Buscar artistas por genero</span>

      <input
        value={genreQuery}
        onChange={(e) => setGenreQuery(e.target.value)}
        placeholder="Genero"
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