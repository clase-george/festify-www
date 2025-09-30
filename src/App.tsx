"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/screens/Home";
import PageNotFound from "@/screens/PageNotFound";
import Artists from "@/screens/Artists";
import ArtistDetail from "@/screens/ArtistDetail";

export default function App() {  //Este código configura el sistema de enrutamiento principal para una 
  return (                       // aplicación web hecha con React. Su función es mostrar la página de inicio (Home) cuando un usuario visita la raíz del sitio web.
    <HashRouter>
      <Routes>  
        <Route path="/" element={<Home />} />   {/*//La Ruta Raíz o Principal*/}
        <Route path="/artists/" element={<Artists />} /> {/*Ruta para la página de artistas*/}
        <Route path="*" element={<PageNotFound />} /> {/*capturar cualquier URL que no coincida con ninguna de las otras rutas que hayas definido previamente.*/}
        <Route path="/artists/:id" element={<ArtistDetail />} /> {/*Ruta para el detalle de un artista específico*/}
      </Routes>
    </HashRouter>
  );
}
