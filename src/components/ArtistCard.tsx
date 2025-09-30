"use client";
//Los componentes son reutilizable
import { Link } from "react-router-dom";

type Props = {  //propiedades de un componente
  id: number;
  name: string;
  genre?: string;
  
};

export default function ArtistCard({
  id,
  name,  //accedo a las propiedades del componente
  genre
}: Props) { 
  return (
    <article className="rounded-lg border border-gray-200 p-4">
      <h3 className="mb-1 text-lg font-semibold">
        <Link
          to={`/artists/${id}`}
          aria-label={`Ver detalle de ${name}`}
          className="text-blue-600 hover:underline"
        >
          {name}
        </Link>
      </h3>
      <p className="text-sm text-gray-600">{genre ?? "—"}</p>
    </article>
  );
}