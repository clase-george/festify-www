export type Artist = {
  id: number;
  name: string;             //como crear clase
  genre?: string; //si tiene ? es opcional
};

export const ARTISTS: Artist[] = [ //export es para usarlo de fuera
  {
    id: 1,
    name: "Aurora Waves",
    genre: "Indie",
  },
  {
    id: 2,
    name: "Neon Drums",     //INicialiacion
    genre: "Electrónica",
  },
  {
    id: 3,
    name: "Ritmo Gitano",
    genre: "Fusión",
  },
];

export function getArtists(nameSearch = "", genreSearch=""): Artist[] { //search = "" deja el valor por defecto, entonces si no se pasa ningun parametro search sera ""
  const nameQuery = nameSearch.toLowerCase().trim();
  const genreQuery = genreSearch.toLowerCase().trim(); //normalizamos

  if (!nameQuery && !genreQuery) {
    return ARTISTS; //si no escribimos nada en el input devuelve todos los artistas
  }

  return ARTISTS.filter((artist) => { //esto recorre toda la lista de artistas
    // Verifica si el nombre y el género del artista incluyen las consultas de búsqueda
    // Si alguna consulta está vacía, se considera que coincide con todos los valores.
    const nombreIgual = artist.name.toLowerCase().includes(nameQuery); //en el include verifica que el nombre contenga lo que escribimos en el input

    const generoIgual = (artist.genre ?? '').toLowerCase().includes(genreQuery);

    return nombreIgual && generoIgual;
  });
}


export function getArtistById(id: number): Artist | null {
  const artist = ARTISTS.find((artist) => artist.id === id);
  return artist ?? null;
}
