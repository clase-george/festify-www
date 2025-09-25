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

export function getArtists(search = ""): Artist[] { //search = "" deja el valor por defecto, entonces si no se pasa ningun parametro search sera ""
  const query = search.toLowerCase().trim();

  if (!query) {
    return ARTISTS;
  }

  return ARTISTS.filter((artist) => {
    const searchableFields = [artist.name, artist.genre ?? ""];

    return searchableFields.some((field) =>
      field.toLowerCase().includes(query)
    );
  });
}

export function getArtistById(id: number): Artist | null {
  const artist = ARTISTS.find((artist) => artist.id === id);
  return artist ?? null;
}
