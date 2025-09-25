"use client";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/screens/Home";

export default function App() {  //Este código configura el sistema de enrutamiento principal para una 
  return (                       // aplicación web hecha con React. Su función es mostrar la página de inicio (Home) cuando un usuario visita la raíz del sitio web.
    <HashRouter>
      <Routes>  
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
