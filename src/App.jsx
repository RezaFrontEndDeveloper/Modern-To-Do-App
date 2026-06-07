import React, { useEffect, useState } from "react";
import Input from "./Components/Input";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import ToDo from "./Components/To-Do";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
