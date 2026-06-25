import { useState } from "react";

import todoStore from "../store/todoStore";
import type { Todoinput } from "../types/types";

export default function Input() {
  const addTodos = todoStore((state) => state.addTodos);
  const [inputFild, setInputFild] = useState<string>("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputFild.trim()) return;

    const newToDos: Todoinput = {
      id: crypto.randomUUID(),
      work: inputFild,
      isDone: false,
    };

    addTodos(newToDos);
    setInputFild("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border gap-2 bg-gray-900 dark:border-gray-500/30 h-12 max-w-md w-full rounded-full overflow-hidden">
      <input
        value={inputFild}
        onChange={(e) => setInputFild(e.target.value)}
        type="text"
        placeholder="enter"
        className="w-full  h-full pl-6 outline-none text-sm placeholder-gray-400 text-white"
        required
      />
      <button
        type="submit"
        className="text-white px-4 py-2 mr-2 rounded-3xl text-center bg-[#7c6af7] ">
        send
      </button>
      {/* <Button /> */}
    </form>
  );
}
