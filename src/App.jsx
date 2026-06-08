import React, { createContext, useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import ToDo from "./Components/To-Do";

export const DataContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

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
