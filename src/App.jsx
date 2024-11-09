import React from "react";
import Home from "./Components/Home";
import Loja from "./Components/Loja";
import Serie from "./Components/Serie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/loja">API Loja</Link>
            </li>
            <li>
              <Link to="/serie">API Serie Rick e Morty</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/serie" element={<Serie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
