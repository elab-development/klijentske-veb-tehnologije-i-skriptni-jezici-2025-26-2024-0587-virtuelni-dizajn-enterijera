import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Registracija";

import Home from "./pages/Home";
import Ponuda from "./pages/Ponuda";
import Galerija from "./pages/Galerija";
import DizajnEditor from "./pages/DizajnEditor";
import Boje from "./pages/Boje";
import Podaci from "./pages/Podaci";

function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/ponuda" element={<Ponuda />} />
        <Route path="/boje" element={<Boje />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/dizajn-editor" element={<DizajnEditor />} />
        <Route path="/podaci" element={<Podaci />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;