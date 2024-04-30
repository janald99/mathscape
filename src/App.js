import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Programs from "./routes/Programs";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;