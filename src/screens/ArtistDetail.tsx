'use client';
import { Link, useParams } from 'react-router-dom';
import { getArtistById } from '@/services/artist';

export default function ArtistDetail() {
  const params = useParams();
  const id = Number(params.id);
  const artist = getArtistById(id);

  if (!artist) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="text-2xl font-bold">Artista no encontrado</h1>
        <Link to="/artists" className="text-blue-600 hover:underline">← Volver a Artistas</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl p-6">
      <Link to="/artists" className="text-blue-600 hover:underline">← Volver a Artistas</Link>
      <h1 className="mt-2 text-2xl font-bold">{artist.name}</h1>
      <p className="mt-1 text-gray-700"><strong>Género:</strong> {artist.genre ?? '—'}</p>
    </main>
  );
}