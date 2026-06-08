import React, { createContext, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ToDo from "./pages/To-Do";

export const DataContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  function handleDeleteItemFromList(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <DataContext.Provider
      value={{
        todos,
        setTodos,
        handleDeleteItemFromList,
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
