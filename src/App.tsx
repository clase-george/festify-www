"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/screens/Home";
import PageNotFound from "@/screens/PageNotFound";

export default function App() {  //Este código configura el sistema de enrutamiento principal para una 
  return (                       // aplicación web hecha con React. Su función es mostrar la página de inicio (Home) cuando un usuario visita la raíz del sitio web.
    <HashRouter>
      <Routes>  
        <Route path="/" element={<Home />} />   {/*//La Ruta Raíz o Principal*/}
        <Route path="*" element={<PageNotFound />} /> {/*//(La Ruta "Catch-All" o Comodín)*/}
      </Routes>
    </HashRouter>
  );
}
